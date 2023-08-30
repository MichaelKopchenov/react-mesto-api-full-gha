import React, { useContext } from "react";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({cards, onEditAvatar, onEditProfile, onAddPlace, onCardClick, onCardLike, onCardDelete}) {
    const currentUser = useContext(CurrentUserContext);

    return (
        <main>
            <section className="profile">
                <button 
                    type="button" 
                    className="profile__avatar-change" 
                    onClick={onEditAvatar}
                >
                    <img 
                        src={currentUser.avatar} 
                        alt="Аватарка" 
                        className="profile__avatar"
                    /></button>
                <div className="profile__info">
                    <h1 className="profile__info-title" id="infoname">{currentUser.name}</h1>
                    <button 
                        type="button" 
                        className="profile__edit-profile" 
                        onClick={onEditProfile}
                    ></button>
                    <p className="profile__info-subtitle" id="infojob">{currentUser.about}</p>
                </div>
                <button 
                    type="button" 
                    className="profile__edit-pic" 
                    onClick={onAddPlace}
                ></button>
            </section>
            <section className="elements" aria-label="Карточки">
                {cards.map((item) => {
                    return (<Card 
                                card={item} 
                                key={item._id} 
                                link={item.link} 
                                name={item.name} 
                                likes={item.likes.length}
                                onCardClick={onCardClick} 
                                onCardLike={onCardLike}
                                onCardDelete={onCardDelete}
                            />
                    );
                    }
                )
            }
            </section>
        </main>
    );
}

export default Main;
