import React from "react";
import ReactDOM from 'react-dom';
import {Map,MapContainer,Marker,Popup,TileLayer} from "react-leaflet";
import{Icon} from "leaflet";
import * as parkData from "./Gaa-parks.json"; 
import axios from 'axios';
import "./GPs.css";


export default function GPS(){

    return<MapContainer center={[53.270668, -9.056790]} zoom ={12}>
        <TileLayer 
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>
        contributors'
        />
        {parkData.pitches.map(park=>(<Marker key={park.name} position={[park.position[0],park.position[1]
        ]}
        onClick={() =>{
            
        }}
        ></Marker>))}
    </MapContainer>;
        
    
}