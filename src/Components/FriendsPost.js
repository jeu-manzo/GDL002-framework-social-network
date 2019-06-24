import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';

class FriendsPost extends Component {


  render () {
    return (
      <section className="post">
        <header>
          Foto
          Usuario
        </header>
        <main>
          <p>Aquí van a ir las publicaciones de los amigos</p>
        </main>
        <footer>
          <div className="event-user">
            <span className="icon-post">
              <FontAwesomeIcon icon={faHeart} color="red"/> 0
            </span>
            <span>
              0 Comentarios
            </span>
          </div>
          <div className="create-event">
            <span className="icon-event">
              <FontAwesomeIcon icon={faHeart} /> Me gusta
            </span>
            <span className="icon-event">
              <FontAwesomeIcon icon={faComment} /> Comentar
            </span>
          </div>
        </footer>
      </section>
    )
  }
};

export default FriendsPost;
