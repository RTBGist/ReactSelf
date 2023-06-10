import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginIsLoading.test', () => {
  test('should return Admin', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'Admin',
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('Admin');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
