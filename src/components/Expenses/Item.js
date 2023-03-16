import './Item.css'
import Date from './Date'
import Card from '../UI/Card'

const Item = (props) =>{
    return (
        <Card className='expense-item' >
            <Date date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">£ {props.amount}</div>
                </div>
        </Card>
    );
}

export default Item;