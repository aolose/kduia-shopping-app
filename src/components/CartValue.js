import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const CartValue = () => {
    const {CartValue, Location} = useContext(AppContext);
    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {Location}{CartValue}</span>
        </div>
    );
};

export default CartValue;