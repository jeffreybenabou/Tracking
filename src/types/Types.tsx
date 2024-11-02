import {
  SectionListProps,
  TextInputProps,
  TextProps,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

interface CustomInputProps extends TextInputProps {
  containerStyle?: ViewStyle;
  showLabel: boolean;
  labelText: string;
  labelStyle?: TextStyle;
}

interface CustomButtonProps extends TouchableOpacityProps {
  textProps: CustomTextType;
  iconProps?: CustomIconProps;
}

interface CustomTextType extends TextProps {
  text: string;
  style?: TextStyle;
  boldStyle?: TextStyle;
}

type Expense = {
  id: number;
  title: string;
  amount: number;
  date: Date;
};

type ExpenseSection = {
  title: string;
  date: Date;
  data: Expense[];
};

interface CustomIconProps {
  iconType?: number | null | undefined;
  iconColor?: string;
  iconSize?: number;
  iconStyle?: object;
  iconContainerStyle?: object;
  onPress?: () => void;
  testId?: string;
}

interface SectionProps extends SectionListProps<Expense> {}

export type {
  CustomIconProps,
  Expense,
  CustomInputProps,
  CustomTextType,
  ExpenseSection,
  SectionProps,
  CustomButtonProps,
};
