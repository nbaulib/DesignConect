import React from "react";
import './Card.css';

const Card = ({ name, description, link}) => {
  return (
      <div className="Card">
        <h3>{name}</h3>
        <p>{description}</p>
        <a href={link} target="_blank"> View </a>
      </div>
  ) 
}

export default Card;