import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import Popup from '../popup';

import './app.css';

const App = () => {

    const data = [
        5,
        {label: 'Going to learn React', important: false, id: 'wewq'},
        {label: 'That is so good', important: false, id: 'dsd'},
        {label: 'I neeed a break...', important: false, id: 'wqfu'}
    ];


    return(
        <div>
            <div className='app'>
                <AppHeader/>
                <div className='search-panel d-flex'>
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList posts={data}/>
                <PostAddForm/>
            </div>
            <Popup/>
        </div>
        
    )
}

export default App;