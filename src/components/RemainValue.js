import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const RemainValue = () => {
    const {CartValue, Location, Budget} = useContext(AppContext);
    return (
        <div className='alert alert-success'>
            <span>Remaining: {Location}{Budget - CartValue}</span>
        </div>
    );
};

export default RemainValue;