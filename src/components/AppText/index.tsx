import {Text, TextStyle, TextProps} from 'react-native';
import React, {ReactNode} from 'react';

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
  fontColor = '#000',
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
