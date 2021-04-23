import React from 'react';
import Item from './Item';
import * as ReactBootStrap from "react-bootstrap";

const itemList = () => {
    return (
        <div className="grillaDeProductos row justify-content-center mt-5">
            <Item img="./sabrositos" description="Comida para perros Sabrositos" id="123abc" title="Sabrositos" price="$1000" />
            <Item img="./pedigree" description="Comida para perros Pedigree" id="456def" title="Pedigree" price="$1000" />
            <Item img="./proPlan" description="Comida para perros Pro Plan" id="789ghi" title="Pro Plan" price="$1000" />
            <Item img="./royal" description="Comida para perros Royal" id="123jkl" title="Royal" price="$1000" />
        </div>
    );
}

export default itemList;