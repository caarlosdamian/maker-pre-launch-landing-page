import React from 'react';
import { SubcriptionCard } from '../../components/subcriptionCard/SubcriptionCard';
import { SubcriptionItem } from '../../interfaces';
import { subcriptionItems } from '../../utils';
import './Subcription.scss';

export function Subcription() {
  return (
    <div className="subcription">
      <div className="subcription__top-container">
        <h1 className="subcription__title">Our pricing plans</h1>
        <span className="subcription__subtitle">
          We only make money when our creators make money. Our plans are always
          affordable, and it’s completely free to get started.
        </span>
      </div>
      <div className="subcription__bottom-container">
        {subcriptionItems.map((sub: SubcriptionItem) => (
          <SubcriptionCard key={sub.id} {...sub} />
        ))}
      </div>
    </div>
  );
}
