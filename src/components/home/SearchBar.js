import React, {Component} from 'react'
class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = { searchString: '' }
    this.handleSearchQuery = this.handleSearchQuery.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSearchQuery (e) {
    this.setState({
      searchString: e.target.value
    })
  }
  handleSubmit (event) {
    this.props.onSearchQuery(this.state.searchString)
  }
  render () {
    return (
      <div className='form-inline'>
        <div className='form-group'>
          <input type='text' className='form-control' defaultValue={this.state.searchString} onChange={this.handleSearchQuery} placeholder='Search Github' />
        </div>
        <button style={{marginLeft: 20}} type='submit' onClick={this.handleSubmit} className='btn btn-primary'>Submit</button>
        <span id='helpBlock' className='help-block'>Example: web frameworks, frontend frameworks</span>
      </div>
  )
  }
}

export default SearchBar
