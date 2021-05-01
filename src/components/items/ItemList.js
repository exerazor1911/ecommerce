import React from 'react';
import Item from './Item';
import * as ReactBootStrap from "react-bootstrap";

const itemList = ({productItems}) => {
    return (
        <ReactBootStrap.Container fluid>
            <ReactBootStrap.Row className="grillaDeProductos justify-content-center  mt-5">
                {productItems.map((individualItem)=>
                <ReactBootStrap.Col lg={3} className="m-0 p-0">
                    <Item key={individualItem.id} 
                    id = {individualItem.id} 
                    img={individualItem.img} 
                    description={individualItem.description} 
                    title={individualItem.title} 
                    price={individualItem.price} 
                    stock={individualItem.stock} />
                </ReactBootStrap.Col>
                )}
            </ReactBootStrap.Row>
        </ReactBootStrap.Container >
    );
}
export default itemList;