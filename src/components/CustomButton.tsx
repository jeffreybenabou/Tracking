import React from 'react';
import CustomText from './CustomText.tsx';

import {TouchableOpacity} from 'react-native';
import {CustomButtonProps} from '../types/Types.tsx';
import CustomIcon from './CustomIcon.tsx';

const CustomButton: React.FC<CustomButtonProps> = props => {
  return (
    <TouchableOpacity {...props}>
      {props.iconProps && <CustomIcon {...props.iconProps} />}
      <CustomText {...props.textProps} />
    </TouchableOpacity>
  );
};

export default CustomButton;
