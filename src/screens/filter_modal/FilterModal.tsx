import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import CustomText from '../../components/CustomText.tsx';
import FilterSection from '../home/FilterSection.tsx';
import CustomButton from '../../components/CustomButton.tsx';
import {regularButton} from '../../utils/globalStyles.tsx';
import {ExpenseSection} from '../../types/Types.tsx';
import cloneDeep from 'lodash/cloneDeep';
import {
  setFilteredExpenses,
  setFilteredExpensesValue,
  setFilters,
} from '../../redux/ReduxState.tsx';
import useSmartSelectors from '../../hooks/useSmartSelectors.tsx';
import {useDispatch} from 'react-redux';
import {useModal} from '../../components/modal/ModalProvider.tsx';

const FilterModal = () => {
  const dispatch = useDispatch();
  const {closeModal} = useModal();
  const [expenseAmount, setAmount] = React.useState<string>('');
  const [expenseTitle, setTitle] = React.useState<string>('');
  const [expenseDate, setDate] = React.useState<string>('');
  const {expenses = []} = useSmartSelectors(['expenses']);

  const changeExpenseSearch = (key: string, value: string) => {
    if (key === 'title') {
      setTitle(value);
    } else if (key === 'amount') {
      setAmount(value);
    } else {
      setDate(value);
    }
  };

  const filterAction = () => {
    let expenses_: ExpenseSection[] = cloneDeep(expenses);
    expenses_ = expenses_.filter(section => {
      section.data = section.data.filter(expense => {
        const matchesDate = new Date(expense.date)
          .toString()
          .toLowerCase()
          .includes(expenseDate.toLowerCase());
        const matchesTitle = expense.title
          .toLowerCase()
          .includes(expenseTitle.toLowerCase());
        const matchesAmount = expense.amount
          .toString()
          .toLowerCase()
          .includes(expenseAmount.toLowerCase());
        return matchesTitle && matchesAmount && matchesDate;
      });
      return section.data.length > 0;
    });
    dispatch(setFilteredExpenses(expenses_));
    closeModal();
  };

  const restFilters = useCallback(() => {
    dispatch(setFilters([]));
    dispatch(setFilteredExpenses(expenses));
    dispatch(setFilteredExpensesValue(''));
  }, [dispatch]);

  return (
    <View style={style.container}>
      <CustomText style={style.title} text={'Filter Modal'} />
      <FilterSection
        value={expenseTitle}
        changeValue={changeExpenseSearch}
        keyValue={'title'}
        translation={'Title'}
      />
      <FilterSection
        value={expenseAmount}
        changeValue={changeExpenseSearch}
        keyValue={'amount'}
        translation={'Amount'}
      />
      <FilterSection
        value={expenseDate}
        changeValue={changeExpenseSearch}
        keyValue={'date'}
        translation={'Date'}
      />
      <CustomButton
        onPress={restFilters}
        textProps={{style: style.clean, text: 'Clean Filters'}}
      />
      <CustomButton
        style={regularButton.button}
        onPress={filterAction}
        textProps={{style: regularButton.text, text: 'Apply'}}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 20,
    width: 300,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  pressedButton: {
    backgroundColor: 'red',
  },
  unPressedButton: {
    backgroundColor: 'blue',
  },
  clean: {
    marginVertical: 10,
    color: 'red',
    borderBottomWidth: 1,
    alignSelf: 'flex-start',
    textAlign: 'left',
    borderColor: 'red',
  },
});

export default FilterModal;
