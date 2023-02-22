import React, { useState } from "react";
import "./cards.scss";
import Card from "./card/Card";
import { cloneDeep } from "lodash";

export interface CardDetails {
  id: number;
  name: string;
  description: string;
  imgUrl: any;
  isReadMore: boolean;
}

const Cards = () => {
  const data = [
    {
      id: 1,
      name: "Card 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias rerum atque consequuntur? Quis sapiente, saepe, alias labore sint facilis odio veritatis harum, ducimus eaque adipisci neque assumenda ipsa doloremque laborum. Molestias rerum atque consequuntur? Quis sapiente, saepe, alias labore sint facilis odio veritatis harum, ducimus eaque adipisci neque assumenda ipsa doloremque laborum",
      imgUrl: `${process.env.PUBLIC_URL}/placeholders/card-images.png`,
      isReadMore: false,
    },
    {
      id: 2,
      name: "Card 2",
      description: "Lorem ipsum dolor sit amet consectetur",
      imgUrl: `${process.env.PUBLIC_URL}/placeholders/card-images.png`,
      isReadMore: false,
    },
    {
      id: 3,
      name: "Card 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias rerum atque consequuntur? Quis sapiente, saepe, alias labore sint facilis odio veritatis harum, ducimus eaque adipisci neque assumenda ipsa doloremque laborum",
      imgUrl: `${process.env.PUBLIC_URL}/placeholders/card-images.png`,
      isReadMore: false,
    },
  ] as CardDetails[];

  const [showCards, setShowCards] = useState<CardDetails[]>(data);

  const readMoreToggle = (cardId: number) => {
    const cardsCopy = cloneDeep(showCards);
    const cardIndex = cardsCopy.findIndex((c) => c.id === cardId);
    if (cardIndex !== -1) {
      cardsCopy[cardIndex] = {
        ...cardsCopy[cardIndex],
        isReadMore: !cardsCopy[cardIndex].isReadMore
      }
    }
    setShowCards(cardsCopy);
  };

  return (
    <div className="container cards-container">
      <div className="cards-container__row row align-items-center">
        {showCards.map((c) => (
          <div
            key={c.id}
            className="cards-container__row__card col-sm-12 col-md-4"
          >
            <Card details={c} onReadMoreToggle={readMoreToggle}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
