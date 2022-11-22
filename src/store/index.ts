import {
  AnyAction,
  combineReducers,
  configureStore,
  Reducer,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { ActivityListReducer } from './activityList/store';
import { CommonReducer } from './common/store';
// import { ActivityListUpdateActivityListAction } from './activityList/action';

//เพิ่ม whitelist
const appReducer = combineReducers({
  activityList: ActivityListReducer,
  // common: CommonReducer,
});

const rootReducer = (state: RootState | undefined, action: AnyAction) => {
  return appReducer(action.type === 'LOGOUT' ? undefined : state, action);
};
// const rootReducer = (
//   state: RootState | undefined,
//   action: ActivityListUpdateActivityListAction,
// ) => {
//   return appReducer(state, action);
// };

const persistedReducer = persistReducer(
  {
    key: 'rootReducer',
    storage,
    whitelist: ['activityList'], //เพิ่ม appReducer
  },
  rootReducer,
);

const middleWares = [thunk, logger];

export const store = configureStore({
  reducer: persistedReducer,
  middleware: middleWares,
  devTools: true,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof appReducer>;

export type DispatchType<T = RootState> = ThunkDispatch<T, never, AnyAction>;
