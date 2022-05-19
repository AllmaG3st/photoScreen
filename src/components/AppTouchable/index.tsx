import {
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacityProps,
} from 'react-native';
import React, {ReactNode} from 'react';

type Props = {
  children: ReactNode;
  onPress: () => void;
  props?: TouchableOpacityProps | TouchableNativeFeedback;
};

const AppTouchable: React.FC<Props> = ({
  children,
  onPress = () => {},
  ...props
}) => {
  let Touchable: any = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    Touchable = TouchableNativeFeedback;
  }

  return (
    <Touchable onPress={onPress} {...props}>
      {children}
    </Touchable>
  );
};

export default AppTouchable;
