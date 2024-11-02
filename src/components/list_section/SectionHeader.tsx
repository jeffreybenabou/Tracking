import {StyleSheet, View} from 'react-native';
import CustomText from '../CustomText.tsx';
import React from 'react';

const SectionHeader = ({title}: {title: string}) => {
  return (
    <View key={title} style={style.container}>
      <CustomText text={title} style={style.text} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f2f2f2',
  },
  text: {
    fontWeight: 'bold',
  },
});

export default React.memo(SectionHeader);
