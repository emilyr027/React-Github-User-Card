import React from 'react';
import axios from 'axios';
import UserCard from './UserCard'
import Followers from './Followers'
import './App.css';


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      user: [],
      followers: []
    }
  }

  componentDidMount() {

    axios.get('https://api.github.com/users/BrityHemming')
    .then(response => {
       console.log('App: Component Mounted - user profile get request');
      this.setState({
        user: response.data,
      })
      console.log('user data', response.data)
    })
    .catch(error => {
      console.log('error', error)
    })

    axios.get('https://api.github.com/users/BrityHemming/followers')
    .then(response => {
        console.log('App: Component Mounted - user profile get request');
        this.setState({
            followers: response.data
        })
    })
    .catch(error => {
        console.log('error', error)
    })

  }


  render(){
  return (
    <div>
      <UserCard user={this.state.user}/>
      <Followers followers={this.state.followers}/>

    </div>
    );
  }
}

export default App;