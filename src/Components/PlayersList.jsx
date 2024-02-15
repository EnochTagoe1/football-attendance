import { useState } from "react";
import "./PlayersList.css";
import PlayerCard from "./PlayerCard";

export default function 
PlayersList ({players, location}) {
    // console.log("this is the props obj", props.players)
    const [attendanceList, setAttendancelist] = useState([]);
  return (
    <div className="players-list">
        <h2>List of Players that train at 
            <span className="players-list-location"> {location}</span></h2>
        <ul>
            {players.map(player => {
                return <PlayerCard player= {player}/>
                
            })}
        </ul>
        </div>
  )
}

