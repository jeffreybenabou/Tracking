import {
  CustomButtonProps,
  CustomIconProps,
  CustomTextType,
} from '../src/types/Types.tsx';
import renderer from 'react-test-renderer';

type Props = CustomTextType | CustomButtonProps | CustomIconProps;
export const checkSnapshot = (
  Component: any,
  componentName: string,
  props: Props,
) => {
  test(`Check changes in ${componentName} component`, () => {
    const snap = renderer.create(<Component {...props} />).toJSON();
    expect(snap).toMatchSnapshot();
  });
};

export const shouldRenderCorrectly = (
  Component: any,
  componentName: string,
  props: Props,
) => {
  test(`${componentName} should render correctly`, () => {
    const snap = renderer.create(<Component {...props} />).toJSON();
    expect(snap).toBeTruthy();
  });
};
