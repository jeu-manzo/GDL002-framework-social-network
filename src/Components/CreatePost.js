import React, {Component} from 'react';
import firebase from "../services/firebase"

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textarea: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      textarea: e.target.value
    })
  }

  sendPost = (e) => {
    e.preventDefault();
    firebase.sendPost(this.state.textarea);
    this.setState({
      textarea: '',
    })
  }

  render () {
    return (
      <section className="create-post">
        Foto
        <main>
          <textarea rows="1" cols="40" placeholder="Aquí va a ir la publicación del Usuario..." value={this.state.textarea} onChange={this.handleChange} ></textarea>
          <button onClick={this.sendPost}>Publicar</button>
        </main>
      </section>
    )
  }
};

export default CreatePost;
