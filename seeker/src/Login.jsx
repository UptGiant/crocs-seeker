import React, { useState } from "react"

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmint = (sub) => {
        sub.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form">
            <form className="login-form" onSubmit={handleSubmint}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(sub) => setEmail(sub.target.value)} placeholder="abc@gmail.com" type="email" id="email" name="email"/>
                <label htmlFor="password">password</label>
                <input value={password} onChange={(sub) => setPassword(sub.target.value)} type="password" id="password" name="password"/>
                <button>Login</button>
            </form>
            <button onClick={() => props.onFormSwitch('register')}>Don't have an account? Register</button>
        </div>
    )
}