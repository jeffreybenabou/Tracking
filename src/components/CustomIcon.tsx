import React from 'react';
import {I18nManager, View} from 'react-native';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {CustomIconProps} from '../types/Types.tsx';

export const ICON_TYPES = {
  PERSON: 1,
  EMAIL: 2,
  PASSWORD: 3,
  ARROW_LEFT: 4,
  GOOGLE: 5,
  FACEBOOK: 6,
  APPLE: 7,
  HOME: 8,
  CHECKBOX: 9,
  SETTINGS: 10,
  PLUS: 11,
  SORT: 12,
  NOTIFICATION: 13,
  CART: 14,
  WEIGHT: 15,
  WORK: 16,
  EVENT: 17,
  READING: 18,
  HEALTH: 19,
  TRAVEL: 20,
  SPORT: 21,
  IMPORTANT: 22,
  WADDING: 23,
  IDEA: 24,
  OTHER: 25,
  CONFIRMATION: 26,
  DATE: 27,
  DOWN_ARROW: 28,
  PHONE: 29,
  SHARE: 30,
  CAMERA: 31,
  COPY: 32,
  CLOSE: 33,
  EDIT: 34,
  WHATSAPP: 35,
  MESSAGE: 36,
  ERROR: 37,
  WARNING: 38,
  INFO: 39,
  SUCCESS: 40,
  EXIT: 41,
  SEARCH: 42,
  EYE_HIDDEN: 43,
  EYE_VISIBLE: 44,
  EMOJI: 45,
  SEND: 46,
  TRASH: 47,
  SAVE: 48,
  PARTICIPANTS: 49,
  BACK_ARROW: 50,
  LOCATION: 51,
  LOADING: 52,
  FILTER: 53,
  VERTICLE_DOTS: 54,
  LINK: 55,
  STAR: 56,
  DOT: 57,
  SMALL_TRIANGLE: 58,
  ARROW_LEFT1: 59,
  TASKS: 60,
  CHATS: 61,
  REMINDER: 62,
  LOGOUT: 63,
  HEART: 64,
  DOG: 65,
  GRADUATION: 66,
  FOOD: 67,
  LEISURE: 68,
  GROUP: 69,
};
//add
const CustomIcon: React.FC<CustomIconProps> = ({
  testId,
  iconType = 0,
  iconSize = 1,
  iconStyle,
  onPress = () => {},
  iconContainerStyle,
  iconColor,
}) => {
  const icon = () => {
    switch (iconType) {
      case ICON_TYPES.GROUP:
        return (
          <MaterialCommunityIcons
            name="account-group"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.FOOD:
        return (
          <MaterialIcons
            name="fastfood"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.GRADUATION:
        return (
          <FontAwesome
            name="graduation-cap"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.DOG:
        return (
          <MaterialCommunityIcons
            name="dog-side"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.HEART:
        return (
          <Ionicons
            name="heart"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.LOGOUT:
        return (
          <MaterialIcons
            name="logout"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );

      case ICON_TYPES.ARROW_LEFT1:
        return (
          <AntDesign
            name="arrowleft"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.SMALL_TRIANGLE:
        return (
          <Entypo
            name="triangle-left"
            size={iconSize}
            color={iconColor}
            style={[
              iconStyle,
              {transform: [{rotateX: I18nManager.isRTL ? '0deg' : '180deg'}]},
            ]}
          />
        );
      case ICON_TYPES.DOT:
        return (
          <Entypo
            adjustsFontSizeToFit={true}
            size={iconSize}
            color={iconColor}
            style={iconStyle}
            name={'dot-single'}
          />
        );
      case ICON_TYPES.REMINDER:
        return (
          <MaterialCommunityIcons
            name="bell-ring"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );

      case ICON_TYPES.STAR:
        return (
          <MaterialIcons
            name="star"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.LINK:
        return (
          <MaterialIcons
            name="link"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.VERTICLE_DOTS:
        return (
          <MaterialIcons
            name="more-vert"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.FILTER:
        return (
          <MaterialIcons
            name="filter-list"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.LOADING:
        return (
          <MaterialIcons
            name="sync"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.LOCATION:
        return (
          <MaterialIcons
            name="location-on"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.BACK_ARROW:
        return (
          <MaterialIcons
            name="arrow-back"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.PARTICIPANTS:
        return (
          <MaterialIcons
            name="group"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.SAVE:
        return (
          <MaterialIcons
            name="save"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.TRASH:
        return (
          <MaterialIcons
            name="delete"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.SEND:
        return (
          <MaterialIcons
            name="send"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.EMOJI:
        return (
          <MaterialIcons
            name="emoji-emotions"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.EYE_VISIBLE:
        return (
          <MaterialIcons
            name="visibility"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.EYE_HIDDEN:
        return (
          <MaterialIcons
            name="visibility-off"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.LEISURE:
        return (
          <MaterialCommunityIcons
            name="baseball-bat"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.PERSON:
        return (
          <IonicIcons
            name="person"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.PASSWORD:
        return (
          <MaterialIcons
            name="lock"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.ARROW_LEFT:
        return (
          <MaterialIcons
            name="arrow-back-ios-new"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.FACEBOOK:
        return (
          <EvilIcons
            name="sc-facebook"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.APPLE:
        return (
          <FontAwesome
            name="apple"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.CHATS:
        return (
          <Entypo
            name="chat"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.TASKS:
        return (
          <FontAwesome5
            name="clipboard-list"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.HOME:
        return (
          <Foundation
            name="home"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.CHECKBOX:
        return (
          <Ionicons
            name="checkbox"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.SETTINGS:
        return (
          <Ionicons
            name="settings-sharp"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.EMAIL:
        return (
          <IonicIcons
            name="mail-outline"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.PLUS:
        return (
          <Feather
            name="plus"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.SORT:
        return (
          <MaterialIcons
            name="sort"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.NOTIFICATION:
        return (
          <MaterialIcons
            name="notifications"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.CART:
        return (
          <IonicIcons
            name="cart"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.WEIGHT:
        return (
          <MaterialIcons
            name="fitness-center"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.WORK:
        return (
          <FontAwesome
            name="suitcase"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );

      case ICON_TYPES.EVENT:
        return (
          <FontAwesome5
            name="glass-cheers"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.READING:
        return (
          <MaterialCommunityIcons
            name="bookshelf"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.HEALTH:
        return (
          <FontAwesome5
            name="briefcase-medical"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.TRAVEL:
        return (
          <MaterialIcons
            name="flight"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.SPORT:
        return (
          <MaterialIcons
            name="sports-basketball"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.IMPORTANT:
        return (
          <Ionicons
            name="alert-circle"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.WADDING:
        return (
          <MaterialIcons
            name="cake"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.IDEA:
        return (
          <MaterialIcons
            name="lightbulb-outline"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.OTHER:
        return (
          <MaterialIcons
            name="more-horiz"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.CONFIRMATION:
        return (
          <MaterialIcons
            name="done"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.DATE:
        return (
          <MaterialIcons
            name="date-range"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.DOWN_ARROW:
        return (
          <MaterialIcons
            name="keyboard-arrow-down"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.PHONE:
        return (
          <MaterialIcons
            name="phone"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.SHARE:
        return (
          <MaterialIcons
            name="share"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.CAMERA:
        return (
          <MaterialIcons
            name="camera-alt"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.COPY:
        return (
          <MaterialIcons
            name="content-copy"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.CLOSE:
        return (
          <MaterialIcons
            name="close"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.EDIT:
        return (
          <MaterialIcons
            name="edit"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.WHATSAPP:
        return (
          <FontAwesome
            name="whatsapp"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.MESSAGE:
        return (
          <MaterialIcons
            name="message"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.ERROR:
        return (
          <MaterialIcons
            name="error"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.WARNING:
        return (
          <FontAwesome
            name="warning"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.INFO:
        return (
          <MaterialIcons
            name="info"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.SUCCESS:
        return (
          <MaterialIcons
            name="check"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
      case ICON_TYPES.EXIT:
        return (
          <AntDesign
            name="close"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );

      case ICON_TYPES.SEARCH:
        return (
          <Feather
            name="search"
            size={iconSize}
            color={iconColor}
            style={iconStyle}
          />
        );
    }
    return <></>;
  };

  return (
    <View style={iconContainerStyle} testID={testId}>
      {icon()}
    </View>
  );
};

export default CustomIcon;
