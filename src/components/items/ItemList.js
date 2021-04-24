import React from 'react';
import Item from './Item';
import * as ReactBootStrap from "react-bootstrap";

const itemList = () => {
    return (
        <div className="grillaDeProductos row justify-content-center mt-5">
            <Item img="https://res-console.cloudinary.com/dm2gfj40h/thumbnails/v1/image/upload/v1619226738/c2Ficm9zaXRvc19lNmNma3Q=/preview" description="Comida para perros Sabrositos" id="123abc" title="Sabrositos" price="$1000" stock={5} />
            <Item img="https://res-console.cloudinary.com/dm2gfj40h/thumbnails/v1/image/upload/v1619226738/cGVkaWdyZWVfbHhydGo0/preview" description="Comida para perros Pedigree" id="456def" title="Pedigree" price="$1000" stock={4} />
            <Item img="https://res-console.cloudinary.com/dm2gfj40h/thumbnails/v1/image/upload/v1619226738/cHJvUGxhbl95dnBodW4=/preview" description="Comida para perros Pro Plan" id="789ghi" title="Pro Plan" price="$1000" stock={3} />
            <Item img="https://res-console.cloudinary.com/dm2gfj40h/thumbnails/v1/image/upload/v1619226738/cm95YWxfa2htbW0z/preview" description="Comida para perros Royal" id="123jkl" title="Royal" price="$1000" stock={2} />
        </div>
    );
}

export default itemList;