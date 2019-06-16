import React from 'react';

import PostListItem from '../post-list-item';
import { ListGroup, ListGroupItem} from 'reactstrap';
import './post-list.css';


const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

    const withoutNull = posts.filter(item => item !== null);
    
    const withoutUndefined = withoutNull.filter((item) => {
        const {...itemProps} = item;
        return itemProps.label !== undefined; 
    });

    const elements = withoutUndefined.map((item) => {
        const {id, ...itemProps} = item;   
        return (
            <ListGroupItem key={id} className='list-group-item'>
                <PostListItem 
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)}
                />
            </ListGroupItem>
        )     
    });

    return (
        <ListGroup className='app-list'>
            {elements}
        </ListGroup>
    )

}

export default PostList;