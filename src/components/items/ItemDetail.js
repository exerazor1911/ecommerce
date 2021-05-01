import React, {useState, useEffect} from 'react';
import * as ReactBootStrap from "react-bootstrap";


const ItemDetail = ({item}) => {
    console.log(item)
    return (
        <ReactBootStrap.Card style={{ width: '18rem' , margin: '2rem'}}>
    <ReactBootStrap.Card.Img variant="top" src={item.img} />
        <ReactBootStrap.Card.Body>
        <ReactBootStrap.Card.Title>{item.title}</ReactBootStrap.Card.Title>
        <ReactBootStrap.Card.Text>{item.description}</ReactBootStrap.Card.Text>
        <ReactBootStrap.Card.Text>{item.price}</ReactBootStrap.Card.Text>
        <ReactBootStrap.Card.Text>Stock: {item.stock}</ReactBootStrap.Card.Text>
        <ReactBootStrap.Button style={{width: '100%'}} className="inner-button mt-3" variant="success">Agregar al carrito</ReactBootStrap.Button>
        </ReactBootStrap.Card.Body>
    </ReactBootStrap.Card>
    );
}

export default ItemDetail;