import './ExpenseDate.css';

const ExpenseDate = (props) => {

    //this componenet is to gather all the date information in seperate variables
    //and then to render each of them in divs and one big div

    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit'});
    const year = props.date.getFullYear();

    return (
        <div className='expense-date'>
                <div className='expense-date__month'>{month}</div>
                <div className='expense-date__day'>{day}</div>
                <div className='expemse-date__year'>{year}</div>
            </div>
    );
}

export default ExpenseDate;
