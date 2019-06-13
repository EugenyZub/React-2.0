import React from 'react';
import { Button, Input  } from 'reactstrap';
import styled from 'styled-components';

const PostAdd = styled.div`
    display: flex;
    margin-top: 20px;
    Input {
        width: auto;
        flex-grow: 1;
        margin-right: 3px;
    }
`;
const PostAddForm = ({onAdd}) => {
    return (
        <PostAdd>
            <Input
                type='text'
                placeholder='О чём вы думаете сейчас?'
                className='form-control new-post-label'
            />
            <Button
                outline
                type='submit'
                color='secondary'
                onClick={()=> onAdd('Hello')}>
                Добавить
            </Button>
        </PostAdd>
    )
}

export default PostAddForm;