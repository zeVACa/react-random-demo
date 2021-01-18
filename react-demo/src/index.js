import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import cardsDataResponse from './data.json';

import Card from './card';

console.log(cardsDataResponse);

function CardList() {
  return (
    <div className="container">
      <ul className="row">
        {cardsDataResponse.map((item) => (
          <Card imgUrl={item.image} title={item.title} description={item.description} />
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<CardList />, document.getElementById('root'));
