import {View, ViewStyle, SafeAreaView} from 'react-native';
import React, {ReactNode} from 'react';
import styles from './styles';

type AppSafeAreaViewProps = {
  children: ReactNode;
  style?: ViewStyle;
};

const AppSafeAreaView = ({children, style}: AppSafeAreaViewProps) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default AppSafeAreaView;
