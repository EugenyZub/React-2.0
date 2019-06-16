import React from 'react';

import PostListItem from '../post-list-item';
import { ListGroup, ListGroupItem} from 'reactstrap';
import './post-list.css';


const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

    const newArr = posts.filter(item => item !== null);

    const elements = posts.map((item) => {

        //if(item != null) {
            const {id, ...itemProps} = item;

            if(itemProps.label !== undefined) {            
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
            }
        //}
        
    });

    return (
        <ListGroup className='app-list'>
            {elements}
        </ListGroup>
    )

}

export default PostList;