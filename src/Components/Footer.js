import React from 'react';

import { Link } from 'react-router-dom';

//footer component
const Footer = () => {
  return (
    <div>
        <Link to="/">Home</Link> | <Link to="/cart">Cart</Link>
    </div>
  )
}

export default Footer