import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';

class Post extends Component {


  render () {
    return (
      <section className="post">
        <header>
          Foto
          Usuario
        </header>
        <main>
          Comentario
        </main>
        <footer>
          <div className="event-user">
            <span>
              <FontAwesomeIcon icon={faHeart} /> X
            </span>
            <span>
              Tantos Comentarios
            </span>
          </div>
          <div className="create-event">
            <span>
              <FontAwesomeIcon icon={faHeart} /> Me gusta
            </span>
            <span>
              <FontAwesomeIcon icon={faComment} /> Comentar
            </span>
          </div>
        </footer>
      </section>
    )
  }
};

export default Post;
