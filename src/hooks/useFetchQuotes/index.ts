import { useEffect, useReducer, useCallback } from 'react';
import io from 'socket.io-client';
import Paths from '../../constants/paths';
import Lists from '../../constants/lists';
import errorTexts from '../../constants/errorTexts';
import dataFetchReducer, { initState } from '../../reducers/dataFetchReducer';
import { fetchFailure, fetchInit, fetchSuccess } from '../../actions';
import { IData, IFetchQuotes, IFetchData } from '../../types';
import { IReducer } from './types';

const useFetchQuotes = (): IFetchQuotes => {
  const [state, dispatch] = useReducer<IReducer>(dataFetchReducer, initState);

  const fetchData = useCallback((): IFetchData => {
    const client = io(Paths.basePath);
    client.io.reconnectionAttempts(3);

    dispatch(fetchInit());

    try {
      client.on('connect', () => {
        client.emit('subscribe', Lists.quoteSymbols);
      });

      client.on('disconnect', () => {
        client.emit('unsubscribe', Lists.quoteSymbols);
      });

      client.on('quotes', ({ msg }: IData) => {
        dispatch(fetchSuccess(msg));
      });

      client.on('reconnect_failed', () => {
        const errorMessage = errorTexts.unableToConnect(Paths.basePath);
        dispatch(fetchFailure(errorMessage));
      });
    } catch ({ message }) {
      dispatch(fetchFailure(message));
    }

    return () => {
      client.close();
    };
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [state, fetchData];
};

export default useFetchQuotes;
