import React, {ReactNode} from 'react';
import {View, StyleSheet} from 'react-native';

const ScreenContainer = (props: {children: ReactNode}) => {
  return <View style={styles.container}>{props.children}</View>;
};

export default ScreenContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
  },
});
