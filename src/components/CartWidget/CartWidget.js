import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import '../../App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';


const CartWidget = () => {
    return (
        <FontAwesomeIcon icon={faShoppingCart} style= {{fontSize: "1em", color: "#ffd4d4"}}/>
    );
}


export default CartWidget;