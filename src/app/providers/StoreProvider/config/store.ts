import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername';
import { userReducer } from 'entities/User';
import { StateScheme } from './StateScheme';

export function createReduxStore(initialState?: StateScheme) {
  const rootReducers: ReducersMapObject<StateScheme> = {
    user: userReducer,
    loginForm: loginReducer,
  };

  return configureStore<StateScheme>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
