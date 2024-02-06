import { React } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import './LoginForm.css';

export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    return ( 
    <div className='wrapper'>
        <h1>Login</h1>
            <button className='btn' onClick={() => loginWithRedirect()}>Login</button>
            <button className='btn' onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
    </div>
    )
}
export default LoginButton
