import { StyleSheet, Platform } from 'react-native';
import Themes from '../../../constants/themes';
import OS from '../../../services/detectDeviceOS';
import { IStyle } from './types';

const styles = StyleSheet.create<IStyle>({
  navbar: {
    alignItems: 'center',
    height: 50,
    justifyContent: 'flex-end',
    paddingBottom: 10,
    ...Platform.select({
      ios: {
        borderBottomColor: Themes.primaryColor,
        borderBottomWidth: 1,
      },
      default: {
        backgroundColor: Themes.primaryColor,
      },
    }),
  },
  text: {
    color: OS.isIOS ? Themes.primaryColor : Themes.lightColor,
    fontSize: 20,
  },
});

export default styles;
