import {
  Alert,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {Camera, PhotoFile} from 'react-native-vision-camera';
import Icon from 'react-native-vector-icons/Ionicons';

import AppSafeAreaView from 'components/AppSafeAreaView';
import AppText from 'components/AppText';
import AppIcon from 'components/AppIcon';
import {useCamera} from 'hooks/useCamera';

import {COLORS} from 'constants/colors';
import styles from './styles';
import HeaderOverlay from './HeaderOverlay';
import FooterOverlay from './FooterOverlay';

type TakeImageScreenProps = {
  firstPhotoHint: string;
  secondPhotoHint: string;
  successText: string;
};

type PhotosStateType = {
  front: PhotoFile | null;
  back: PhotoFile | null;
};

const TakeImageScreen = ({
  firstPhotoHint,
  secondPhotoHint,
  successText,
}: TakeImageScreenProps) => {
  const [checkIconColor, setCheckIconColor] = useState(COLORS.white);
  const [photosPreview, setPhotosPreview] = useState<PhotosStateType>({
    front: null,
    back: null,
  });
  const [cameraFlash, setCameraFlash] = useState<
    'off' | 'on' | 'auto' | undefined
  >('off');

  const cameraRef = useRef<Camera>(null);

  const {cameraPermission, devices} = useCamera();

  const device = devices.back;

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
      setPhotosPreview(prevState => {
        return {
          ...prevState,
          front: photo,
        };
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(photosPreview.front);

  if (device == null)
    return <View style={{flex: 1, backgroundColor: COLORS.black}} />;

  return (
    <AppSafeAreaView style={{position: 'relative'}}>
      {cameraPermission === 'authorized' ? (
        <Camera
          ref={cameraRef}
          style={{flex: 1, zIndex: 1}}
          device={device}
          isActive={true}
          photo={true}
        />
      ) : (
        Alert.alert('Application needs access to camera')
      )}

      {photosPreview.front && (
        <View style={styles.photosPreview}>
          <View style={styles.successTextContainer}>
            <AppText style={styles.successText}>{successText}</AppText>
          </View>
          <View style={styles.imageContainer}>
            {photosPreview.front && (
              <Image
                //@ts-ignore
                source={{
                  uri: 'file://' + photosPreview?.front?.path,
                  height: '100%',
                  width: '100%',
                }}
              />
            )}
          </View>
        </View>
      )}

      <HeaderOverlay
        firstPhotoHint={firstPhotoHint}
        checkIconColor={checkIconColor}
      />

      <FooterOverlay
        cameraFlash={cameraFlash}
        takePhoto={takePhoto}
        handleCameraFlesh={handleCameraFlesh}
      />
    </AppSafeAreaView>
  );
};

export default TakeImageScreen;
