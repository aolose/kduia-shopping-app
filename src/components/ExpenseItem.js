import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';
import {FaMinusCircle, FaPlusCircle, FaTimesCircle} from 'react-icons/fa';

const ExpenseItem = (props) => {
    const {dispatch, Location} = useContext(AppContext);
    const payload = {name: props.name}
    const clear = () => {
        dispatch({
            type: 'DELETE_ITEM',
            payload: payload,
        });
    };
    const o = {...payload, budget: 10}
    const add = () => {
        dispatch({
            type: 'ADD_QUANTITY',
            payload: o,
        });
    };
    const min = () => {
        dispatch({
            type: 'RED_QUANTITY',
            payload: o,
        });
    };


    return (
        <tr>
            <td>{props.name}</td>
            <td>{Location}{parseInt(props.budget)}</td>
            <td><FaPlusCircle size='2em' color="green" onClick={add}></FaPlusCircle></td>
            <td><FaMinusCircle size='2em' color="red" onClick={min}></FaMinusCircle></td>
            <td><FaTimesCircle size='1em' color="darkgray" onClick={clear}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;