import {Dimensions, StyleSheet} from 'react-native';

import {COLORS} from 'constants/colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').width;

//TODO: change colors to correct ones and correct proportions

export default StyleSheet.create({
  headerOverlay: {
    backgroundColor: COLORS.primaryDark,
    justifyContent: 'space-around',
    height: windowHeight / 3,
    left: 0,
    paddingVertical: 10,
    paddingHorizontal: windowWidth / 10,
    position: 'absolute',
    top: 0,
    zIndex: 99,
    width: windowWidth,
  },
  headerOverlayTop: {
    flexDirection: 'row',
  },
  headerOverlayTopLeft: {
    flex: 2,
  },
  headerOverlayTopRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  headerOverlayBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerOverlayBottomLeft: {
    flexDirection: 'row',
  },
  footerOverlay: {
    alignItems: 'flex-end',
    backgroundColor: COLORS.primaryDark,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: windowHeight / 3,
    left: 0,
    paddingBottom: 15,
    position: 'absolute',
    zIndex: 99,
    width: windowWidth,
  },
  footerOverlaySide: {
    height: '60%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerOverlayCenter: {
    justifyContent: 'space-between',
  },
  shutter: {
    backgroundColor: COLORS.primaryBlue,
    borderRadius: windowWidth / 10,
    borderWidth: 10,
    borderColor: '#fff',
    height: windowWidth / 5,
    marginBottom: 10,
    width: windowWidth / 5,
  },
});
