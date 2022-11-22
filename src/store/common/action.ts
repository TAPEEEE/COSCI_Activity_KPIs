export interface CommonState {
  handleNavigateBack?: () => void;
  isLeftMenuOpen?: boolean;
}

export enum CommonActionType {
  UpdateHandleNavigateBack = 'COMMON/UPDATE_HANDLE_NAVIGATE_BACK',
  UpdateLeftMenuStatus = 'UPDATE_LEFT_MANU_STATUS',
}

export interface CommonUpdateHandleNavigateBackAction {
  type: CommonActionType.UpdateHandleNavigateBack;
  payload: { handleNavigateBack?: () => void };
}
export interface CommonUpdateLeftMenuStatusAction {
  type: CommonActionType.UpdateLeftMenuStatus;
  payload: { isLeftMenuOpen: boolean };
}
export type CommonAction = CommonUpdateHandleNavigateBackAction | CommonUpdateLeftMenuStatusAction;

export const updateHandleNavigateBack = (handleNavigateBack?: () => void): CommonUpdateHandleNavigateBackAction => {
  return { type: CommonActionType.UpdateHandleNavigateBack, payload: { handleNavigateBack } };
};
export const updateLeftMenuStatus = (status: boolean): CommonUpdateLeftMenuStatusAction => {
  return { type: CommonActionType.UpdateLeftMenuStatus, payload: { isLeftMenuOpen: status } };
};
