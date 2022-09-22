import {StyleSheet} from 'react-native';
import colors from '../../../assets/styles/colors';

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.screenBG},
  menuItem: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.screenBG,
    paddingTop: 15,
  },
  fitContent: {flex: 1},
  label: {fontSize: 12, fontWeight: '600', marginTop: 5},
});
