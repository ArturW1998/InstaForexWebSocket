import actionTypes from "../constants/actionTypes";
import { IQuota } from "../types";

export type IFetchInit = {
    type: actionTypes.FETCH_INIT,
}

export type IFetchFailure = {
    type: actionTypes.FETCH_FAILURE,
}

export type IFetchSuccess = {
    type: actionTypes.FETCH_SUCCESS,
    data: IQuota,
}
