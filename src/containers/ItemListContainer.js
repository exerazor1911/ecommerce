import React, {useState, useEffect} from 'react';
import * as ReactBootStrap from "react-bootstrap";
import ItemList from '../components/items/ItemList';

const ItemListContainer = () => {

    const [arrayItems, setArrayItems] = useState([])

    useEffect(()=>{
        const products = [
            {
                img:"https://res.cloudinary.com/dm2gfj40h/image/upload/v1619226738/sabrositos_e6cfkt.jpg" ,
                description:"Comida para perros Sabrositos" ,
                id:"123abc" ,
                title:"Sabrositos/" ,
                price:"$1000" ,
                stock: 5
            } , 
        
            {
                img:"https://res-console.cloudinary.com/dm2gfj40h/thumbnails/v1/image/upload/v1619226738/cGVkaWdyZWVfbHhydGo0/preview" ,
                description:"Comida para perros Pedigree" ,
                id:"456def" ,
                title:"Pedigree" ,
                price:"$1000" ,
                stock: 4
            } ,
            
            {
                img:"https://res-console.cloudinary.com/dm2gfj40h/thumbnails/v1/image/upload/v1619226738/cHJvUGxhbl95dnBodW4=/preview" ,
                description:"Comida para perros Pro Plan" ,
                id:"789ghi" ,
                title:"Pro Plan" ,
                price:"$1000" ,
                stock: 3
            } ,
            
            {
                img:"https://res-console.cloudinary.com/dm2gfj40h/thumbnails/v1/image/upload/v1619226738/cm95YWxfa2htbW0z/preview" ,
                description:"Comida para perros Royal" ,
                id:"123jkl" ,
                title:"Royal" ,
                price:"$1000" ,
                stock: 2
            }]
    
        const lists = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(products)
            })
        }, 3000)
    
        lists.then((res)=>{
            setArrayItems(res)
        })
    
        .catch(()=>{
            console.log("Loading Problems")
        })
    
        .finally(()=>{
            console.log("Loading Finished")
        })

    },[])

    

    return (
        <React.Fragment>
      {arrayItems.length > 0 ? <ItemList productItems={arrayItems}/> : <div style={{height: '20rem', width: '100%'}} className="text-center pt-5 align-center"><ReactBootStrap.Spinner className="" style={{height: '100%', width: '25%'}} animation="grow" variant="danger" /></div>} 
        </React.Fragment>
    );
};

export default ItemListContainer;   