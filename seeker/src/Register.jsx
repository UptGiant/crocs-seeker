import React, { useState } from "react"
export const Register = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('');

    const handleSubmint = (sub) => {
        sub.preventDefault();
        console.log(email);
    }
    return (
        <div className="auth-form">
            <form className="register-form" onSubmit={handleSubmint}>
                <label htmlFor="username">username</label>
                <input value={username} onChange={(sub) => setUserName(sub.target.value)} type="username" id="username" name="username"/>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(sub) => setEmail(sub.target.value)} type="email" id="email" name="email"/>
                <label htmlFor="password">password</label>
                <input value={password} onChange={(sub) => setPassword(sub.target.value)} type="password" id="password" name="password"/>
                <button>Login</button>
            </form>
            <button onClick={() => props.onFormSwitch('login')}>Have an account already? Login</button>
        </div>
    )
}