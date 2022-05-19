import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {PhotoFile} from 'react-native-vision-camera';

import AppIcon from 'components/AppIcon';
import AppText from 'components/AppText';
import Icon from 'react-native-vector-icons/Ionicons';

import {COLORS} from 'constants/colors';
import styles from './styles';
import {CameraFlashType} from '.';
import AppButton from 'components/AppButton';

type FooterOverlayProps = {
  cameraFlash: CameraFlashType;
  takePhoto: () => void;
  handleCameraFlesh: () => void;
  photosPreview: PhotoFile | null;
};

const FooterOverlay = ({
  cameraFlash,
  takePhoto,
  handleCameraFlesh,
  photosPreview,
}: FooterOverlayProps) => {
  console.log(photosPreview);

  return (
    <>
      {photosPreview ? (
        <View style={styles.photosPreviewFooter}>
          <View style={styles.photoPreviewButtonContainer}>
            <AppButton
              title="Continue"
              bgColor={COLORS.primaryBlue}
              paddingVertical={20}
              onPress={() => console.log('pressed')}
            />
          </View>
          <AppText>Hello</AppText>
        </View>
      ) : (
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
      )}
    </>
  );
};

export default FooterOverlay;
