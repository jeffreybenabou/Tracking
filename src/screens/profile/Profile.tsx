import ScreenContainer from '../../components/ScreenContainer.tsx';
import CustomButton from '../../components/CustomButton.tsx';
import useSmartSelectors from '../../hooks/useSmartSelectors.tsx';
import CustomText from '../../components/CustomText.tsx';
import {useEffect, useState} from 'react';
import {regularButton} from '../../utils/globalStyles.tsx';
import {StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {restState} from '../../redux/ReduxState.tsx';

const Profile = () => {
  const {expenses = []} = useSmartSelectors(['expenses']);
  const dispatch = useDispatch();
  const [totalExpenses, setTotalExpenses] = useState<[number, number]>([0, 0]);

  const removeAllData = () => {
    dispatch(restState());
    AsyncStorage.clear();
  };
  useEffect(() => {
    const total: [number, number] = expenses.reduce(
      (acc, curr) => {
        return [
          acc[0] + curr.data.length,
          acc[1] + curr.data.reduce((acc, curr) => acc + curr.amount, 0),
        ];
      },
      [0, 0],
    );
    setTotalExpenses(total);
  }, []);

  return (
    <ScreenContainer>
      <CustomText
        text={`Total expenses: ${totalExpenses[0]} with total amount of ${totalExpenses[1]}`}
      />
      <CustomButton
        style={[regularButton.button, style.logoutButton]}
        textProps={{text: 'Logout', style: regularButton.text}}
        onPress={removeAllData}
      />
    </ScreenContainer>
  );
};

const style = StyleSheet.create({
  logoutButton: {
    marginTop: 20,
  },
});

export default Profile;
