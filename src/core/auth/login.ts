/**
 * @license
 * Copyright (C) 2018 Gnucoop soc. coop.
 *
 * This file is part of the Gnucoop Angular Toolkit (gngt).
 *
 * Gnucoop Angular Toolkit (gngt) is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Gnucoop Angular Toolkit (gngt) is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Gnucoop Angular Toolkit (gngt).  If not, see http://www.gnu.org/licenses/.
 *
 */

import {ChangeDetectorRef, EventEmitter, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';

import {Store} from '@ngrx/store';

import {forceBooleanProp} from '@gngt/core/common';

import * as LoginPageActions from './login-page-actions';
import * as fromAuth from './reducers';

export abstract class LoginComponent implements OnDestroy {
  readonly loginForm: FormGroup;
  readonly valid: Observable<boolean>;

  private _disabled: boolean;
  get disabled(): boolean { return this._disabled; }
  set disabled(disabled: boolean) {
    this._disabled = forceBooleanProp(disabled);
    this._cdr.markForCheck();
  }

  private _loginEvt: EventEmitter<void> = new EventEmitter<void>();
  private _loginSub: Subscription = Subscription.EMPTY;

  constructor(fb: FormBuilder, store: Store<fromAuth.State>, private _cdr: ChangeDetectorRef) {
    this.loginForm = fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });

    this.valid = this.loginForm.valueChanges.pipe(
      map(() => this.loginForm.valid)
    );

    this._loginSub = this._loginEvt.subscribe(() => {
      store.dispatch(new LoginPageActions.Login({ credentials: this.loginForm.value }));
    });
  }

  login(): void {
    this._loginEvt.next();
  }

  ngOnDestroy(): void {
    this._loginSub.unsubscribe();
    this._loginEvt.complete();
  }
}
