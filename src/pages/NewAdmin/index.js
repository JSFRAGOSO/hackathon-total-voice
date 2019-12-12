import React ,{useState} from 'react';
import api from '../../services/api';

export default function NewAdmin({history}){

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [companyName,setCompanyName] = useState('');
    const [companyDocument,setCompanyDocument] = useState('');

    async function handleSubmit(event){
        event.preventDefault();
        
        await api.post('/create/company', {
            companyName,
            companyDocument,
          })
          .then(async function (response) {
            if(response.data.error){
                alert(response.data.error)
            }else{    
                const {companyToken,_id} = response.data;
                
                await api.post('/create/admin', {
                    name,
                    email,
                    password,
                    companyId:_id,
                    token:companyToken
                    })
                    .then(function (response) {
                        if(response.data.error){
                            alert(response.data.error)
                        }else{
                            history.push('/');
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                
    }})
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <form onSubmit={handleSubmit} className="new-user">
            <label htmlFor="company">Name * </label>
            <input 
                id="company"
                placeholder="Your full name"
                value = {name}
                onChange = { event => setName(event.target.value)}
            />
            <label htmlFor="company">E-mail *</label>
            <input 
                id="email"
                placeholder="Your best e-mail"
                value = {email}
                onChange = { event => setEmail(event.target.value)}
            />
            <label htmlFor="company">Password</label>
            <input 
                id="password"
                type="password"
                placeholder="Your password"
                value = {password}
                onChange = { event => setPassword(event.target.value)}
            />
            <label htmlFor="company">Company name</label>
            <input 
                id="companyName"
                placeholder="Total Voice"
                value = {companyName}
                onChange = { event => setCompanyName(event.target.value)}
            />
            <label htmlFor="company">Company document</label>
            <input 
                id="companyDocument"
                placeholder="10.482.744/0001-43"
                value = {companyDocument}
                onChange = { event => setCompanyDocument(event.target.value)}
            />
            <button type = "submit" className="btn">Register</button>
        </form>
    )
}