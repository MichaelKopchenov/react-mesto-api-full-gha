import React from 'react';

function PopupWithForm({ id, isOpen, onClose, title, onSubmit, children, isLoading }) {
    return (
        <div 
            id={ id } 
            className={`popup ${ isOpen ? "popup_opened" : "" }` }
        >
            <div className="popup__container">
                <button 
                    type="button" 
                    className="popup__close-btn" 
                    onClick={ onClose }
                />
                <h3 className="popup__title">{ title }</h3>
                <form 
                    className="popup__form" 
                    name={`edit-${ id }`} 
                    onSubmit={ onSubmit }
                >
                    { children }
                    <button 
                        type="submit" 
                        className="popup__submit" 
                        disabled={ isLoading }
                    >
                        { isLoading ? "Сохранить..." : "Сохранить" }
                    </button>
                </form>
            </div>            
        </div>
    );
}

export default PopupWithForm;