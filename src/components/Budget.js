import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, remaining, expenses } = useContext(AppContext);

    const [currentBudget, setCurrentBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleInputChange = (e) => {
        setCurrentBudget(e.target.value);
        if (e.target.value > remaining || e.target.value > 20000) {
            alert(`The value cannot exceed the remaining funds £${remaining}`);
            return;
        }
        if (e.target.value < totalExpenses) {
            alert(`You cannot reduce the budget to lower than the spending`);
            return;
        }
    }

    return (
        <div className='alert alert-secondary'>
            {/* change the budget to be an input with the value
            set to the value of budget */}
            <span>Budget: £</span>
            <input 
                type='number'
                step='10'
                value={currentBudget} 
                onChange={handleInputChange} 
                max='20000'
            />
        </div>
    );
};

export default Budget;
