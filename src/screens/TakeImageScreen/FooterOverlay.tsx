import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';
import AppIcon from 'components/AppIcon';
import AppText from 'components/AppText';
import {COLORS} from 'constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';

type FooterOverlayProps = {
  cameraFlash: 'off' | 'on' | 'auto' | undefined;
  takePhoto: () => void;
  handleCameraFlesh: () => void;
};

const FooterOverlay = ({
  cameraFlash,
  takePhoto,
  handleCameraFlesh,
}: FooterOverlayProps) => {
  return (
    <View style={styles.footerOverlay}>
      <View style={styles.footerOverlaySide}>
        <AppIcon name="upload" size={30} iconColor={COLORS.white} />
        <AppText
          fontColor="#fbfbfb"
          fontSize={13}
          style={styles.footerOverlaySideText}>
          Upload
        </AppText>
      </View>
      <View style={styles.footerOverlayCenter}>
        <TouchableWithoutFeedback onPress={takePhoto}>
          <View style={styles.shutter} />
        </TouchableWithoutFeedback>
        <AppText fontColor={COLORS.appWhite} fontSize={13}>
          Take a picture
        </AppText>
      </View>
      <TouchableOpacity
        style={styles.footerOverlaySide}
        onPress={handleCameraFlesh}>
        <Icon
          name={
            cameraFlash === 'off'
              ? 'ios-flash-off-outline'
              : 'ios-flash-outline'
          }
          size={30}
          color="#fff"
        />
        <AppText
          fontColor={COLORS.appWhite}
          fontSize={13}
          style={styles.footerOverlaySideText}>
          Flash
        </AppText>
      </TouchableOpacity>
    </View>
  );
};

export default FooterOverlay;
