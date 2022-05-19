import {View, Text} from 'react-native';
import React from 'react';

import AppText from 'components/AppText';
import AppIcon from 'components/AppIcon';

import {COLORS} from 'constants/colors';
import styles from './styles';

type HeaderOverlayProps = {
  firstPhotoHint: string;
  checkIconColor: string;
};

const HeaderOverlay = ({
  firstPhotoHint = '',
  checkIconColor = '',
}: HeaderOverlayProps) => {
  return (
    <View style={styles.headerOverlay}>
      <View style={styles.headerOverlayTop}>
        <View style={styles.headerOverlayTopLeft}>
          <AppText fontColor={COLORS.appWhite} fontSize={15}>
            {firstPhotoHint}
          </AppText>
        </View>
        <View style={styles.headerOverlayTopRight}>
          <AppIcon name="close" size={30} iconColor={COLORS.appWhite} />
        </View>
      </View>

      <View style={styles.headerOverlayBottom}>
        <View style={styles.headerOverlayBottomLeft}>
          <AppText fontColor="#fbfbfb" fontSize={12} style={{marginRight: 20}}>
            Front
          </AppText>
          <AppIcon name="checkcircleo" size={18} iconColor={checkIconColor} />
        </View>
        <View></View>
      </View>
    </View>
  );
};

export default HeaderOverlay;
