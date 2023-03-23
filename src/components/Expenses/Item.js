import React,{ useState } from 'react'

import './Item.css'
import Date from './Date'
import Card from '../UI/Card'



const Item = (props) =>{
    const [title, setTitle] = useState(props.title);



    const clickHandler = () => {
        setTitle ('updated');
         console.log(title);
    }
    return (
        <Card className='expense-item' >
            <Date date={props.date} />
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">£ {props.amount}</div>
                    <button onClick={clickHandler}>Change Title</button>
                </div>
        </Card>
    );
}

export default Item;