import {Dimensions, StyleSheet} from 'react-native';

import {COLORS} from 'constants/colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').width;

//TODO: change colors to correct ones and correct proportions

export default StyleSheet.create({
  //Header+++++

  headerOverlay: {
    backgroundColor: COLORS.secondaryDark,
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

  //Header========

  //Main++++++

  photosPreview: {
    backgroundColor: COLORS.secondaryDark,
    flex: 5,
    alignItems: 'center',
    paddingTop: 20,
  },

  successTextContainer: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 14,
    height: windowHeight / 6,
    justifyContent: 'center',
    marginBottom: 20,
    width: windowWidth * 0.8,
  },

  successText: {
    color: COLORS.primaryBlue,
    fontWeight: '600',
  },

  imageContainer: {
    borderRadius: 20,
    height: windowHeight * 0.8,
    overflow: 'hidden',
    width: windowWidth * 0.8,
  },

  //Main========

  //Footer++++++

  footerOverlay: {
    alignItems: 'flex-end',
    backgroundColor: COLORS.primaryDark,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: windowHeight / 2,
    left: 0,
    paddingBottom: 30,
    position: 'absolute',
    zIndex: 99,
    width: windowWidth,
  },
  footerOverlaySide: {
    height: '60%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  footerOverlaySideText: {
    marginTop: 25,
  },
  footerOverlayCenter: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shutter: {
    backgroundColor: COLORS.primaryBlue,
    borderRadius: windowWidth / 8,
    borderWidth: 10,
    borderColor: '#fff',
    height: windowWidth / 4,
    marginBottom: 10,
    width: windowWidth / 4,
  },

  photosPreviewFooter: {
    alignItems: 'center',
    backgroundColor: COLORS.primaryDark,
    bottom: 0,
    height: windowHeight / 2,
    justifyContent: 'space-around',
    left: 0,
    paddingTop: 20,
    paddingBottom: 30,
    position: 'absolute',
    zIndex: 99,
    width: windowWidth,
  },

  photoPreviewButtonContainer: {
    borderRadius: 40,
    overflow: 'hidden',
    width: windowWidth * 0.6,
  },

  //Footer========
});
