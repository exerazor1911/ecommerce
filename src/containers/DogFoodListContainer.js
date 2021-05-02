import React, {useState, useEffect} from 'react';
import * as ReactBootStrap from "react-bootstrap";
import { useParams } from 'react-router';
import DogFoodList from '../components/items/DogFoodList';
import productsList from '../DataBase/DataBase';


const DogFoodListContainer = () => {
    const [arrayItems, setArrayItems] = useState([])
    const {category} = useParams()

    useEffect(()=>{
        const products = productsList()
        .fetch(products)
        .then(res => {
            let dogArray = res.filter(i => i.category === `${category}`)
            setArrayItems(dogArray)
        })
        .catch(()=>{
            console.log("Loading Problems")
        })
    
        .finally(()=>{
            console.log("Loading Finished")
        })

    },[])

    

    return (
        <DogFoodList category = {category}/>
    );
};

export default DogFoodListContainer;   