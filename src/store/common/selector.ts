import { createSelector } from 'reselect';
import { CommonState } from './action';
import { RootState } from '../index';

const getState = (state: RootState): CommonState => state.common;

export const getCommonState = createSelector([getState], (state: CommonState) => state);
export const getHandleNavigateBack = createSelector([getState], (state: CommonState) => state.handleNavigateBack);
export const getLeftMenuState = createSelector([getState], (state: CommonState) => state.isLeftMenuOpen);
