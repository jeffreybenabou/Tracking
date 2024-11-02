import {useSelector} from 'react-redux';
import {createSelector} from 'reselect';
import {CounterState} from '../redux/ReduxState';

const useSmartSelectors = <T extends keyof CounterState>(keys: T[]) => {
  const selector = createSelector(
    (state: CounterState) => state,
    (counterState: CounterState) => {
      const result: Partial<CounterState> = {};
      keys.forEach(key => {
        result[key] = counterState[key];
      });
      return result;
    },
  );
  return useSelector(selector);
};

export default useSmartSelectors;
