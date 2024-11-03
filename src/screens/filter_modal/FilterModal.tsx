import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import CustomText from '../../components/CustomText.tsx';
import FilterSection from '../home/FilterSection.tsx';
import Choosefilters from './Choosefilters.tsx';
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
  const {filteredExpensesValue = '', expenses = []} = useSmartSelectors([
    'filteredExpensesValue',
    'expenses',
  ]);

  const filterAction = () => {
    let expenses_: ExpenseSection[] = cloneDeep(expenses);
    expenses_ = expenses_.filter((section: ExpenseSection) => {
      section.data = section.data.filter(date => {
        return (
          new Date(date.date)
            .toString()
            .toLowerCase()
            .includes(filteredExpensesValue.toLowerCase()) ||
          date.title
            .toLowerCase()
            .includes(filteredExpensesValue.toLowerCase()) ||
          date.amount
            .toString()
            .toLowerCase()
            .includes(filteredExpensesValue.toLowerCase())
        );
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
      <FilterSection />
      <CustomButton
        onPress={restFilters}
        textProps={{style: style.clean, text: 'Clean Filters'}}
      />
      <Choosefilters />
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
    color: 'red',
    borderBottomWidth: 1,
    alignSelf: 'flex-start',
    textAlign: 'left',
    borderColor: 'red',
  },
});

export default FilterModal;
