import React from 'react';
import './Card.scss';

interface Props {
  title: string;
  description: string;
  image: string;
  id: string;
}

export function Card({ description, image, title, id }: Props) {
  return (
    <div className="card-container">
      <div className="img-container">
        <img className="card-image" id={id} src={image} alt={image} />
      </div>
      <div className="description-container">
        <h1 className="card-title">{title}</h1>
        <span className="card-description">{description}</span>
      </div>
    </div>
  );
}
