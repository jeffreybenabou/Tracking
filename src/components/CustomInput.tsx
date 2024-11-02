import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

import CustomText from './CustomText.tsx';
import {CustomInputProps} from '../types/Types.tsx';

const CustomInput: React.FC<CustomInputProps> = props => {
  return (
    <View style={[style.container, props.containerStyle]}>
      {props.showLabel && (
        <CustomText text={props.labelText} style={style.labelContainer} />
      )}
      <TextInput
        clearButtonMode={'while-editing'}
        {...props}
        style={[{flex: 1, padding: 0, paddingHorizontal: 22}, props.style]}
      />
    </View>
  );
};

const style = StyleSheet.create({
  labelContainer: {
    fontSize: 17,
    color: '#989898',
    paddingHorizontal: 10,
    backgroundColor: 'white',
    zIndex: 100,
    position: 'absolute',
    top: -10,
    left: 10,
  },
  container: {
    minHeight: 55,
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default CustomInput;
