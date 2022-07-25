import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '@env/environment';
import { counterReducer } from './counter.reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {

};


// export const metaReducers: MetaReducer<any>[] = !environment.production ? [counterReducer] : [counterReducer];
// export const counterReducer: MetaReducer<State>[] = !environment.production ? [] : [];

