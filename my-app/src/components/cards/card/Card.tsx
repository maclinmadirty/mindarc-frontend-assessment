import React from "react";
import clsx from 'clsx';

import { CardDetails } from "../Cards";
import "./card.scss";

interface Props {
  details: CardDetails;
  onReadMoreToggle: (cardId: number) => void;
}

const Card = ({ details, onReadMoreToggle }: Props) => {
  const toggleReadMore = (id: number) => {
    onReadMoreToggle(id);
  };

  return (
    <div className="card custom-card">
      <img className={clsx("card-img-top", "custom-card__image", {
        ['hidden']: details.isReadMore
      })} src={details.imgUrl} alt="thumbnail" />
      <div className="card-body custom-card__body">
        <p className="card-text">{details.description}</p>
      </div>
      <div className="card-footer custom-card__footer">
        <button
          type="button"
          className="btn btn-outline-dark custom-button"
          onClick={() => toggleReadMore(details.id)}
        >
          {details.isReadMore ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default Card;
