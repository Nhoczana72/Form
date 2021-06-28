import {profileState} from './reducer/reducer.form'
import {districtState} from './reducer/reducer.data'

import {Reducer, Action, Store} from 'redux';
import {BehaviorSubject} from 'rxjs';
import {Epic} from 'redux-observable';


export type RootStoreState = {
    // configuration?: ConfigurationState;
   profile:profileState,
  data:districtState
  };
  
export type RootEpicDependency = {};

export type RootEpic = Epic<Action, Action, RootStoreState, RootEpicDependency>;

  
export type ReducerManger = {
    reduce: Reducer<RootStoreState, Action>;
    add(key: string, reducer: Reducer): void;
    remove(key: string): void;
  };
  export type StoreContainer = {
    store: Store;
  reducerManager: ReducerManger;
  action$: BehaviorSubject<Action>;
  
  persistor: any;
  };

  