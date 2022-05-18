import {StyleSheet} from 'react-native';

export default (fontColor: string, fontSize: number) =>
  StyleSheet.create({
    text: {
      color: fontColor,
      //TODO:  Add font family
      // fontFamily:
      fontSize,
    },
  });
