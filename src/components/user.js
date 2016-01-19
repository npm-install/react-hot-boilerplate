import React from 'react'
import { render } from 'react-dom'

// const { arrayOf, string, number, shape } = React.PropTypes
//
// const user = shape({
//   first: string.isRequired,
//   last: string.isRequired,
//   avatar: string.isRequired
// })

module.exports = React.createClass({
  getInitialState(){
    return {
      users: []
    }
  },

  componentDidMount () {
    $.getJSON('http://api.randomuser.me/?results=10', (res)=>{
      this.setState({
        users: res.results
      });
    });
  },

  render: function() {
    const users = this.state.users.map((item, index) => {
      let user = item.user;
      console.log(user.picture.thumbnail);

      return (
        <li key={user.username}>
          {user.username} <img src={user.picture.thumbnail}/>
        </li>
      )});

    return (
          <ul>{users}</ul>
        );
  }

});
