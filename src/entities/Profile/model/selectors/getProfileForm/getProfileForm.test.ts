import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
  test('should return data', () => {
    const data = {
      username: 'Storybook',
      age: 26,
      lastname: 'Storybookov',
      first: 'Story',
      currency: Currency.EUR,
      city: 'Tomsk',
      country: Country.Russia,
    };

    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
