import React from "react";
import "./Card.css";

const Card = ({cards}) => {
  const {title, img, url} = cards;
  return <div className="card__container">
      {cards.map((card, i)  => (
          <div className="card" key={i}>
              <div className="card__body">
                  <div className="card__overlay">
                      <div className="card__overlay--details">
                          <div className="card__overlay--title">{card.title}</div>
                          <div className="card__overlay--btn">
                              <a href={card.url} target="_blank" className="card__overlay--link">
                                  Visit Project
                              </a>
                          </div>
                      </div>
                  </div>
                  <img src={card.img} alt="card" className="card__img" />
              </div>
          </div>
      )) }

    </div>;
};
export default Card;
