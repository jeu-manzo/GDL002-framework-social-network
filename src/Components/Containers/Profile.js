import React, {Component} from 'react';
import Navbar from '../Navbar';
import UserPost from '../UserPost';

class Profile extends Component {
  render () {
    return (
      <div className="profile">
        <Navbar/>
        <UserPost/>
      </div>
    )
  }
};

export default Profile;
