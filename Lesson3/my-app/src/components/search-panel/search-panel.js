import React from 'react';
import './searc-panel.css';

const SearchPanel = () => {
 return (
    <input
        className='form-control search-input'
        type='text'
        placeholder='Поиск по записям'
    />     
 )
}

export default SearchPanel;