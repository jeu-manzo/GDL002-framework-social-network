import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

class UserPost extends Component {


  render () {
    return (
      <section className="post">
        <header>
          <span>
            Foto
            Usuario
          </span>
          <div className="more">
            <span className="more-options">
              <span>Editar</span>
              <span>Eliminar</span>
            </span>
            <FontAwesomeIcon icon={faEllipsisV} className="more-icon"/>
          </div>
        </header>
        <main>
          <p>Aquí va a ir la publicación del Usuario</p>
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

export default UserPost;
