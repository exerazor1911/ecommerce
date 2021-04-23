import React from 'react';
import * as ReactBootStrap from "react-bootstrap";

const Item = ({id,price,title,description,img}) => {
    return (
    <ReactBootStrap.Card style={{ width: '18rem' , margin: '2rem'}}>
    <ReactBootStrap.Card.Img variant="top" src={img} />
        <ReactBootStrap.Card.Body>
        <ReactBootStrap.Card.Title>{title}</ReactBootStrap.Card.Title>
        <ReactBootStrap.Card.Text>{description}</ReactBootStrap.Card.Text>
        <ReactBootStrap.Card.Text>{price}</ReactBootStrap.Card.Text>
        <ReactBootStrap.Button variant="success">Agregar al carrito</ReactBootStrap.Button>
        </ReactBootStrap.Card.Body>
    </ReactBootStrap.Card>
    );
}

export default Item;