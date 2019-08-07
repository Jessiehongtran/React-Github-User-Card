import React from 'react';
import './App.css';
import UserCard from './Components/UserCard'
import FollowersCard from './Components/FollowersCard'

const FollowersData = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell']

class App extends React.Component {
  constructor (){
      super();
      this.state = {
        name: 'Hong',
        user: [],
        followers: FollowersData,
        eachFollower: [],
      }


  }

  componentDidMount() {
    this.fetchUser()
    this.fetchFollowers()
  }
  
  fetchUser = () => {
    fetch(`https://api.github.com/users/jessiehongtran`)
    .then(
      response => {
        return response.json();
      }
    )
    .then(
      getUser => this.setState({user: getUser})
    )
    .catch(
      err => console.log('err', err)
    )
  }

  fetchFollowers = () => {
    console.log('followers', this.state.followers)
    this.state.followers.forEach( follower => {
      fetch(`https://api.github.com/users/${follower}`)
      .then (
        response => {
          return response.json();
        }
      )
      .then(
        getFollower => {
        // console.log('getFollowers', getFollowers)
        this.setState({eachFollower: [...this.state.eachFollower, getFollower]})
        console.log('followers in state', this.state.eachFollower)
        }
      )
      .catch(
        err => console.log('err', err)
      )
    }
    )
  }
  
  


  render(){
    // console.log('each', this.state.eachFollower)
      return (
          <div className="App">
            <h1>Welcome to GitHub UserCard App created by {this.state.name}!</h1>
            <UserCard user={this.state.user} />
            {/*map through this.state.eachFollower and send each object inside the array as props */}
            {this.state.eachFollower.map(follower => 
              {return <FollowersCard key={follower.id} data = {follower}/> }
              )}
            <FollowersCard  data={this.state.eachFollower}/>
            
          </div>
      )

  }
}

export default App;
