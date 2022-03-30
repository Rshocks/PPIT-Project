import React from "react";
import '../../App.css';

export default function home(){
    return(
        <ul className='home'>
               <div>
                   <h1>Home</h1><br>
                     </br>
                     <h3>Welcome to the home page of our GAA Tracker, here we have results for all matchs ranging from Senior Intermediate, 
                     Junior and Underage from under 14s to 20s, aswell we provide a QR code which would be pitchside so as spectators
                     with no scoreboard are aware of the score, lastly we have a GPS system so if anyone is lost on their way to a match,
                     they just type in the name of the pitch and the GPS will find it, although it has all been created with Galway in mind for now.
                     </h3>
               </div>              
        </ul>
    );
}