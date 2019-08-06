import React from 'react';
import './App.css';

class App extends React.Component {
  constructor (){
      super();
      this.state = {
        name: 'Hong',
        users: []
      }


  }

  fetchUsers = () => {
    fetch(`https://api.github.com/users/jessiehongtran`)
    .then(
      response => {
        return response.json();
      }
    )
    .then(
      getUser => console.log('getUser', getUser)
    )
    .catch(
      err => console.log('err', err)
    )
  }


  render(){
      this.fetchUsers();
      return (
          <div>
            <h1>Welcome to GitHub UserCard App created by {this.state.name}!</h1>
            {this.state.users.map( user => {
              return <div>'user'</div>
            }
            )}
            
          </div>
      )
  }
}

export default App;
