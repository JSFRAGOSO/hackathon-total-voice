import React, {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import api from '../../services/api';
import './styles.css';


export default function Dashboard({history}){
    
    return (
    <>
        <ul className="trip-list">
                
            <li>
                <strong>Trip Sunrise</strong>
                <span> A trip from A to B</span>
                <button type="button" className="btn" id = "update" >
                    Modify
                </button>   
            </li>
            <li>
                <strong>Trip Moon Shadow Elf</strong>
                <span> A trip from Z to E</span>
                <button type="button" className="btn" id = "update">
                    Modify
                </button>   
            </li>
            <li>
                <strong>Trip for Silician</strong>
                <span> A trip from I to B to M</span>
                <button type="button" className="btn"id = "update">
                    Modify
                </button>   
            </li>
        </ul>
        <Link to="/new/trip">
            <button type="submit" className="btn" >New Trip</button>
        </Link>
    </>
    );
    
}