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

        api.post('/companies', {
            companyName,
            companyDocument,
          })
          .then(function (response) {
            const companyId = response.data._id;

            api.post('/users', {
                name,
                email,
                password,
                companyId
                })
                .then(function (response) {
                    history.push('/');
                })
                .catch(function (error) {
                    console.log(error);
                });
          })
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
            <button type = "submit" className="btn">Cadastrar</button>
        </form>
    )
}