import { UserSchema } from 'entities/User';
import { LoginScheme } from 'features/AuthByUsername';

export interface StateScheme {
	user: UserSchema,
	loginForm: LoginScheme
}
