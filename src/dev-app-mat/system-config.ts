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

/** Type declaration for ambient System. */
declare const System: any;

// Configure the base path and map the different node packages.
System.config({
  paths: {
    'node:*': 'node_modules/*'
  },
  map: {
    'plugin-babel': 'node:systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build': 'node:systemjs-plugin-babel/systemjs-babel-browser.js',
    'rxjs': 'node:rxjs',
    'main': 'main.js',
    'tslib': 'node:tslib/tslib.js',
    'date-fns': 'node:date-fns/index.js',
    'url-parse': 'node:url-parse/dist/url-parse.min.js',

    // Angular specific mappings.
    '@angular/core': 'node:@angular/core/bundles/core.umd.js',
    '@angular/common': 'node:@angular/common/bundles/common.umd.js',
    '@angular/common/http': 'node:@angular/common/bundles/common-http.umd.js',
    '@angular/compiler': 'node:@angular/compiler/bundles/compiler.umd.js',
    '@angular/forms': 'node:@angular/forms/bundles/forms.umd.js',
    '@angular/animations': 'node:@angular/animations/bundles/animations.umd.js',
    '@angular/elements': 'node:@angular/elements/bundles/elements.umd.js',
    '@angular/router': 'node:@angular/router/bundles/router.umd.js',
    '@angular/animations/browser': 'node:@angular/animations/bundles/animations-browser.umd.js',
    '@angular/platform-browser/animations':
      'node:@angular/platform-browser/bundles/platform-browser-animations.umd',
    '@angular/platform-browser':
      'node:@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic':
      'node:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',

    '@angular/cdk/a11y': 'node:@angular/cdk/bundles/cdk-a11y.umd.js',
    '@angular/cdk/accordion': 'node:@angular/cdk/bundles/cdk-accordion.umd.js',
    '@angular/cdk/bidi': 'node:@angular/cdk/bundles/cdk-bidi.umd.js',
    '@angular/cdk/coercion': 'node:@angular/cdk/bundles/cdk-coercion.umd.js',
    '@angular/cdk/collections': 'node:@angular/cdk/bundles/cdk-collections.umd.js',
    '@angular/cdk/drag-drop': 'node:@angular/cdk/bundles/cdk-drag-drop.umd.js',
    '@angular/cdk/keycodes': 'node:@angular/cdk/bundles/cdk-keycodes.umd.js',
    '@angular/cdk/layout': 'node:@angular/cdk/bundles/cdk-layout.umd.js',
    '@angular/cdk/observers': 'node:@angular/cdk/bundles/cdk-observers.umd.js',
    '@angular/cdk/overlay': 'node:@angular/cdk/bundles/cdk-overlay.umd.js',
    '@angular/cdk/platform': 'node:@angular/cdk/bundles/cdk-platform.umd.js',
    '@angular/cdk/portal': 'node:@angular/cdk/bundles/cdk-portal.umd.js',
    '@angular/cdk/scrolling': 'node:@angular/cdk/bundles/cdk-scrolling.umd.js',
    '@angular/cdk/stepper': 'node:@angular/cdk/bundles/cdk-stepper.umd.js',
    '@angular/cdk/table': 'node:@angular/cdk/bundles/cdk-table.umd.js',
    '@angular/cdk/text-field': 'node:@angular/cdk/bundles/cdk-text-field.umd.js',
    '@angular/cdk/tree': 'node:@angular/cdk/bundles/cdk-tree.umd.js',
    '@angular/material': 'node:@angular/material/bundles/material.umd.js',
    '@angular/material/button': 'node:@angular/material/bundles/material-button.umd.js',
    '@angular/material/card': 'node:@angular/material/bundles/material-card.umd.js',
    '@angular/material/checkbox': 'node:@angular/material/bundles/material-checkbox.umd.js',
    '@angular/material/core': 'node:@angular/material/bundles/material-core.umd.js',
    '@angular/material/dialog': 'node:@angular/material/bundles/material-dialog.umd.js',
    '@angular/material/divider': 'node:@angular/material/bundles/material-divider.umd.js',
    '@angular/material/expansion': 'node:@angular/material/bundles/material-expansion.umd.js',
    '@angular/material/form-field': 'node:@angular/material/bundles/material-form-field.umd.js',
    '@angular/material/icon': 'node:@angular/material/bundles/material-icon.umd.js',
    '@angular/material/input': 'node:@angular/material/bundles/material-input.umd.js',
    '@angular/material/list': 'node:@angular/material/bundles/material-list.umd.js',
    '@angular/material/paginator': 'node:@angular/material/bundles/material-paginator.umd.js',
    '@angular/material/progress-bar': 'node:@angular/material/bundles/material-progress-bar.umd.js',
    '@angular/material/select': 'node:@angular/material/bundles/material-select.umd.js',
    '@angular/material/sidenav': 'node:@angular/material/bundles/material-sidenav.umd.js',
    '@angular/material/snack-bar': 'node:@angular/material/bundles/material-snack-bar.umd.js',
    '@angular/material/sort': 'node:@angular/material/bundles/material-sort.umd.js',
    '@angular/material/table': 'node:@angular/material/bundles/material-table.umd.js',
    '@angular/material/toolbar': 'node:@angular/material/bundles/material-toolbar.umd.js',
    '@angular/material/tooltip': 'node:@angular/material/bundles/material-tooltip.umd.js',

    '@ngrx/store': 'node:@ngrx/store/bundles/store.umd.js',
    '@ngrx/effects': 'node:@ngrx/effects/bundles/effects.umd.js',

    '@ngx-translate/core': 'node:@ngx-translate/core/bundles/ngx-translate-core.umd.js',
    '@ngx-translate/http-loader':
      'node:@ngx-translate/http-loader/bundles/ngx-translate-http-loader.umd.js',

    '@gngt/core': 'dist/packages/core/index.js',
    '@gngt/material': 'dist/packages/material/index.js',
    '@gngt/material-examples': 'dist/packages/material-examples/index.js',

    '@gngt/core/admin': 'dist/packages/core/admin/index.js',
    '@gngt/core/auth': 'dist/packages/core/auth/index.js',
    '@gngt/core/calendar': 'dist/packages/core/calendar/index.js',
    '@gngt/core/common': 'dist/packages/core/common/index.js',
    '@gngt/core/model': 'dist/packages/core/model/index.js',
    '@gngt/core/reducers': 'dist/packages/core/reducers/index.js',
    '@gngt/core/translations': 'dist/packages/core/translations/index.js',

    '@gngt/material/admin': 'dist/packages/material/admin/index.js',
    '@gngt/material/auth': 'dist/packages/material/auth/index.js',
    '@gngt/material/calendar': 'dist/packages/material/calendar/index.js',
    '@gngt/material/model': 'dist/packages/material/model/index.js',
  },
  packages: {
    // Thirdparty barrels.
    'rxjs': {main: 'index'},
    'rxjs/operators': {main: 'index'},

    // Set the default extension for the root package, because otherwise the dev-app-mat can't
    // be built within the production mode. Due to missing file extensions.
    '.': {
      defaultExtension: 'js'
    }
  },
  transpiler: 'plugin-babel'
});
