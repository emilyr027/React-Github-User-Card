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














// import React from 'react'
// import axios from 'axios';
// // import styled from 'styled-components';
// import './App.css';
// import UserCard from './UserCard';
// import Followers from './Followers';


// const followersArray = [ 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       myProfile: [],
//       followers: [],
//       error: '',
//     };
//     console.log('App: Component State Setup');
//   }

//   componentDidMount() {
//     axios.get('https://api.github.com/users/emilyr027')
//     .then(response => {
//       console.log('App: Component Mounted - user profile get request');
//       this.setState({
//         myProfile: response.data,
//       })
//     })
//     .catch(error => {
//       console.log(error, 'there is an error');
//     })

//     axios.get(`https://api.github.com/users/${followersArray}`)
//     .then(response => {
//       console.log('App: Component Mounted - user profile get request');
//       this.setState({
//         followers: response.data,
//       })
//     })
//     .catch(error => {
//       console.log(error, 'there is an error');
//     })
//   }

//   render() {
//     return (
//       <div>
//         <UserCard myProfile={this.state.user}/>
//         <Followers followers={this.state.followers}/>
//       </div>
          
//     )
//   }
// }
// export default App;
