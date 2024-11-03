import CustomButton from '../../components/CustomButton.tsx';
import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import useSmartSelectors from '../../hooks/useSmartSelectors.tsx';
import {useDispatch} from 'react-redux';
import {setFilters} from '../../redux/ReduxState.tsx';
import {filtersTypes} from '../../utils/TypeOfModal.tsx';

const Choosefilters = () => {
  const {filters = []} = useSmartSelectors(['filters']);
  const dispatch = useDispatch();
  const action = useCallback(
    (type: string) => {
      const newFilters = [...filters];
      if (newFilters.includes(type)) {
        newFilters.splice(newFilters.indexOf(type), 1);
      } else {
        newFilters.push(type);
      }
      dispatch(setFilters(newFilters));
    },
    [filters],
  );
  return (
    <View style={style.container}>
      <CustomButton
        onPress={() => {
          action(filtersTypes.DATE);
        }}
        style={[
          style.button,
          filters.includes(filtersTypes.DATE) && {
            backgroundColor: '#e8caca',
          },
        ]}
        textProps={{text: 'Date'}}
      />
      <CustomButton
        style={[
          style.button,
          filters.includes(filtersTypes.TITLE) && {
            backgroundColor: '#e8caca',
          },
        ]}
        onPress={() => {
          action(filtersTypes.TITLE);
        }}
        textProps={{text: 'Title'}}
      />
      <CustomButton
        onPress={() => {
          action(filtersTypes.AMOUNT);
        }}
        style={[
          style.button,
          filters.includes(filtersTypes.AMOUNT) && {
            backgroundColor: '#e8caca',
          },
        ]}
        textProps={{text: 'Amount'}}
      />
    </View>
  );
};

const style = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    height: 35,
    margin: 10,
  },

  container: {
    flexDirection: 'row',
  },
});

export default Choosefilters;
