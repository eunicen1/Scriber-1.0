import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import { Accounts } from 'meteor/accounts-base';

export const LogReg = ({ user }) =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function makeUser({ email, password }){
        Accounts.createUser({
          username:email,
          email,
          password,
        });
    }

    const handleSubmit = e =>{
        e.preventDefault();
        if(!user){
            makeUser({
              email: email,
              password: password,
            });
        }
        Meteor.loginWithPassword(email, password);
    }

    const changeEmail = e =>{
        setEmail(e.target.value);
    }
    
    const changePassword = e =>{
        setPassword(e.target.value);
    }

    return(
        <form onSubmit={ handleSubmit } className='login-form'>
            <br></br>
            <h2>Login / Register </h2><br></br>
            <h3>Login and register by filling out the fields below.</h3><br></br>
            <h3>
                <label htmlFor='email'>Email</label><br></br>
                <input id="email" className="form-control" type="text" placeholder="email" require="true" onChange={ changeEmail }/><br></br><br></br>
                <label htmlFor='password'>Password</label><br></br>
                <input id="password" className="form-control" type="password" placeholder="password" require="true" onChange={ changePassword }/><br></br><br></br>
                <button type="submit">SUBMIT</button>
            </h3>
            <h3 id="error" name="error"></h3>
        </form>
    );
}