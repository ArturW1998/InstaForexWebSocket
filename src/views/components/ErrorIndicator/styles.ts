import { StyleSheet } from 'react-native';
import Themes from '../../../constants/themes';
import { IStyle } from './types';

const styles = StyleSheet.create<IStyle>({
  error: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: Themes.dangerColor,
    fontSize: 20,
    marginBottom: 20,
  },
});

export default styles;
