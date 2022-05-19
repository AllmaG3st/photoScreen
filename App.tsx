import React from 'react';
import {View} from 'react-native';
import TakeImageScreen from './src/screens/TakeImageScreen';

const App = () => {
  return (
    <TakeImageScreen
      firstPhotoHint={'Frame the front of the document'}
      secondPhotoHint={'Frame the back of the document'}
      successText={'Photo acquired with success'}
    />
  );
};

export default App;
