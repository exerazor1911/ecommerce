import React, {useState, useEffect} from 'react';
import * as ReactBootStrap from "react-bootstrap";
import ItemList from '../components/items/ItemList';
import productsList from '../DataBase/DataBase';


const ItemListContainer = () => {
    const [arrayItems, setArrayItems] = useState([])

    useEffect(()=>{
        const products = productsList()
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