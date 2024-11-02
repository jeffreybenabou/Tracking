import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getData} from '../utils/StorageHandler.tsx';
import {setLoadingData, setMultiFields} from '../redux/ReduxState.tsx';
import {useDispatch} from 'react-redux';
import useSmartSelectors from './useSmartSelectors.tsx';

const useInitData = () => {
  const dispatch = useDispatch();
  const {loadingData} = useSmartSelectors(['loadingData']);
  useEffect(() => {
    const smartLoadFromStorage = async () => {
      const allKeys = await AsyncStorage.getAllKeys();
      const state: any = {};
      await Promise.all(
        allKeys.map(async key => {
          state[key] = await getData(key);
        }),
      ).then(() => {
        dispatch(setMultiFields(state));
      });
    };
    const loadData = async () => {
      await smartLoadFromStorage();
      dispatch(setLoadingData(false));
    };
    loadData();
  }, [loadingData]);

  return {};
};

export default useInitData;
