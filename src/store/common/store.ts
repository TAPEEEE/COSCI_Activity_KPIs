import { Reducer } from 'react';
import { CommonState, CommonAction, CommonActionType } from './action';

const initialState: CommonState = {
  handleNavigateBack: undefined,
  // isLeftMenuOpen: isLargerThanMobile ? true : false,
};

export const CommonReducer: Reducer<CommonState, CommonAction> = (state = initialState, action) => {
  switch (action.type) {
    case CommonActionType.UpdateHandleNavigateBack:
      return { ...state, handleNavigateBack: action.payload.handleNavigateBack };
    case CommonActionType.UpdateLeftMenuStatus:
      return { ...state, isLeftMenuOpen: action.payload.isLeftMenuOpen };
    default:
      return state;
  }
};
