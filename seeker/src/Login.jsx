import React, { useState } from "react"

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (sub) => {
        sub.preventDefault();
        console.log(email, password);
    }


    return (
        <div className="auth-form">
            <h1>Login</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(sub) => setEmail(sub.target.value)} placeholder="abc@gmail.com" type="email" id="email" name="email"/>
                <label htmlFor="password">password</label>
                <input value={password} onChange={(sub) => setPassword(sub.target.value)} type="password" id="password" name="password"/>
                <button>Login</button>
                <button onClick={() => props.onFormSwitch('register')}>Don't have an account? Register</button>
            </form>
            
        </div>
    )
}