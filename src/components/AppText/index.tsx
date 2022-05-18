import {Text, TextStyle, TextProps} from 'react-native';
import React, {ReactNode} from 'react';

import {COLORS} from 'constants/colors';
import styles from './styles';

type AppTextProps = {
  children: ReactNode;
  fontColor?: string;
  fontSize?: number;
  style?: TextStyle;
  props?: TextProps;
};

const AppText = ({
  children,
  fontColor = COLORS.black,
  fontSize = 16,
  style,
  props,
}: AppTextProps) => {
  return (
    <Text style={[styles(fontColor, fontSize).text, style]} {...props}>
      {children}
    </Text>
  );
};

export default AppText;
