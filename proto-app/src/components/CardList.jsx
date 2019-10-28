import React from 'react';

function CardList(props) {
  return (
    <div className="CardList"> 
      <h2>{props.title}</h2>
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