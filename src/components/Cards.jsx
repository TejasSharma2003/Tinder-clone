import React from 'react';
import "../styles/card-component.css"
function CardComponent(props) {
  
  return(
      <div class="card_component">
        <div>
          <img src={props.image} alt="" />
          <h1 className="name">{props.person}</h1>
        </div>

      </div>
  );
}

export default CardComponent;
