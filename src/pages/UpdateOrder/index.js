import React ,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import Select from 'react-select';

import './styles.css';

export default function UpdateOrder({history,match}){
    
    const [truck,setTruck] = useState('');
    const [clients,setClients] = useState([]);
    const [selectedOptionTruck,setSelectedOptionTruck] = useState('');
    const [displayClient,setdisplayClient] = useState(false);
    const [added,setAdded] = useState(false);

    const {orderId} = match.params;


    useEffect(() => {
        async function loadClients(){
            const optionsClient = [
                { id: 1,value: 'Quintanda do Zé',added:false},
                { id: 2, value: 'Mercado do seu José',added:false},
                { id: 3, value: 'Mr. Josheph Marktplace',added:false},
              ];
            setClients(optionsClient)
  
        }
        async function loadTrucks(){
              setTruck(orderId)
        }        
        loadClients();
        loadTrucks();
    }, []);
    
    async function handleAdd(){        
        setAdded(!added)
    };

    return (
        <div className="container">
            <label htmlFor="truck">Truck *</label>
            <form>
            <input 
                    type="truck"
                    id = "truck"
                    value={truck}
                    onChange={event => setTruck(event.target.value)}
                    />
            
            
                <div className="clients">
                    <label htmlFor="client">Clients</label>
                    <ul className="client-list">
                        {clients.map(client =>(
                            <li key={client.id}>
                                    <p>
                                        {client.value}
                                    </p>
                                    
                                    {
                                    added?
                                        <button type="button" className="btn" id = "remove" onClick={handleAdd}>
                                            REMOVE
                                        </button>
                                    :
                                        <button type="button" className="btn" id = "add" onClick={handleAdd} >
                                            ADD
                                        </button>
                                    }
                            </li>
                        ))}
                    </ul>
                </div>
                <Link to="/dashboard">
                    <button type="submit" className="btn" >FINISH</button>
                </Link>
            </form>
        </div>
     )
}