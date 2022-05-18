import {TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import Icon from 'react-native-vector-icons/Ionicons';

import AppSafeAreaView from 'components/AppSafeAreaView';
import AppText from 'components/AppText';
import AppIcon from 'components/AppIcon';

import {COLORS} from 'constants/colors';
import styles from './styles';

// Permissions

const requestCameraPermission = async () => {
  await Camera.requestCameraPermission();
};

const checkCameraPermission = async () => {
  const cameraPermission = await Camera.getCameraPermissionStatus();
  if (cameraPermission === 'denied' || cameraPermission === 'restricted')
    //TODO add modal for restricted permission
    return (
      <View>
        <AppText>Permission Restricted</AppText>
      </View>
    );
};

type TakeImageScreenProps = {
  firstPhotoHint: string;
  secondPhotoHint: string;
};

const TakeImageScreen = ({
  firstPhotoHint,
  secondPhotoHint,
}: TakeImageScreenProps) => {
  const [checkIconColor, setCheckIconColor] = useState(COLORS.white);
  const [photos, setPhotos] = useState([]);
  const [cameraFlash, setCameraFlash] = useState<
    'off' | 'on' | 'auto' | undefined
  >('off');

  const cameraRef = useRef<Camera>(null);

  const devices = useCameraDevices('wide-angle-camera');
  const device = devices.back;

  useEffect(() => {
    requestCameraPermission();
    checkCameraPermission();
  }, []);

  const handleCameraFlesh = useCallback(() => {
    setCameraFlash(prevState => (prevState === 'off' ? 'on' : 'off'));
  }, []);

  const takePhoto = useCallback(async () => {
    try {
      if (cameraRef.current == null) throw new Error('Camera Ref is Null');

      console.log('Photo taking...');
      const photo = await cameraRef.current.takePhoto({
        qualityPrioritization: 'speed',
        skipMetadata: true,
        flash: cameraFlash,
      });
      console.log(photo);
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (device == null)
    return (
      <View>
        <AppText>Loading...</AppText>
      </View>
    );

  return (
    <AppSafeAreaView style={{position: 'relative'}}>
      <Camera
        ref={cameraRef}
        style={{flex: 1, zIndex: 1}}
        device={device}
        isActive={true}
        photo={true}
      />

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
            <AppText
              fontColor="#fbfbfb"
              fontSize={12}
              style={{marginRight: 20}}>
              Front
            </AppText>
            <AppIcon name="checkcircleo" size={18} iconColor={checkIconColor} />
          </View>
          <View></View>
        </View>
      </View>

      <View style={styles.footerOverlay}>
        <View style={styles.footerOverlaySide}>
          <AppIcon name="upload" size={25} iconColor={COLORS.white} />
          <AppText fontColor="#fbfbfb" fontSize={13}>
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
            size={25}
            color="#fff"
          />
          <AppText fontColor={COLORS.appWhite} fontSize={13}>
            Flash
          </AppText>
        </TouchableOpacity>
      </View>
    </AppSafeAreaView>
  );
};

export default TakeImageScreen;
