import React from 'react';
import CustomInput from '../../components/CustomInput.tsx';
import {StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {setFilteredExpensesValue} from '../../redux/ReduxState.tsx';
import useSmartSelectors from '../../hooks/useSmartSelectors.tsx';

const FilterSection = () => {
  const {filteredExpensesValue = ''} = useSmartSelectors([
    'filteredExpensesValue',
  ]);
  const dispatch = useDispatch();

  function filterExpenses(value: string) {
    dispatch(setFilteredExpensesValue(value));
  }

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
