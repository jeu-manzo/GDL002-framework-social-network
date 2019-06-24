import React, {Component} from 'react';

class CreatePost extends Component {


  render () {
    return (
      <section className="create-post">
        Foto
        <main>
          <textarea rows="1" cols="40" placeholder="Aquí va a ir la publicación del Usuario..."></textarea>
          <button>Publicar</button>
        </main>
      </section>
    )
  }
};

export default CreatePost;
