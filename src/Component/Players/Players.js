import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './Players.css'


const Players = (props) => {
    const {image, name, age, club, role, salary, id} = props.player;
    // console.log(props);
    return (
        <div className="player-profile" key = {id}>
            <img src={image} alt=""/>
            <h5>{name}</h5>
            <p>Age: {age}</p>
            <p>Club: {club}</p>
            <p>Play role: {role}</p>
            <p>Salary: ${salary}</p>
            <button className="add-remove-btn" 
             onClick={() => props.handleSelected(props.player)}
             >
                 <FontAwesomeIcon icon={faUserCircle} />
         Add Player
            
            </button>
            
        </div>
    );
};

export default Players;