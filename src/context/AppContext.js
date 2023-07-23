import React, {createContext, useReducer} from 'react';

// 5. The reducer - this is used to update the state, based on the action

const setCartValue = (state) => {
    state.CartValue = state.expenses.reduce((a, b) =>a + b.budget, 0)
}

export const AppReducer = (state, action) => {
    if (action.done) return state
    action.done = 1
    const rm = state.Budget - state.CartValue
    const q = action?.payload?.budget
    if (action?.payload?.name) {
        const expense = state.expenses.find(a => a.name === action.payload.name)
        if (expense) {
            switch (action.type) {
                case 'ADD_QUANTITY':
                    if (rm < q) {
                        alert(`the value can not exceed remaining funds ${state.Location} ${rm}`)
                        return state;
                    }
                    expense.budget = expense.budget + q;
                    break;
                case 'RED_QUANTITY':
                    if (!expense.budget) return state
                    expense.budget = Math.max(expense.budget - q, 0);
                    break;
                case 'DELETE_ITEM':
                    expense.budget = 0;
                    break;
            }
            setCartValue(state)
            return {
                ...state
            }
        }
    } else if (action.type === 'Budget') {
        const v = action.value
        if (v > 2000) {
            alert(`The value can not exceed remaining funds ${state.Location} ${rm}`)
        } else if (rm < state.Budget - v) {
            alert(`You can not reduce the Budget low than the spending`)
        } else if (v >= 0 && v !== state.Budget) {
            state.Budget = v
            return {...state}
        }
    } else if (action.type === 'CHG_LOCATION') {
        state.Location = action.payload
        return {...state}
    }
    return state;
}

// 1. Sets the initial state when the app loads
const initialState = {
    Budget: 2000,
    expenses: [
        {id: "Shirt", name: 'Shirt', budget: 500},
        {id: "Jeans", name: 'Jeans', budget: 300},
        {id: "Dress", name: 'Dress', budget: 400},
        {id: "Dinner set", name: 'Dinner set', budget: 600},
        {id: "Bags", name: 'Bags', budget: 200},
    ],
    Location: '$'
};
setCartValue(initialState)

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
    // 4. Sets up the app state. takes a reducer, and an initial state
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (
        <AppContext.Provider
            value={{
                ...state,
                dispatch,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};