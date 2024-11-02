import {useEffect} from 'react';
import useSmartSelectors from './useSmartSelectors.tsx';
import {useDispatch} from 'react-redux';
import {setTotalAmount} from '../redux/ReduxState.tsx';

const useFieldListeners = () => {
  const {expenses = []} = useSmartSelectors(['expenses']);
  const dispatch = useDispatch();
  useEffect(() => {
    const totalAmount = expenses.reduce((sum, section) => {
      return (
        sum +
        section.data.reduce(
          (sectionSum, expense) => sectionSum + expense.amount,
          0,
        )
      );
    }, 0);
    dispatch(setTotalAmount(totalAmount));
  }, [expenses]);
};

export default useFieldListeners;
