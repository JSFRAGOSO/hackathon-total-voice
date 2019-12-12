import React ,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import Select from 'react-select';

import './styles.css';

export default function Order(){
    
    const [truck,setTruck] = useState('');
    const [clients,setClients] = useState([]);
    const [selectedOptionTruck,setSelectedOptionTruck] = useState('');
    const [displayClient,setdisplayClient] = useState(false);
    const [added,setAdded] = useState(false);

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
            const optionsTruck = [
                { value: 'IXS9299', label: 'IXS9299' },
                { value: 'IYL1413', label: 'IYL1413' },
                { value: 'ABC1A33', label: 'ABC1A33' },
              ];
              setTruck(optionsTruck)
  
        }        
            loadClients();
            loadTrucks();
    }, []);

    function handleSelectedTruck(selectedOptionTruck){        
        setSelectedOptionTruck({ selectedOptionTruck });
    };

    async function handleOrder(){        
        setdisplayClient(true);
    };
    
    async function handleAdd(){        
        setAdded(!added)
    };

    return (
        <div className="container">
            <label htmlFor="truck">Truck *</label>
            <Select
                value={selectedOptionTruck.label}
                onChange={handleSelectedTruck}
                options={truck}
            />
            <button className="btn" onClick={handleOrder}>
                Create Order
            </button>
            { displayClient?
            <>
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
            </>
            :<p/>
            }

        </div>
     )
}