import React, { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.value = "";
  }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();  
    onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }

  return (
    <PopupWithForm 
      id="avatar" 
      title="Новый аватар" 
      isOpen={isOpen} 
      onClose={onClose} 
      onSubmit={handleSubmit}
    >
    <label className="popup__label">
      <input 
        type="url" 
        ref={inputRef}
        className="popup__input" 
        name="link" 
        id="avatar-link" 
        placeholder="Ссылка на картинку" 
        required
      />
      <span className="avatar-link-input-error popup__form-input-error"/>
    </label>
  </PopupWithForm>
)
}
export default EditAvatarPopup;