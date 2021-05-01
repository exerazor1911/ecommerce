import React, {useState, useEffect} from 'react';
import * as ReactBootStrap from "react-bootstrap";
import ItemDetail from '../components/items/ItemDetail';
import dataBase from '../DataBase/DataBase';
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const {id} = useParams();

    useEffect(()=> {
        const getItems = new Promise((resolve, reject)=>{
            setTimeout(()=> {
                resolve(dataBase())
            },3000)
        })
        getItems.then(res => {
            let respuesta  = res.filter(i => i.id === `${id}`)
            setItem(respuesta[0])
        })
        getItems.catch(()=>{
            console.log("Algo salio mal")
        })
    }, []) 

    return (
       <ItemDetail item = {item}/>
    );
} 

export default ItemDetailContainer;