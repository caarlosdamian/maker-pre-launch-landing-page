/* eslint-disable */
import React from 'react';
import { Feature, SubcriptionItem } from '../../interfaces';
import './SubcriptionCard.scss';

export const SubcriptionCard = ({
  color,
  features,
  id,
  img,
  monthly,
  price,
  subtitle,
  title,
}: SubcriptionItem) => {
  return (
    <div className={`subcription-card ${color}`}>
      <h2 className="subcription-card__title">{title}</h2>
      <span className="subcription-card__subtitle">{subtitle}</span>
      <h1 className="subcription-card__price">{price}</h1>
      <div className="subcription-card__bottom-container">
        <div className="subcription-card__bottom-container--labels">
          {features.map((feat: Feature) => (
            <>
              <img className="subcription-card__bottom-container--labels--img" />
              <span className="subcription-card__bottom-container--labels--label">
                {feat.name}
              </span>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
