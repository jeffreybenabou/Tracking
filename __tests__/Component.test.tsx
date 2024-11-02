import React from 'react';
import CustomButton from '../src/components/CustomButton.tsx';
import {render} from '@testing-library/react-native';
import {
  CustomButtonProps,
  CustomIconProps,
  CustomTextType,
} from '../src/types/Types.tsx';
import {checkSnapshot, shouldRenderCorrectly} from './SnapShot.tsx';
import CustomIcon, {ICON_TYPES} from '../src/components/CustomIcon.tsx';
import CustomText from '../src/components/CustomText.tsx';

describe('Check custom components functionality', () => {
  describe('CustomButton', () => {
    const props: CustomButtonProps = {
      textProps: {
        text: 'Hello',
      },
    };
    checkSnapshot(CustomButton, 'CustomButton', props);
    shouldRenderCorrectly(CustomButton, 'CustomButton', props);

    describe('Props handling', () => {
      test('renders CustomText when textProps are provided', () => {
        const textProps: CustomTextType = {text: 'test'};
        const {getByText} = render(<CustomButton textProps={textProps} />);
        expect(getByText('test')).toBeTruthy();
      });

      test('renders CustomButton when iconProps are provided', () => {
        const iconProps: CustomIconProps = {
          testId: 'custom-icon',
          iconType: ICON_TYPES.INFO,
          iconSize: 20,
          iconColor: 'red',
        };
        const {getByTestId} = render(
          <CustomButton textProps={{text: ''}} iconProps={iconProps} />,
        );
        expect(getByTestId('custom-icon')).toBeTruthy();
      });
    });
  });

  describe('CustomIcon', () => {
    const props: CustomIconProps = {
      iconType: ICON_TYPES.INFO,
      iconColor: 'red',
      iconSize: 20,
    };
    checkSnapshot(CustomIcon, 'CustomIcon', props);
    shouldRenderCorrectly(CustomIcon, 'CustomIcon', props);

    describe('Props handling', () => {
      test('renders CustomIcon when iconProps are provided', () => {
        const iconProps: CustomIconProps = {
          iconType: ICON_TYPES.INFO,
          iconSize: 20,
          iconColor: 'red',
        };
        const {getByTestId} = render(
          <CustomIcon testId={'custom-icon'} {...iconProps} />,
        );
        expect(getByTestId('custom-icon')).toBeTruthy();
      });

      test('renders CustomIcon when iconProps are not provided and crash', () => {
        const {queryByTestId} = render(<CustomIcon />);
        expect(queryByTestId('custom-icon')).toBeNull();
      });
    });
  });

  describe('CustomText', () => {
    const props: CustomTextType = {
      text: 'Hello',
    };
    checkSnapshot(CustomText, 'CustomText', props);
    shouldRenderCorrectly(CustomText, 'CustomText', props);

    describe('Props handling', () => {
      test('renders CustomText when textProps are provided', () => {
        const textProps: CustomTextType = {text: 'test'};
        const {getByText} = render(<CustomText {...textProps} />);
        expect(getByText('test')).toBeTruthy();
      });

      test('renders CustomText when textProps are not provided and crash', () => {
        // @ts-ignore
        const {queryByText} = render(<CustomText />);
        expect(queryByText('test')).toBeNull();
      });
    });
  });
});
