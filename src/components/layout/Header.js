import React from 'react'
import {Link} from "react-router-dom";

function Header(){
    return (
        <div className="bg-dark text-light p-2 text-center border rounded">
            <h1>Simple Todo List App</h1>
            <Link className="text-light" to="/">Home</Link> | <Link className="text-light" to="/about">About</Link>
        </div>
    )
}

export default Header;