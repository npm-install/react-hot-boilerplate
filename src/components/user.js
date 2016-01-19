import React from 'react'
import { render } from 'react-dom'

module.exports = React.createClass({
  getInitialState(){
    return {
      users: []
    }
  },

  componentDidMount () {
    $.getJSON('http://api.randomuser.me/?results=5', (res)=>{
      this.setState({
        users: res.results
      });
    });
  },

  render: function() {
    const users = this.state.users.map((item, index) => {
      let user = item.user;

      return (
        <li key={user.username}>
          <div className="carousel-info">
            <img alt="" src={user.picture.thumbnail} className="pull-left" />
            <div className="pull-left">
              <span className="testimonials-name">{user.name.first + ' ' + user.name.last}</span>
              <span className="testimonials-post">{user.username}</span>
              <span className="testimonials-post">{user.phone}</span>
            </div>
          </div>

        </li>
      )});

    return (
          <div>
            <h2>Users</h2>
            <ul>{users}</ul>
          </div>
        );
  }

});
