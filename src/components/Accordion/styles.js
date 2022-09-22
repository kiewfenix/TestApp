import {StyleSheet} from 'react-native';
import colors from '../../../assets/styles/colors';

export default StyleSheet.create({
  accordionContainer: {
    borderRadius: 16,
    backgroundColor: colors.lightPurple,
    marginHorizontal: 16,
    marginTop: 16,
  },
  headerContainer: {
    backgroundColor: colors.screenBG,
    height: 85,
    borderRadius: 15,
    marginTop: 0,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftSideContainer: {
    marginTop: 10,
    marginLeft: 5,
    flex: 0.2,
    alignItems: 'center',
  },
  countTextContainer: {
    color: colors.purple,
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 36,
    fontFamily: 'Poppins-Medium',
  },
  borderContainer: {
    height: 51,
    width: 1,
    marginHorizontal: 15,
    backgroundColor: colors.grey,
  },
  textContainer: {
    fontFamily: 'Poppins-Medium',
    flex: 0.6,
  },
  rightSideContainer: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 51,
  },
  imageContainer: {
    width: 24,
    height: 24,
    borderRadius: 24,
    marginLeft: -10,
  },
  imageWrapper: {
    width: 24,
    height: 24,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.screenBG,
  },
  showButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical: 8,
  },
  showImageContainer: {
    marginTop: 5,
  },
  showTextContainer: {
    fontWeight: '400',
    opacity: 0.8,
    lineHeight: 24,
  },
});
