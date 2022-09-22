import {StyleSheet} from 'react-native';
import colors from '../../../assets/styles/colors';

export default StyleSheet.create({
  countContainer: {
    marginTop: 15,
    width: 75,
    height: 26,
    borderRadius: 100,
    backgroundColor: colors.lightPurple,
  },
  countText: {
    color: colors.purple,
    fontSize: 12,
    lineHeight: 18,
  },
  answerContainer: {
    width: '100%',
    shadowOpacity: 0.7,
    shadowRadius: 24,
    shadowColor: colors.shadow,
    shadowOffset: {height: 24, width: -4},
  },
});
