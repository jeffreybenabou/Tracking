import React from 'react';
import {StyleSheet} from 'react-native';
import ScreenContainer from '../../components/ScreenContainer.tsx';
import CustomListSection from '../../components/list_section/CustomListSection.tsx';
import useSmartSelectors from '../../hooks/useSmartSelectors.tsx';
import CustomText from '../../components/CustomText.tsx';
import FilterSection from './FilterSection.tsx';

const HomeScreen = () => {
  const {filterExpenses = [], totalAmount} = useSmartSelectors([
    'filterExpenses',
    'totalAmount',
  ]);

  return (
    <ScreenContainer>
      <CustomText
        style={style.totalAmount}
        text={`Total Expenses: ${totalAmount}` + '$'}
      />
      <FilterSection />
      <CustomListSection sections={filterExpenses} />
    </ScreenContainer>
  );
};

const style = StyleSheet.create({
  totalAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
export default HomeScreen;
