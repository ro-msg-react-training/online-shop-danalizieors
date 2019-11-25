import React from 'react'
import { Link } from 'react-router-dom'


export default () => (
    <div className="navbar-start">
        <Link to="/products" className="navbar-item">Products</Link>
        <Link to="/cart" className="navbar-item">Cart</Link>
    </div>
)
