import React, {Component} from 'react';
import Navbar from '../Navbar';
import UserPost from '../UserPost';
import CreatePost from '../CreatePost';

class Profile extends Component {


  render () {
    return (
      <div className="profile">
        <Navbar/>
        <CreatePost/>
        <UserPost/>

      </div>
    )
  }
};

export default Profile;
