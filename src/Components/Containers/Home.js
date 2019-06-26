import React from 'react';
import Navbar from '../Navbar';
import FriendsPost from '../FriendsPost';

class Home extends React.Component {



  render () {
    return (
      <div className="home">
        <Navbar />
        <FriendsPost />
        <FriendsPost />
      </div>
    )
  }
}

export default Home;
