import { environment } from '@env/environment';
import {
  ActionReducer,
  ActionReducerMap, MetaReducer
} from '@ngrx/store';
import { counterReducer } from './counter.reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  count: counterReducer
};

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = !environment.production ? [debug] : [];

