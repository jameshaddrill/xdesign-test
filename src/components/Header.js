import React from 'react';

export default function Header(props) {
    return (
        <header className="site-header">
            <h1>Header</h1>
            <button onClick={props.descendClick}>Descend!</button> 
        </header>
    )
}