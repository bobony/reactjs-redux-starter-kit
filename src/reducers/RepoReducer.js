import {
SEARCH_REPOS,
SEARCH_REPOS_ERROR
} from '../actions/types'

export default function (state = {}, action) {
  switch (action.type) {
    case SEARCH_REPOS:
      return {...state, data: action.payload}
    case SEARCH_REPOS_ERROR:
      return {...state, error: action.payload}
    default:
      return state
  }
}
