import React, {useState, useEffect} from 'react';
import * as ReactBootStrap from "react-bootstrap";


const DogFoodList = ({category}) => {
    console.log(category)
    return (
        <ReactBootStrap.Card style={{ width: '18rem' , margin: '2rem'}}>
    <ReactBootStrap.Card.Img variant="top" src={category.img} />
        <ReactBootStrap.Card.Body>
        <ReactBootStrap.Card.Title>{category.title}</ReactBootStrap.Card.Title>
        <ReactBootStrap.Card.Text>{category.description}</ReactBootStrap.Card.Text>
        <ReactBootStrap.Card.Text>{category.price}</ReactBootStrap.Card.Text>
        <ReactBootStrap.Card.Text>Stock: {category.stock}</ReactBootStrap.Card.Text>
        <ReactBootStrap.Button style={{width: '100%'}} className="inner-button mt-3" variant="success">Agregar al carrito</ReactBootStrap.Button>
        </ReactBootStrap.Card.Body>
    </ReactBootStrap.Card>
    );
}

export default DogFoodList;