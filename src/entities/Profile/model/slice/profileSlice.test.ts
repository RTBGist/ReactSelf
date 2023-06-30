import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

const data = {
  username: 'Storybook',
  age: 26,
  lastname: 'Storybookov',
  first: 'Story',
  currency: Currency.EUR,
  city: 'Tomsk',
  country: Country.Russia,
};

describe('profileSlice.test', () => {
  test('test readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(profileReducer(
				state as ProfileSchema,
				profileActions.setReadonly(true),
    )).toEqual({ readonly: true });
  });

  test('update profile', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: { ...data },
    };
    expect(profileReducer(
				state as ProfileSchema,
				profileActions.updateProfile({ city: 'Moscow' }),
    )).toEqual({ form: { ...data, city: 'Moscow' } });
  });

  test('test cancelEdit', () => {
    const state: DeepPartial<ProfileSchema> = {};
    expect(profileReducer(
				state as ProfileSchema,
				profileActions.onCancelEdit(),
    )).toEqual({
      readonly: true,
      validateError: undefined,
    });
  });

  test('update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateError: [ValidateProfileError.SERVER_ERROR],
    };
    expect(profileReducer(
				state as ProfileSchema,
				updateProfileData.pending,
    )).toEqual({
      isLoading: true,
      validateError: undefined,
    });
  });

  test('update profile service fullfiled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };
    expect(profileReducer(
				state as ProfileSchema,
				updateProfileData.fulfilled(data, ''),
    )).toEqual({
      isLoading: false,
      readonly: true,
      form: data,
      data,
    });
  });
});
