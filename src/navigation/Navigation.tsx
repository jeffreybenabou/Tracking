import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/welcome/Welcome.tsx';
import useSmartSelectors from '../hooks/useSmartSelectors.tsx';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen.tsx';
import CustomHeader from './CustomHeader.tsx';
import CustomTabNavigation from './CustomTabNavigation.tsx';
import SCREEN_NAMES from '../utils/ScreensNames.tsx';
import Profile from '../screens/profile/Profile.tsx';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  const {fullName = ''} = useSmartSelectors(['fullName']);
  return fullName?.length > 0 ? <RestOfTheApp /> : <WelcomeStack />;
};

const WelcomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREEN_NAMES.WELCOME} component={WelcomeScreen} />
    </Stack.Navigator>
  );
};
const Tab = createBottomTabNavigator();

const TabNavigation = ({navigation}: {navigation: any}) => {
  return (
    <Tab.Navigator
      tabBar={() => <CustomTabNavigation navigation={navigation} />}
      screenOptions={{header: () => <CustomHeader />}}>
      <Tab.Screen name={SCREEN_NAMES.HOME} component={HomeScreen} />
      <Tab.Screen name={SCREEN_NAMES.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

const RestOfTheApp = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
    </Stack.Navigator>
  );
};
export default Navigation;
