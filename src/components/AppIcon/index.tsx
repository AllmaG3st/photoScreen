import {View, Text} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/AntDesign';

type AppIconProps = {
  name: string;
  size?: number;
  iconColor?: string;
};

const AppIcon = ({name, size = 20, iconColor = 'fff'}: AppIconProps) => {
  return (
    <View>
      <Icon name={name} size={size} color={iconColor} />
    </View>
  );
};

export default AppIcon;
