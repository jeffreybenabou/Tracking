import {useDispatch} from 'react-redux';
import React, {useEffect, useState} from 'react';
import {ExpenseSection} from '../../types/Types.tsx';
import {setFilteredExpenses} from '../../redux/ReduxState.tsx';
import CustomInput from '../../components/CustomInput.tsx';
import {StyleSheet} from 'react-native';
import useSmartSelectors from '../../hooks/useSmartSelectors.tsx';
import useDebounce from '../../hooks/useDebounce.tsx';
import cloneDeep from 'lodash/cloneDeep';

const FilterSection = () => {
  const dispatch = useDispatch();

  const {expenses = []} = useSmartSelectors(['expenses']);
  const [filteredExpensesValue, setFilteredExpensesValue] =
    useState<string>('');

  const {start} = useDebounce(() => filterAction(filteredExpensesValue), 200);

  useEffect(() => {
    start();
  }, [filteredExpensesValue]);

  function filterExpenses(value: string) {
    setFilteredExpensesValue(value);
  }

  const filterAction = (value: string) => {
    let expenses_: ExpenseSection[] = cloneDeep(expenses);

    expenses_ = expenses_.filter((section: ExpenseSection) => {
      section.data = section.data.filter(date => {
        return (
          new Date(date.date)
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          date.title.toLowerCase().includes(value.toLowerCase()) ||
          date.amount.toString().toLowerCase().includes(value.toLowerCase())
        );
      });
      return section.data.length > 0;
    });

    dispatch(setFilteredExpenses(expenses_));
  };

  return (
    <CustomInput
      value={filteredExpensesValue}
      onChangeText={filterExpenses}
      containerStyle={style.filterContainer}
      showLabel={true}
      labelText={'Filter'}
    />
  );
};

const style = StyleSheet.create({
  filterContainer: {
    marginVertical: 10,
  },
});

export default FilterSection;
