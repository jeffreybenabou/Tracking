import React from 'react';
import Navigation from './src/navigation/Navigation.tsx';
import useInitData from './src/hooks/useInitData.tsx';
import useSmartSelectors from './src/hooks/useSmartSelectors.tsx';
import {ActivityIndicator} from 'react-native';
import useFieldListeners from './src/hooks/useFieldListeners.tsx';
import EditExpense from './src/screens/edit_expense/EditExpense.tsx';
import GenericModal from './src/components/modal/GenericModal.tsx';

const App = () => {
  const {loadingData} = useSmartSelectors(['loadingData']);
  useInitData();
  useFieldListeners();

  return (
    <>
      {loadingData ? <ActivityIndicator /> : <Navigation />}
      <GenericModal>
        <EditExpense />
      </GenericModal>
    </>
  );
};

export default App;
