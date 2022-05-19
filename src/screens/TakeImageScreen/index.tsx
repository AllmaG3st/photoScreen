import {Alert, Image, View} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {Camera, PhotoFile} from 'react-native-vision-camera';

import AppSafeAreaView from 'components/AppSafeAreaView';
import AppText from 'components/AppText';
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

export type SavedPhotoType = {
  front: PhotoFile | null;
  back: PhotoFile | null;
};

export type CameraFlashType = 'off' | 'on' | 'auto' | undefined;

const TakeImageScreen = ({
  firstPhotoHint,
  secondPhotoHint,
  successText,
}: TakeImageScreenProps) => {
  const [photosPreview, setPhotosPreview] = useState<PhotoFile | null>(null);
  const [savedPhotos, setSavedPhotos] = useState<SavedPhotoType>({
    front: null,
    back: null,
  });
  const [cameraFlash, setCameraFlash] = useState<CameraFlashType>('off');

  const cameraRef = useRef<Camera>(null);

  const {cameraPermission, devices} = useCamera();

  const device = devices.back;

  const handleCameraFlesh = useCallback(() => {
    setCameraFlash(prevState => (prevState === 'off' ? 'on' : 'off'));
  }, []);

  //! Whats wrong here?
  console.log(cameraFlash);

  const handleContinueButton = () => {
    if (!savedPhotos.front) {
      setSavedPhotos(prevState => ({
        ...prevState,
        front: photosPreview,
      }));
    } else
      setSavedPhotos(prevState => ({
        ...prevState,
        back: photosPreview,
      }));
    setPhotosPreview(null);
  };

  const takePhoto = useCallback(async () => {
    try {
      if (cameraRef.current == null) throw new Error('Camera Ref is Null');

      console.log('Photo taking...');
      const photo = await cameraRef.current.takePhoto({
        qualityPrioritization: 'speed',
        skipMetadata: true,
        flash: cameraFlash,
      });
      setPhotosPreview(photo);
    } catch (error) {
      console.log(error);
    }
  }, []);

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

      {photosPreview && (
        <View style={styles.photosPreview}>
          <View style={styles.successTextContainer}>
            <AppText style={styles.successText}>{successText}</AppText>
          </View>
          <View style={styles.imageContainer}>
            {photosPreview && (
              <Image
                //@ts-ignore
                source={{
                  uri: 'file://' + photosPreview.path,
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
        savedPhotos={savedPhotos}
      />

      <FooterOverlay
        cameraFlash={cameraFlash}
        takePhoto={takePhoto}
        handleCameraFlesh={handleCameraFlesh}
        photosPreview={photosPreview}
        handleContinueButton={handleContinueButton}
      />
    </AppSafeAreaView>
  );
};

export default TakeImageScreen;
