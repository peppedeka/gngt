import {generateInitialModelState, modelReducer, State as ModelState} from '@gngt/core/model';

import {<%= classify(model) %>Actions, <%= classify(model) %>ActionTypes} from './<%= dasherize(model) %>.actions';
import {<%= classify(model) %>} from './<%= dasherize(model) %>';


// tslint:disable-next-line
export interface State extends ModelState<<%= classify(model) %>> {
}

const initialState: State = {...generateInitialModelState<<%= classify(model) %>>(), ...{
}};

export const <%= camelize(model) %>StatePrefix = '<%= camelize(package) %>';


export function <%= camelize(model) %>Reducer(
  state: State = initialState, action: <%= classify(model) %>Actions
): State {
  return modelReducer<<%= classify(model) %>>(state, action, <%= classify(model) %>ActionTypes);
}
