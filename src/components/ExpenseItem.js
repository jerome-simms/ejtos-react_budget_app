import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = props => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id
        });
    };

    const increaseAllocation = name => {
        const expense = {
            name,
            cost: 10
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };
    
    const decreaseAllocation = name => {
        const expense = {
            name,
            cost: 10
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td>
                <button 
                    onClick={event => increaseAllocation(props.name)}
                    style={{borderRadius: '100%', color: '#fff', backgroundColor: '#4FAC5C', border: 'none', fontWeight: '900', paddingBottom: '2px', paddingTop: '0px'}}
                >
                    +
                </button>
            </td>
            <td>
                <button 
                    onClick={event => decreaseAllocation(props.name)}
                    style={{borderRadius: '100%', color: '#fff', backgroundColor: '#AF2419', border: 'none', fontWeight: '900', paddingBottom: '2px', paddingTop: '0px'}}    
                >
                    -
                </button>
            </td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    )
};

export default ExpenseItem;
