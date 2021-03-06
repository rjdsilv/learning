import _ from 'lodash'
import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from '../utils/constants'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      console.log(state)
      console.log(_.mapKeys(action.payload, (stream) => stream.id))
      console.log({ ...state, ..._.mapKeys(action.payload, (stream) => stream.id) })
      return { ...state, ..._.mapKeys(action.payload, (stream) => stream.id) }

    case FETCH_STREAM:
    case CREATE_STREAM:
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload }

    case DELETE_STREAM:
      return _.omit(state, action.payload)

    default:
      return state
  }
}
