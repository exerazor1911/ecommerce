import React from 'react';
import Item from './Item';
import * as ReactBootStrap from "react-bootstrap";

const itemList = ({productItems}) => {
    return (
        <div className="grillaDeProductos row justify-content-center mt-5">
            {productItems.map((individualItem)=>
                <Item key={individualItem.id} img={individualItem.img} description={individualItem.description} title={individualItem.title} price={individualItem.price} stock={individualItem.stock} />
            )}
        </div>
    );
}
export default itemList;