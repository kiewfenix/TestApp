import {StyleSheet} from 'react-native';
import colors from '../../../assets/styles/colors';

export default StyleSheet.create({
  answerContainer: {
    flexDirection: 'row',
    paddingVertical: 17,
    paddingHorizontal: 17,
  },
  avatarContainer: {
    flex: 0.2,
  },
  answerTextContainer: {
    flex: 0.6,
  },
  answerTextWrapper: {
    fontWeight: '400',
  },
  imageContainer: {
    width: 38,
    height: 38,
    borderRadius: 38,
  },
  imageWrapper: {
    width: 38,
    height: 38,
    borderRadius: 38,
    borderWidth: 2,
    borderColor: colors.screenBG,
  },
  answerBorderContainer: {
    height: 0.5,
    backgroundColor: colors.border,
    marginHorizontal: 16,
    opacity: 0.5,
  },
});
