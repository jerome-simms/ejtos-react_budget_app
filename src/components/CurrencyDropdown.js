import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const CurrencyDropdown = () => {
    const { dispatch, currency } = useContext(AppContext);

    const currencies = [
        { symbol: '$', name: 'Dollar'},
        { symbol: '£', name: 'Pound'},
        { symbol: '€', name: 'Euro'},
        { symbol: '₹', name: 'Rupee'}
    ];

    const handleSelectChange = event => {
        // get the value of the clicked on option
        // then dispatch an event to update the currency in the store
        const newCurrency = event.target.value;
        dispatch({
            // change the name property to type
            type: 'CHG_CURRENCY',
            payload: newCurrency
        });
    };

    const currentCurrency = currencies.find(curCurrency => curCurrency.symbol === currency);
    const { name: curName,  symbol: curSymbol } = currentCurrency;

    return (
        <div className='alert alert-secondary'>
            <select onChange={handleSelectChange} style={{ backgroundColor: '#93E499', color: '#fff'}}>
                <option defualt='true' disabled selected>Currency ({curSymbol} {curName})</option>
                {currencies.map(currency => (
                    <option key={currency.name} value={currency.symbol} style={{ backgroundColor: '#93E499'}}>{currency.symbol} {currency.name}</option>
                ))}
            </select>
        </div>
    );
};

export default CurrencyDropdown;