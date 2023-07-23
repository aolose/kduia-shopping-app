import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    return (
        <table className='table'>
            <thead className="thead-light">
            <tr>
                <th scope="col">Items</th>
                <th scope="col">Allocate budget</th>
                <th scope="col">Increase by 10</th>
                <th scope="col">Decrease by 10</th>
                <th scope="col">Remove</th>
            </tr>
            </thead>
            <tbody>
            {expenses.map((expense) => (
                <ExpenseItem key={expense.id} {...expense}/>
            ))}
            </tbody>
        </table>
    );
};

export default ExpenseList;