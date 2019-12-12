import React from 'react';
import {Link} from 'react-router-dom';
//import api from '../../services/api';
import './styles.css';


export default function Dashboard({history}){
    
    return (
    <>
        <ul className="trip-list">
                
            <li>
                <div className="trip-card">
                    <div className="trip-description">
                        <strong>Trip Sunrise</strong>
                        <span> A trip from A to B</span>
                    </div>
                    <button type="button" className="btn" id = "update" >
                        Modify
                    </button>
                </div>
            </li>
            <li>
                <div className="trip-card">
                        <div className="trip-description">
                            <strong>Trip Sunrise</strong>
                            <span> A trip from A to B</span>
                        </div>
                        <button type="button" className="btn" id = "update" >
                            Modify
                        </button>
                </div>  
            </li>
            <li>
                <div className="trip-card">
                    <div className="trip-description">
                        <strong>Trip Sunrise</strong>
                        <span> A trip from A to B</span>
                    </div>
                    <button type="button" className="btn" id = "update" >
                        Modify
                    </button>
                </div>   
            </li>
        </ul>
        <Link to="/new/trip">
            <button type="submit" className="btn" >New Trip</button>
        </Link>
    </>
    );
    
}