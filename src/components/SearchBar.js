import React from 'react';
import fetchUser  from '../actions/fetchUser';
import { connect } from 'react-redux';
import '../style/SearchBar.css'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
    this._onChange = this._onChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }

  _onChange(event) {
    const value = event.target.value;
    this.setState({
      username: value
    })
  }

  _onSubmit(event) {
    event.preventDefault();
    this.props.fetchUser(this.state.username)
  }

  render() {
    return (
      <div className="form-wrapper">
        <h1>Enter github username</h1>
        <form onSubmit={this._onSubmit}>
          <input className="input" type="text" placeholder="User name" onChange={this._onChange} required />
          <input className="button" type="submit" value={this.props.loading ? "Searching..." : "Search"} disabled={this.props.loading} />
        </form>
      </div>
    )
  }
}
const mapState = state => ({
  loading: state.loading
})
const mapDispatch = dispatch => ({
  fetchUser: username => dispatch(fetchUser(username))
});

export default connect(mapState,mapDispatch)(SearchBar);