import { TextStyle, ViewStyle } from "react-native";
import { IDataListItem } from "../../../utils/types";

export interface IProps extends IDataListItem {
    isNegative: boolean;
}

export type IStyle = {
    textContainer: ViewStyle,
    symbol: TextStyle,
    infoText: TextStyle,
};
