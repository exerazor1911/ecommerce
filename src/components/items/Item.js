import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import Counterp from './Counterp';
import {Link} from 'react-router-dom';

const Item = ({id,price,title,description,img, stock}) => {
    return (
    <ReactBootStrap.Card style={{ width: '18rem' , margin: '2rem'}}>
    <ReactBootStrap.Card.Img variant="top" src={img} />
        <ReactBootStrap.Card.Body>
        <ReactBootStrap.Card.Title>{title}</ReactBootStrap.Card.Title>
        <ReactBootStrap.Card.Text>{description}</ReactBootStrap.Card.Text>
        <ReactBootStrap.Card.Text>{price}</ReactBootStrap.Card.Text>
        <ReactBootStrap.Card.Text>Stock: {stock}</ReactBootStrap.Card.Text>
        <Counterp stock={stock}  />
        <ReactBootStrap.Button style={{width: '50%', height: '6vh'}} className="inner-button mt-3" variant="success">Agregar al carrito</ReactBootStrap.Button>
        <ReactBootStrap.Button style={{width: '50%', height: '6vh'}} className="inner-button mt-3" variant="danger"><Link to={`/item/${id}`}>Ver Detalle</Link></ReactBootStrap.Button>
        </ReactBootStrap.Card.Body>
    </ReactBootStrap.Card>
    );
}

export default Item;