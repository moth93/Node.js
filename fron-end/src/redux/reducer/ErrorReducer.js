import { ALERTERROR, CLEARERROR } from "../action-type/action-typeUser"

const initialState = []

export const errorReducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case ALERTERROR:
    return [ ...state, payload ]
  case CLEARERROR:
    return state.filter(element=>element.id!==payload)
  default:
    return state
  }
}
