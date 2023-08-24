import React, { useReducer } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
    const currencies = [
        { symbol: '$', name: 'Dollar'},
        { symbol: '£', name: 'Pound'},
        { symbol: '€', name: 'Euro'},
        { symbol: '₹', name: 'Rupee'}
    ];

    return (
        <div className='alert alert-secondary'>
            <select style={{ backgroundColor: '#93E499', color: '#fff'}}>
                {/* TODO: the default value should be the current selected currency 
                I will temporarily hardcode a value for it*/}
                <option defualtValue disabled selected>Currency (£ Pound)</option>
                {currencies.map(currency => (
                    <option value={currency.symbol} style={{ backgroundColor: '#93E499'}}>{currency.symbol} {currency.name}</option>
                ))}
            </select>
        </div>
    );
};

export default CurrencyDropdown;