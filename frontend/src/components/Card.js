import React, { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((item) => item._id === currentUser._id);
  const cardLikeButtonClassName = ( 
    `element__like-btn ${isLiked && 'element__like-btn_active'}` 
  );

  function handleLikeClick() {
    return onCardLike(card);
  };
  function handleDeleteClick() {
    return onCardDelete(card);
  };

  function handleClick() {
      onCardClick(card)
    }

  return (
    <div className="element">
      {isOwn && 
        <button 
          type="button" 
          className="element__delete-btn"
          onClick={handleDeleteClick}
        ></button>
      }
      <img 
        src={card.link} 
        alt={card.name} 
        className="element__pic" 
        onClick={handleClick}
      />
      <div className="element__caption">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-box">
          <button 
            type="button" 
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          ></button>
          <p className="element__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;