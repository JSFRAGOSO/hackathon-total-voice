import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './styles.css'

import api from '../../services/api';

export default function Login({history}){

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    async function handleSubmit(event){
        event.preventDefault();
        await api.post('/session/admin'
            ,{
                email,
                password
            }
        ).then(function (response){
            const {token} = (response.data);
            localStorage.setItem('token',token);
            history.push('/dashboard');
        })
        .catch(function (error) {
            alert(error)
        }); 
    }

    return (
        <>
        <p>
            Setup your company <strong>trips</strong> and <strong>track</strong> your deliveries from end to end
        </p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-mail *</label>
                <input 
                    type="email"
                    id = "email"
                    placeholder="Your e-mail"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    />
            <label htmlFor="password">Password *</label>
                <input 
                type="password"
                id = "password"
                placeholder="Your password"
                value={password}
                onChange={event => setPassword(event.target.value)}
                />
            <button type="submit" className="btn" >Enter</button>
            <Link to="/new/user">
                <button type="button" className="btn" id = "link" >or Sign Up</button>
            </Link>
        </form>
        </>
    )
}