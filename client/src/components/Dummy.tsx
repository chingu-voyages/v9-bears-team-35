import React from 'react';
import { FilterOptions } from '../types';

function Dummy({ orderBy, ascendent }: FilterOptions) {
  return (
    <div>
      <h2>Awesome App!</h2>
      <p>Ordered by: {orderBy}</p>
      <p>{ascendent ? 'Ascendent' : 'Descendent'}</p>
    </div>
  );
}

export default Dummy;
