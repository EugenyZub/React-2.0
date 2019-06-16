import React, {Component} from 'react';
import idGenerator from 'react-id-generator';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                // 5,
                // [],
                // null,
                // undefined,
                {label: 'Going to learn React', important: true, like: false, id: idGenerator()},
                {label: 'That is so good', important: false, like: false, id: idGenerator()},
                {label: 'I neeed a break...', important: false, like: false, id: idGenerator()}
            ]     
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
    }
    
    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

            return {
                data: newArr
            };
        });
    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: idGenerator()
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            };
        });
    }

    toggle(id, toggleOn) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id  === id);

            const old = data[index];
            if(toggleOn === 'like') {
                const newItem = {...old, like: !old.like};
                const newArr = [ ...data.slice(0, index), newItem, ...data.slice(index + 1)];
                return {
                    data: newArr
                }
            }

            if(toggleOn === 'important') {
                const newItem = {...old, important: !old.important};
                const newArr = [ ...data.slice(0, index), newItem, ...data.slice(index + 1)];
                return {
                    data: newArr
                }
            } 
        });
    }

    onToggleImportant(id) {
        const toggleOn ='important';
        this.toggle(id, toggleOn);
    }
    
    onToggleLiked(id) {
        const toggleOn ='like';
        this.toggle(id, toggleOn);
    }

    render() {
        const {data} = this.state;
    const liked = data.filter(item => item.like).length;
    const allPosts = data.length;

        return(
            <AppBlock>
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}/>
                <div className='search-panel d-flex'>
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList 
                    posts={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                />
                <PostAddForm
                    onAdd={this.addItem}/>
            </AppBlock>            
        )
    }
}