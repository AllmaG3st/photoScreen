import {TextStyle, View, ViewStyle} from 'react-native';
import React from 'react';

import AppTouchable from '../AppTouchable';
import AppText from '../AppText';

import {COLORS} from 'constants/colors';
import styles from './styles';

type Props = {
  onPress: () => void;
  buttonStyles?: ViewStyle;
  title: string;
  paddingVertical?: number;
  bgColor?: string;
};

const AppButton: React.FC<Props> = ({
  onPress = () => {},
  title = '',
  buttonStyles,
  paddingVertical = 15,
  bgColor = COLORS.white,
}) => {
  return (
    <AppTouchable onPress={onPress}>
      <View
        style={[
          buttonStyles,
          {backgroundColor: bgColor, paddingVertical: paddingVertical},
        ]}>
        <AppText style={styles.buttonText}>{title}</AppText>
      </View>
    </AppTouchable>
  );
};

export default AppButton;
