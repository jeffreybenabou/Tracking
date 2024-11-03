import React from 'react';
import Navigation from './src/navigation/Navigation.tsx';
import useInitData from './src/hooks/useInitData.tsx';
import useSmartSelectors from './src/hooks/useSmartSelectors.tsx';
import {ActivityIndicator} from 'react-native';
import useFieldListeners from './src/hooks/useFieldListeners.tsx';
import EditExpense from './src/screens/edit_expense/EditExpense.tsx';
import GenericModal from './src/components/modal/GenericModal.tsx';
import FilterModal from './src/screens/filter_modal/FilterModal.tsx';
import {typeOfModalToShow} from './src/utils/TypeOfModal.tsx';

const App = () => {
  const {loadingData, typeOfModal} = useSmartSelectors([
    'loadingData',
    'typeOfModal',
  ]);
  useInitData();
  useFieldListeners();

  return (
    <>
      {loadingData ? <ActivityIndicator /> : <Navigation />}
      <GenericModal>
        {typeOfModal === typeOfModalToShow.EDIT ? (
          <EditExpense />
        ) : (
          <FilterModal />
        )}
      </GenericModal>
    </>
  );
};

export default App;
