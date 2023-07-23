import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const Budget = () => {
    const {Location, Budget, dispatch} = useContext(AppContext);
    return (
        <div className='alert alert-secondary from-group'>
            <span>Budget: {Location}</span>
            <input
                type={"number"}
                min={0}
                className={'input col-md-8 form-control-sm'} value={Budget}
                onChange={e => {
                    dispatch({
                    type: 'Budget',
                    value: +e.target.value
                })}}/>
        </div>
    );
};

export default Budget;