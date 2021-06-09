import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    text: '',
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    resetUsers: PropTypes.func.isRequired,
    showReset: PropTypes.bool.isRequired,
    showAlert: PropTypes.func.isRequired,
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.showAlert(
        ' Enter a Name to Search more than 72M users',
        'light'
      );
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { showReset, resetUsers } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users in GitHub...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-primary btn-block'
          />
        </form>
        {showReset && (
          <button className='btn btn-second btn-block' onClick={resetUsers}>
            Reset
          </button>
        )}
      </div>
    );
  }
}

export default Search;
