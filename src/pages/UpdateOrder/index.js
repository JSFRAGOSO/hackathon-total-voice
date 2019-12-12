import React ,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

export default function UpdateOrder({history,match}){
    
    const [truck,setTruck] = useState('');
    const [clients,setClients] = useState([]);
    const [added,setAdded] = useState(false);

    const {orderId} = match.params;


    useEffect(() => {
        async function loadClients(){
            const optionsClient = [
                { 
                    id: 1,
                    value: 'Quintanda do Zé',
                    added:false,
                    adress:'Rua das Fiandeiras, Vila Olímpia'
                },
                { 
                    id: 2,
                    value: 'Mercado do seu José',
                    added:false,
                    adress:'Rua 15 A, Taquarussu'
                },
                { 
                    id: 3,
                    value: 'Mr. Josheph Marktplace',
                    added:false,
                    adress:'Rua Limoeiro, Conjunto Adalberto Sena'
                },
                {
                    id: 4,
                    value: 'Markplace 24h',
                    added:false,
                    adress:'Rua João Rodrigues Braga, Vila Olavo Costa'
                },
              ];
            setClients(optionsClient)
  
        }
        async function loadTrucks(){
              setTruck(orderId)
        }        
        loadClients();
        loadTrucks();
    }, [orderId]);
    
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
                                        <span>, </span>          
                                    <strong>
                                        {client.adress}
                                    </strong>
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