import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';
const Button = ({
    text
}) => {
    return (
        <Link to="/event"  style={{ textDecoration: 'none' }} > <button className="Button">{ text }</button> </Link>
    );
}
export default Button;