import React from "react";
import clsx from 'clsx';

import { CardDetails } from "../Cards";
import "./card.scss";
import Button from 'react-bootstrap/Button';
import {Card as BootstrapCard} from 'react-bootstrap';

interface Props {
  details: CardDetails;
  onReadMoreToggle: (cardId: number) => void;
}

const Card = ({ details, onReadMoreToggle }: Props) => {
  const toggleReadMore = (id: number) => {
    onReadMoreToggle(id);
  };

  return (
    <BootstrapCard className="custom-card">
      <BootstrapCard.Img  variant="top" className={clsx("custom-card__image", {
        ['hidden']: details.isReadMore
      })} src={details.imgUrl} alt="thumbnail" />
      <BootstrapCard.Body className="custom-card__body">
        <p className="card-text">{details.description}</p>
      </BootstrapCard.Body>
      <BootstrapCard.Footer className="custom-card__footer">
        <Button 
          variant="outline-dark"
          className="custom-button"
          onClick={() => toggleReadMore(details.id)}
        >
          {details.isReadMore ? 'Read Less' : 'Read More'}
        </Button>
      </BootstrapCard.Footer>
    </BootstrapCard>
  );
};

export default Card;
