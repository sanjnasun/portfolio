import React from "react";
import "./styling/newCard.css";




const TempCard = ({ link, description, title }) => {
    return (
        <a href={link} target="_blank" rel="noreferrer"> 
            <div className="card">
                <div className="card-content">
                    <p className="card-title belowTitle">{title}</p>
                    <p className="card-para belowTitle">{description}</p>
                </div>
            </div>
        </a>

    );
}


export default TempCard;