import { UserSchema } from 'entities/User';
import { LoginScheme } from 'features/AuthByUsername';
import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';

export interface StateScheme {
	user: UserSchema,

	// async reducers
	loginForm?: LoginScheme
}

export type StateSchemaKey = keyof StateScheme;

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateScheme>;
	reduce: (state: StateScheme, action: AnyAction) => CombinedState<StateScheme>;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateScheme> {
	reducerManager: ReducerManager;
}
