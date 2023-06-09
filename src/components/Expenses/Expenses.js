import Item from '../Expenses/Item'
import './Expenses.css'
import Card from "../UI/Card";

const Expenses = (props) => {
   
    return (
        <Card className="expenses">
            <Item
                title={props.expenses[0].title}
                amount={props.expenses[0].amount}
                date={props.expenses[0].date}
            />
            <Item
                title={props.expenses[1].title}
                amount={props.expenses[1].amount}
                date={props.expenses[1].date}
            />
            <Item
                title={props.expenses[2].title}
                amount={props.expenses[2].amount}
                date={props.expenses[2].date}
            />
            <Item
                title={props.expenses[3].title}
                amount={props.expenses[3].amount}
                date={props.expenses[3].date}
            />
        </Card>
        )
};

export default Expenses;