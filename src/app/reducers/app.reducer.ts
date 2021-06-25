import {AppActions} from '../actions';

export function app(state = [], {type, payload}) {
  switch (type) {
    case AppActions.GET_APP_SUCCESS:
      return payload;
    default:
      return state;
  }
}
