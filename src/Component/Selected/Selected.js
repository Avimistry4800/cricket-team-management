import React from 'react';
import './Selected.css'
const Selected = (props) => {
    
    const selected = props.selected;
    let total = 0;
    let players= [];
    
    for (let i = 0; i < selected.length; i++) {
        const player = selected[i];
        total = total + player.salary
        
    }
    for (let i = 0; i < selected.length; i++) {
        const player = selected[i];
        players= [...players,player.name]
        
    }
    console.log(selected);
    
        
    
    
    return (
        <div>
            
            <p>Total Players: {selected.length} </p>
            <p>Total Salary Expence : {total}</p>
            <h5>Selected Players</h5>
            <ul>
                {<li>{players}</li>}
            </ul>
            

        </div>
    );
};

export default Selected;