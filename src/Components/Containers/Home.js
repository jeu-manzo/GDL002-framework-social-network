import React from 'react';
import Navbar from '../Navbar';
import Post from '../Post';

class Home extends React.Component {
  render () {
    return (
      <div className="home">
        <Navbar />
        <Post />
        <Post />
      </div>
    )
  }
}

export default Home
