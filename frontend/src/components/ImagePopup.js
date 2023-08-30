import React from "react";

function ImagePopup({card, isOpen, onClose}) {
  return (
    <div className={`popup popup_type_picture ${ isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__container popup__container_type_picture">
            <button 
              type="button" 
              className="popup__close-btn" 
              onClick={onClose}
            />
                <img 
                  src={`${card.link}`} 
                  alt={card.name} 
                  className="popup__picture"
                />
                <h2 className="popup__name">{card.name}</h2>
        </div>
    </div>
  );
}

export default ImagePopup;