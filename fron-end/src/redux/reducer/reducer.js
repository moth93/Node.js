import { GET } from "../action-type/action-type"

const initialState =[]

 export const reducerProduct = (state = initialState, { type, payload }) => {
  switch (type) {

  case GET:
    return state=payload

  default:
    return state
  }
}

