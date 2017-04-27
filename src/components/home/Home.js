import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import SearchBar from './SearchBar'
require('bootstrap')
require('../../../node_modules/bootstrap/dist/css/bootstrap.min.css')

const StringTruncate = (string) => {
  if (string.length > 180) {
    const newString = string.slice(0, 180)
    return newString + '...'
  } else {
    return string
  }
}
class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.handleSearch = this.handleSearch.bind(this)
  }
  handleSearch (e) {
    const query = e.toLowerCase()
    this.props.searchRepos(query)
  }
  render () {
    const {repos} = this.props
    return (
      <div>
        <h3>A Simple reactjs and redux example application to search github repos using github api</h3>
        <SearchBar onSearchQuery={this.handleSearch} />
        {repos.length !== 0 ? repos.items.map(function (repo) {
          const repoDescription = repo.description ? StringTruncate(repo.description) : repo.description
          return (

            <div className='col-md-4' key={repo.id}>
              <div style={{height: 250, background: '#eee', padding: 20, marginTop: 10, marginBottom: 10, boxShadow: '3px 4px 4px #aaa', borderRadius: 6}}>
                <a href={repo.svn_url} target='_blank'><h3 style={{textTransform: 'uppercase'}}>{repo.name}</h3></a>
                <p>{repoDescription}</p>
                <p><span><button className='btn btn-default'>Forks - <span className='badge'>{repo.forks}</span></button></span> <span><button className='btn btn-primary'>Watchers - <span className='badge'>{repo.watchers}</span></button></span></p>
              </div>
            </div>
          )
        }) : <div><h3>No Items to display, enter your query in Search Field</h3></div>}
      </div>
    )
  }
}
function mapStateToProps (state) {
  return { repos: state.repos.data || []
  }
}
export default connect(mapStateToProps, actions)(Home)
