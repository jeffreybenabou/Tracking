import React from 'react';
import {Text} from 'react-native';
import {CustomTextType} from '../types/Types.tsx';

const CustomText = (props: CustomTextType) => {
  return <Text {...props}>{props.text}</Text>;
};

export default CustomText;
