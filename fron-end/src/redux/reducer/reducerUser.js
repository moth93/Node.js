import { GETCURRENT, LOGIN, REGISTER } from "../action-type/action-typeUser"

const initialState = {
    user:{}
}

export const reducerUser=(state = initialState, { type, payload }) => {
  switch (type) {

  case REGISTER:
    case LOGIN:
    localStorage.setItem('token',payload.token)
    return { ...state, user:payload.user }
  case GETCURRENT:
    return {...state,user:payload.user}
  default:
    return state
  }
}
