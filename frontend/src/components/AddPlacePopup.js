import React, { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose, isLoading, onAddPlace}) {
  const [card, setCard] = useState({
    name: "",
    link: "",
  });

  useEffect(() => {
    setCard({ name: "", link: "" });
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    return onAddPlace(card);
  };

  return (
    <PopupWithForm
      id="cards" 
      title="Новое место" 
      isOpen={isOpen} 
      onClose={onClose} 
      isLoading={isLoading}
      onSubmit={handleSubmit}
  >
    <label className="popup__label">
      <input 
        type="text" 
        value={card.name}
        className="popup__input" 
        name="name" 
        id="card-name" 
        placeholder="Название" 
        minLength="2" 
        maxLength="30" 
        required
        onChange={(e) => {
            setCard((prevState) => ({
              ...prevState,
              name: e.target.value,
            }));
          }}
      />
      <span className="card-name-input-error popup__form-input-error"/>
    </label>
    <label className="popup__label">
      <input 
        type="url" 
        value={card.link}
        className="popup__input" 
        name="link" 
        id="card-link" 
        placeholder="Ссылка на картинку" 
        required
        onChange={(e) => {
            setCard((prevState) => ({
              ...prevState,
              link: e.target.value,
            }));
          }}
      />
      <span className="card-link-input-error popup__form-input-error"/>
    </label>
    </PopupWithForm>
  )
}
export default AddPlacePopup;