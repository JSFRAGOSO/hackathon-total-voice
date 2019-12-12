import React ,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
//import api from '../../services/api';
import arrow from '../../assets/mini-arrow.png'
import './styles.css';


export default function Dashboard({history}){

    const [orders,setOrders] = useState([]);

    useEffect(() => {
        async function loadOrders(){
            const optionsOrder = [
                { id: 1,value: 'IXS9299'},
                { id: 2,value: 'IYL1413'},
                { id: 3,value: 'ABC1A33'},
              ];
              setOrders(optionsOrder)
        }      

        loadOrders();
    }, []);

    async function handleUpdate(event,id){
        event.preventDefault()
       
        history.push(`/update/order/${id}`);
    }

    return (
    <>  
        <p>
            Welcome <strong>User</strong>
        </p>
        <ul className="trip-list">
        {orders.map(order =>(
                        <li key={order.id}>
                            <div className="trip-card">
                                <div className="trip-description">
                                    <strong>{order.value}</strong>
                                </div>
                                
                                <button type="button" className="btn" id = "update" onClick={(event) => handleUpdate(event,order.value)}>
                                        <header style = {{backgroundImage: `url(${arrow})`,backgroundSize: 'cover'}}/>
                                </button>
                                
                            </div>
                        </li>
                    ))}
            
        </ul>
        <Link to="/new/order">
            <button type="submit" className="btn" >New Order</button>
        </Link>
    </>
    );
    
}