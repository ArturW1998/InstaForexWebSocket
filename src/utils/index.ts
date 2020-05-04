import { IQuote, IQuoteMap } from "../types";
import { IQuotesListItem } from '../constants/lists/types';
import { IDataListItem } from './types';
import Lists from "../constants/lists";

export const sortBySymbol = (data: IQuoteMap): IQuote[] => {
    const dataValues: IQuote[] = Object.values(data);

    return dataValues.sort((a: IQuote, b: IQuote): number => a.symbol.localeCompare(b.symbol));
};

export const getDataListWithValues = (list: IQuotesListItem[] = Lists.quoteList, data: IQuote): IDataListItem[] => {
    if (!data) return list;

    const { symbol, ask, bid, change } = data;

    return list.map(item => {
        switch (item.title) {
            case 'Symbol':
                return { ...item, value: symbol };
            case 'Ask':
                return { ...item, value: ask };
            case 'Bid':
                return { ...item, value: bid };
            case 'Change':
                return { ...item, value: change };
            default:
                return item;
        }
    });
};
