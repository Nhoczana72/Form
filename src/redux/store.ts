import {createStore, applyMiddleware, Action, compose} from 'redux';
import {BehaviorSubject} from 'rxjs';
import {StoreContainer, RootStoreState} from './type';
import {createReducerManager} from './reducer';
import {dataEpic} from './epic/epic'
import {
    profileReducer
  } from './reducer/reducer.form';
  import {dataReducer
      } from './reducer/reducer.data';
  
  import logger from 'redux-logger';
  import {persistStore, persistReducer} from 'redux-persist';
  import AsyncStorage from '@react-native-async-storage/async-storage';



  export function configureStore(): StoreContainer {
    const reducerManager = createReducerManager({
      profile:profileReducer,
      data:dataReducer,
    });
  
    const persistConfig = {
        key: 'root',
        blacklist: [],
        storage: AsyncStorage,
        timeout: 0,
      };
   
    // Create a store with the root reducer function being the one exposed by the manager.
 
    const action$ = new BehaviorSubject<Action>({type: 'init'});
    const reducer = (
      state: RootStoreState | undefined,
      action: Action<string>,
    ) => {
      action$.next(action);
      return reducerManager.reduce(state, action);
    };
    const persistedReducer: any = persistReducer( persistConfig,reducer);
     const store = createStore<RootStoreState, Action<string>, any, any>(
      persistedReducer,
      applyMiddleware( logger),

    );

    const persistor = persistStore(store);
  
    return {
      reducerManager,
      store,
      action$,
      persistor,
    };
  }
  