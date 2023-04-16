import { CounterScheme } from '../types/counterScheme';
import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice', () => {
  test('decrement value', () => {
    const state: CounterScheme = {
      value: 10,
    };
    expect(
      counterReducer(state as CounterScheme, counterActions.decrement),
    ).toEqual({ value: 9 });
  });

  test('increment value', () => {
    const state: CounterScheme = {
      value: 10,
    };
    expect(
      counterReducer(state as CounterScheme, counterActions.increment),
    ).toEqual({ value: 11 });
  });

  test('should work with empty state', () => {
    expect(
      counterReducer(undefined, counterActions.increment),
    ).toEqual({ value: 1 });
  });
});
