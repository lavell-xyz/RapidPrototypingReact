import React from 'react';

function Card(props) {
  return (
    <div className="Card"> 
      {props.title}
    </div>
  );
}

export default Card;