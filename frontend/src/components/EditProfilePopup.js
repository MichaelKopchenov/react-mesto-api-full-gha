import React, { useState, useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup({isOpen, onClose, onUpdateUser, isLoading}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      id="profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      isLoading={isLoading}
      onSubmit={handleSubmit}
    >
      <label className='popup__label'>
        <input 
          name="title"
          value={name || ""} 
          type="text" 
          className="popup__input" 
          placeholder="Имя" 
          required 
          minLength="2" 
          maxLength="40" 
          id="title-name"
          onChange={(evt) => setName(evt.target.value)}
        />
        <span className="title-name-input-error popup__form-input-error"/>{/*В данной ПР элемент без контента, думаю в следующих спринтах добавится текст ошибки. Решил описать элемент как самозакрывающийся.*/}
      </label>
      <label className='popup__label'>
        <input 
          name="job" 
          value={description || ""}
          type="text" 
          className="popup__input" 
          placeholder="О себе" 
          required 
          minLength="2" 
          maxLength="200" 
          id="job"
          onChange={(evt) => setDescription(evt.target.value)}
        />
        <span className="job-input-error popup__form-input-error"/>
      </label>
    </PopupWithForm>
  );
  };
  export default EditProfilePopup;