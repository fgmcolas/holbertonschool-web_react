import React from 'react'
import './Header.css'
import HolbertonLogo from '../assets/holbertonlogo.jpg';

export default function Header() {
    return (
        <div className='App-header'>
            <img className='App-logo' src={HolbertonLogo} alt='holberton logo'></img>
            <h1>School dashboard</h1>
        </div>
    );
}
