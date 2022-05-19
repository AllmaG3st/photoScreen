import {View, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import React from 'react';
import {PhotoFile} from 'react-native-vision-camera';
import Icon from 'react-native-vector-icons/Ionicons';

import AppIcon from 'components/AppIcon';
import AppText from 'components/AppText';
import AppButton from 'components/AppButton';
import AppTouchable from 'components/AppTouchable';

import {CameraFlashType} from '.';
import {COLORS} from 'constants/colors';
import styles from './styles';

type FooterOverlayProps = {
  cameraFlash: CameraFlashType;
  takePhoto: () => void;
  handleCameraFlesh: () => void;
  handleContinueButton: () => void;
  handleTakeAnotherPicture: () => void;
  photosPreview: PhotoFile | null;
};

const FooterOverlay = ({
  cameraFlash,
  takePhoto,
  handleCameraFlesh,
  handleContinueButton,
  handleTakeAnotherPicture,
  photosPreview,
}: FooterOverlayProps) => {
  return (
    <>
      {photosPreview ? (
        <View style={styles.photosPreviewFooter}>
          <View style={styles.photoPreviewButtonContainer}>
            <AppButton
              title="Continue"
              bgColor={COLORS.primaryBlue}
              paddingVertical={20}
              onPress={handleContinueButton}
            />
          </View>
          <AppTouchable onPress={handleTakeAnotherPicture}>
            <View>
              <AppText style={styles.photoPreviewText}>
                Take another picture
              </AppText>
            </View>
          </AppTouchable>
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
