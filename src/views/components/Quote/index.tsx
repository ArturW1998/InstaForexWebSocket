import React, {useEffect, useState, memo, FC, ReactNode} from 'react';
import {View, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Lists from "../../../constants/lists";
import { getDataListWithValues } from '../../../utils';
import AppText from "../AppText";
import { IDataListItem } from "../../../utils/types";
import { IProps, IAnimatedStyle } from './types';
import styles from './styles';

const Quote: FC<IProps> = ({ quote }) => {
    const value = new Animated.Value(0);
    const [animatedValue, setAnimatedValue] = useState(value);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      setAnimatedValue(value);
    });
  }, [quote.change]);

  const interpolateColor = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [
      'transparent',
        quote.change > 0 ? '#008000' : '#8e2b2b',
      'transparent',
    ],
  });

  const animatedStyle: IAnimatedStyle = {
    backgroundColor: interpolateColor
  };
  const isNegative: boolean = quote.change < 0;
  const quotesList: IDataListItem[] = getDataListWithValues(Lists.quoteList, quote);

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
        {quotesList.map(({ title, value }: IDataListItem): ReactNode => {
            const isSymbol = title === 'Symbol';
            const isChange = title === 'Change';

            const baseStyles = isSymbol ? styles.symbol : styles.infoText;
            const changeStyles = isChange && { color: isNegative ? '#8e2b2b' : '#008000' };
            const textValue = isChange && !isNegative ? `+${value}` : value;

            return (
                <View key={title} style={styles.textContainer}>
                    <AppText style={[baseStyles, changeStyles]} bold={isSymbol}>{textValue}</AppText>
                </View>
            )
        })}

        <View style={styles.changeFieldContainer}>
          <Icon
              color={isNegative ? '#8e2b2b' : '#008000'}
              name={`chevron-${isNegative ? 'down' : 'up'}`}
              style={styles.icon}
          />
        </View>
    </Animated.View>
  );
};

export default memo(Quote);
