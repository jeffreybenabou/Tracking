import React from 'react';
import {StyleSheet, View} from 'react-native';
import CustomButton from '../components/CustomButton.tsx';
import {ICON_TYPES} from '../components/CustomIcon.tsx';
import SCREEN_NAMES from '../utils/ScreensNames.tsx';
import {useModal} from '../components/modal/ModalProvider.tsx';
import {useDispatch} from 'react-redux';
import {setTypeOfModal} from '../redux/ReduxState.tsx';
import {typeOfModalToShow} from '../utils/TypeOfModal.tsx';

const CustomTabNavigation = ({navigation}: {navigation: any}) => {
  const {openModal} = useModal();
  const dispatch = useDispatch();
  return (
    <View style={style.container}>
      <CustomButton
        onPress={() => navigation.navigate(SCREEN_NAMES.HOME)}
        style={style.button}
        iconProps={{iconType: ICON_TYPES.HOME, iconSize: 20}}
        textProps={{text: 'Home'}}
      />
      <CustomButton
        onPress={() => {
          dispatch(setTypeOfModal(typeOfModalToShow.EDIT));
          openModal();
        }}
        style={style.button}
        iconProps={{iconType: ICON_TYPES.PLUS, iconSize: 20}}
        textProps={{text: 'Add Expense'}}
      />
      <CustomButton
        onPress={() => navigation.navigate(SCREEN_NAMES.PROFILE)}
        style={style.button}
        iconProps={{iconType: ICON_TYPES.PERSON, iconSize: 20}}
        textProps={{text: 'Profile'}}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    minHeight: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  button: {
    alignItems: 'center',
  },
});

export default CustomTabNavigation;
