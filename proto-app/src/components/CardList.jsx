import React from 'react';
import './CardList.scss';

function CardList(props) {
  return (
    <div className="CardList"> 
      <h1>{props.title}</h1>
      <ul>
        {
          props.cards.map((value) => {
            return <li>{value}</li>;
          })
        }
      </ul>
    </div>
  );
}

export default CardList;