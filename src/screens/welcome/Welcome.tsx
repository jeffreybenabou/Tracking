import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import ScreenContainer from '../../components/ScreenContainer.tsx';
import CustomInput from '../../components/CustomInput.tsx';
import CustomButton from '../../components/CustomButton.tsx';
import {useDispatch} from 'react-redux';
import {setFullName} from '../../redux/ReduxState.tsx';
import {regularButton} from '../../utils/globalStyles.tsx';

const WelcomeScreen = () => {
  const [localFullName, setLocalFullName] = useState<string>('');
  const dispatch = useDispatch();
  const saveFullName = () => {
    dispatch(setFullName(localFullName));
  };

  return (
    <ScreenContainer>
      <CustomInput
        value={localFullName}
        onChangeText={setLocalFullName}
        showLabel={true}
        labelText={'Full Name'}
      />
      <CustomButton
        style={[regularButton.button, style.button]}
        textProps={{style: regularButton.text, text: 'Save Full Name'}}
        onPress={saveFullName}
      />
    </ScreenContainer>
  );
};

const style = StyleSheet.create({
  button: {
    marginVertical: 20,
  },
});
export default WelcomeScreen;
