import {StyleSheet, StatusBar, Platform} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});
