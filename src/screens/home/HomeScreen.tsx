import React from 'react';
import {StyleSheet} from 'react-native';
import ScreenContainer from '../../components/ScreenContainer.tsx';
import CustomListSection from '../../components/list_section/CustomListSection.tsx';
import useSmartSelectors from '../../hooks/useSmartSelectors.tsx';
import CustomText from '../../components/CustomText.tsx';
import CustomButton from '../../components/CustomButton.tsx';
import {useModal} from '../../components/modal/ModalProvider.tsx';
import {useDispatch} from 'react-redux';

import {setTypeOfModal} from '../../redux/ReduxState.tsx';
import {regularButton} from '../../utils/globalStyles.tsx';
import {typeOfModalToShow} from '../../utils/TypeOfModal.tsx';

const HomeScreen = () => {
  const {openModal} = useModal();
  const dispatch = useDispatch();
  const {filterExpenses = [], totalAmount} = useSmartSelectors([
    'filterExpenses',
    'totalAmount',
  ]);

  const action = () => {
    dispatch(setTypeOfModal(typeOfModalToShow.FILTER));
    openModal();
  };

  return (
    <ScreenContainer>
      <CustomText
        style={style.totalAmount}
        text={`Total Expenses: ${totalAmount}` + '$'}
      />
      <CustomButton
        style={[regularButton.button, style.button]}
        onPress={action}
        textProps={{
          style: regularButton.text,
          text: 'Filter list',
        }}
      />

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
  button: {
    marginVertical: 10,
  },
});
export default HomeScreen;
