import React from 'react';

import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({posts}) => {

    const withoutNull = posts.filter(item => item !== null);
    
    const withoutUndefined = withoutNull.filter((item) => {
        const {...itemProps} = item;
        return itemProps.label !== undefined; 
    });

    const elements = withoutUndefined.map((item) => {          
        const {id, ...itemProps} = item;        
        return (
            <li key={id} className='list-group-item'>
                <PostListItem {...itemProps}/>
            </li>
        )
    });

    return (
        <ul className='app-list list-group'>
            {elements}
        </ul>
    )

}

export default PostList;