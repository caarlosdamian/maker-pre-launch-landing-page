import React from 'react';
import { Card } from '../../components/card/Card';
import { infoCards } from '../../utils';
import './GridContainer.scss';

export function GridContainer() {
  return (
    <div className="grid-container">
      {infoCards.map((item) => (
        <Card
          description={item.description}
          image={item.img}
          title={item.title}
          key={item.id}
          id={item.id}
        />
      ))}
    </div>
  );
}
