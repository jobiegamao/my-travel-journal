import React from 'react';

export default function Header() {
    return (
        <header >
            <img src={require('../images/header-logo.png')} className="header--logo" />
            my travel journal.
        </header>
    )
}