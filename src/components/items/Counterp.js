import React, {useState, useEffect} from 'react';
import * as ReactBootStrap from "react-bootstrap";
import '../../App.css';


const Counterp = (props) => {
    console.log(props.stock)
    const [count, setCount] = useState(0);
    const functionSumar = () => {
       count < props.stock ? setCount(count + 1) : <ReactBootStrap.Button disabled onClick={functionSumar} style={{width: '25%'}} className="inner-button-suma" variant="warning">+</ReactBootStrap.Button>
    }
    const functionRestar = () => {
        count > 0 ? setCount(count - 1) : <ReactBootStrap.Button disabled onClick={functionRestar} style={{width: '25%'}} className="inner-button-resta" variant="warning">-</ReactBootStrap.Button>
    }

    return (
            <div className="row d-flex justify-content-between text-center">
                <ReactBootStrap.Button onClick={functionRestar} style={{width: '25%'}} className="inner-button-resta" variant="warning">-</ReactBootStrap.Button>
                <span  style={{width: '50%'}}>{count}</span>
                <ReactBootStrap.Button onClick={functionSumar} style={{width: '25%'}} className="inner-button-suma" variant="warning">+</ReactBootStrap.Button>
            </div>
    );
}

export default Counterp;








