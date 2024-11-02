import React from 'react';
import {StyleSheet, View} from 'react-native';
import CustomText from '../components/CustomText.tsx';
import useSmartSelectors from '../hooks/useSmartSelectors.tsx';

const CustomHeader = () => {
  const {fullName} = useSmartSelectors(['fullName']);
  return (
    <View style={styles.header}>
      <View>
        <CustomText text={'' + fullName} style={styles.headerText} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#d1d1d1',
    width: '100%',
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    letterSpacing: 1,
  },
});

export default CustomHeader;
