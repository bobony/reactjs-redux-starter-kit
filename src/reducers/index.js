import { combineReducers } from 'redux'
import repos from './RepoReducer'
const rootReducer = combineReducers({
  repos
})
export default rootReducer
