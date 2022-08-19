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
  check,
}: SubcriptionItem) => {
  return (
    <div className={`subcription-card ${color}`}>
      <img className="img-absolute" src={img} alt={img} />
      <h2 className="subcription-card__title">{title}</h2>
      <span className="subcription-card__subtitle">{subtitle}</span>
      {!monthly ? (
        <h1 className="subcription-card__price">{price}</h1>
      ) : (
        <h1 className="subcription-card__price">
          {price} <span className="montly">/ Month</span>
        </h1>
      )}
      <div className="subcription-card__bottom-container">
        {features.map((feat: Feature) => (
          <div className="subcription-card__bottom-container--labels">
            <svg
              className="subcription-card__bottom-container--labels--img"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="9"
            >
              <path
                fill={check}
                d="M10.319.768l1.363 1.464-7.128 6.634L.319 4.924 1.682 3.46l2.871 2.674z"
              />
            </svg>
            <span className="subcription-card__bottom-container--labels--label">
              {feat.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
