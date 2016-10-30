import axios from 'axios'
import {
SEARCH_REPOS,
SEARCH_REPOS_ERROR
} from './types'

const ROOT_URL = 'https://api.github.com/'

export function searchRepos (params) {
  const config = {
    headers: {
      'Accept': 'application/json'
    }
  }
  return function (dispatch) {
    axios.get(ROOT_URL + 'search/repositories?q=' + params, config)
.then(response => {
  dispatch({
    type: SEARCH_REPOS,
    payload: response.data
  })
})
.catch(response => dispatch(searchReposError(response)))
  }
}

export function searchReposError (error) {
  return {
    type: SEARCH_REPOS_ERROR,
    payload: error
  }
}
