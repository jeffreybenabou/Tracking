import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log('eeeeeeeee');
  }
};

const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null && value !== undefined) {
      return JSON.parse(value);
    }
    return null;
  } catch (e) {
    console.log(e);
  }
};

const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {}
};

const removeAllData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {}
};

export {storeData, getData, removeData, removeAllData};
