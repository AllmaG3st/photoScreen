import {TouchableWithoutFeedback, View} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import Icon from 'react-native-vector-icons/Ionicons';

import AppSafeAreaView from 'components/AppSafeAreaView';
import AppText from 'components/AppText';
import AppIcon from 'components/AppIcon';

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
  const [checkIconColor, setCheckIconColor] = useState('#fff');

  const cameraRef = useRef<Camera>(null);

  const devices = useCameraDevices();
  const device = devices.back;

  useEffect(() => {
    requestCameraPermission();
    checkCameraPermission();
  }, []);

  const takePhoto = useCallback(async () => {
    try {
      if (cameraRef.current == null) throw new Error('Camera Ref is Null');

      console.log('Photo taking...');
      const photo = await cameraRef.current.takePhoto({
        qualityPrioritization: 'speed',
        skipMetadata: true,
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
            <AppText fontColor="#fbfbfb" fontSize={15}>
              {firstPhotoHint}
            </AppText>
          </View>
          <View style={styles.headerOverlayTopRight}>
            <AppIcon name="close" size={30} iconColor="#fbfbfb" />
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
          <AppIcon name="upload" size={25} iconColor="#fff" />
          <AppText fontColor="#fbfbfb" fontSize={13}>
            Upload
          </AppText>
        </View>
        <View style={styles.footerOverlayCenter}>
          <TouchableWithoutFeedback onPress={takePhoto}>
            <View style={styles.shutter} />
          </TouchableWithoutFeedback>
          <AppText fontColor="#fbfbfb" fontSize={13}>
            Take a picture
          </AppText>
        </View>
        <View style={styles.footerOverlaySide}>
          <Icon name="ios-flash-off-outline" size={25} color="#fff" />
          <AppText fontColor="#fbfbfb" fontSize={13}>
            Flash
          </AppText>
        </View>
      </View>
    </AppSafeAreaView>
  );
};

export default TakeImageScreen;
