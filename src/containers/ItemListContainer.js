import React, {useState, useEffect} from 'react';
import * as ReactBootStrap from "react-bootstrap";
import ItemList from '../components/items/ItemList';

const ItemListContainer = () => {

    const [arrayItems, setArrayItems] = useState([])

    useEffect(()=>{
        const products = [
            {
                img:"./sabrositos" ,
                description:"Comida para perros Sabrositos" ,
                id:"123abc" ,
                title:"Sabrositos" ,
                price:"$1000" ,
                stock: 5
            } , 
        
            {
                img:"./pedigree" ,
                description:"Comida para perros Pedigree" ,
                id:"456def" ,
                title:"Pedigree" ,
                price:"$1000" ,
                stock: 5
            } ,
            
            {
                img:"./proPlan" ,
                description:"Comida para perros Pro Plan" ,
                id:"789ghi" ,
                title:"Pro Plan" ,
                price:"$1000" ,
                stock: 5
            } ,
            
            {
                img:"./royal" ,
                description:"Comida para perros Royal" ,
                id:"123jkl" ,
                title:"Royal" ,
                price:"$1000" ,
                stock: 5
            }]
    
        const lists = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(products)
            })
        }, 3000)
    
        lists.then((res)=>{
            setArrayItems(res)
            console.log(res)
        })
    
        .catch(()=>{
            console.log("Loading Problems")
        })
    
        .finally(()=>{
            console.log("Loading Finished")
        })

    },[])

    

    return (
      <ItemList />
    );
};

export default ItemListContainer;   