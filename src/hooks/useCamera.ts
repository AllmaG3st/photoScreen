import {useState, useCallback, useEffect} from 'react';
import {
  Camera,
  CameraPermissionRequestResult,
  useCameraDevices,
} from 'react-native-vision-camera';

type CameraDevicesType =
  | 'dual-camera'
  | 'dual-wide-camera'
  | 'telephoto-camera'
  | 'triple-camera'
  | 'ultra-wide-angle-camera'
  | 'wide-angle-camera';

export const useCamera = (deviceCamera?: CameraDevicesType) => {
  const [cameraPermission, setCameraPermission] =
    useState<CameraPermissionRequestResult>('denied');

  const devices = useCameraDevices();

  const requestCameraPermission = useCallback(async () => {
    setCameraPermission(await Camera.requestCameraPermission());
  }, []);

  useEffect(() => {
    requestCameraPermission();
  }, []);

  return {cameraPermission, devices};
};
