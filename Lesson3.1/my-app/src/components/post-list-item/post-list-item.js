import React from 'react';
import './post-list-item.css';

const PostListItem = () => {
    let today = new Date(),
        day = today.getDate(),
        month = today.getMonth()+1;
    if (day < 10){
        day = `0${day}`;
    }

    if (month < 10){
        month = `0${month}`;
    }

    let date = `${day}.${month}.${today.getFullYear()}`;

    return (
        <li className='app-list-item d-flex justify-content-between'>
            <span className='app-list-item-label'>
                Hello World!
            </span>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='post-date'>
                    {date}
                </div>
                <button  type='button'
                         className='btn-star btn-sm'>
                    <i className='fa fa-star'></i>
                </button>
                <button  type='button'
                         className='btn-trash btn-sm'>
                    <i className='fa fa-trash-o'></i>
                </button>
                <i className='fa fa-heart'></i> 
            </div>
        </li>
    )
}

export default PostListItem;