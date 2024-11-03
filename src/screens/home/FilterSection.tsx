import React from 'react';
import CustomInput from '../../components/CustomInput.tsx';
import {StyleSheet} from 'react-native';

const FilterSection = ({
  translation,
  keyValue,
  changeValue,
  value,
}: {
  translation: string;
  keyValue: string;
  changeValue: (key: string, value: string) => void;
  value: string;
}) => {
  const filterExpenses = (inputValue: string) => {
    changeValue(keyValue, inputValue);
  };

  return (
    <CustomInput
      value={value}
      onChangeText={filterExpenses}
      containerStyle={style.filterContainer}
      showLabel={true}
      labelText={translation}
    />
  );
};

const style = StyleSheet.create({
  filterContainer: {
    marginVertical: 10,
  },
});

export default FilterSection;
