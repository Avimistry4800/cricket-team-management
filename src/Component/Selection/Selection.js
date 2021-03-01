import React , { useState,useEffect } from 'react';
import playerData from '../PlayerData/Data'
import Players from '../Players/Players';
import Selected from '../Selected/Selected'
import '../Players/Players.css'
import './Selection.css'
const Selection = () => {
const first15 = playerData.slice(0,15);
const [players,setplayers] = useState(first15);
const [selected,setSelected] = useState([]);
useEffect(() =>{
    setSelected(selected)
},[])

    const  handleSelected = (player) =>{
    const newSelected = [...selected,player];
    setSelected(newSelected);    
}


    return (
    <div className="total-player-section">
        <div className="player-section">
            {
            players.map(playr => <Players
                
                handleSelected={handleSelected}
                player={playr}>
                </Players>
                )
            }
            
        </div>
        <div>
              
              <Selected selected={selected}></Selected>            
        </div>

    </div>
    );
};

export default Selection;