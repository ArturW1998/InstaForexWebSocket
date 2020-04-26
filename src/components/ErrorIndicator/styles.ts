import { StyleSheet } from 'react-native';
import Themes from '../../constants/themes';
import { Style } from './types';

const styles = StyleSheet.create<Style>({
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
