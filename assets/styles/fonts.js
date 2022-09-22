import {StyleSheet} from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  headerText: {
    color: colors.fontDark,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    fontFamily: 'Poppins-Medium',
  },
  mainText: {
    color: colors.fontDark,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
    fontFamily: 'Poppins-Regular',
  },
  emptyScreenFont: {
    color: colors.fontDark,
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 24,
    fontFamily: 'Poppins-Light',
  },
});
