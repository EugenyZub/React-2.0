import React, {Component} from 'react';
import './post-list-item.css';

export default class PostListItem extends Component {
    constructor (props) {
        super(props);
        this.state = {
            important: false,
            like: false,
            edit: false
        };
        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this);
        this.onEdit = this.onEdit.bind(this);
    }

    onImportant() {
        this.setState(({important}) => ({
            important: !important
        }));
    }

    onLike() {
        this.setState(({like}) => ({
            like: !like
        }));
    }
    onEdit() {
        this.setState(({edit}) => ({
            edit: !edit
        }));
    }

    render () {
        const {label} = this.props;
        const {important, like, edit} = this.state;
        let classNames = 'app-list-item d-flex justify-content-between',
            overlay = document.querySelector('.overlay');

        if (important) {
            classNames +=' important';
        }
        if (like) {
            classNames +=' like';
        }
        if (edit) {
            overlay.style.display = 'block';
            classNames +=' edit';
            document.body.style.overflow = 'hidden';
            document.querySelector('#textarea').placeholder =  label;
            console.log(document.querySelector('#textarea').textContent)
        }

        return (
            <div className={classNames}>
                <span className='app-list-item-label'
                onClick={this.onLike}>
                    {label}
                </span>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type='button'
                            className='btn-edit btn-sm'
                            onClick={this.onEdit}>
                        <i className='fa fa-edit'></i>
                    </button>
                    <button type='button'
                            className='btn-star btn-sm'
                            onClick={this.onImportant}>
                        <i className='fa fa-star'></i>
                    </button>
                    <button type='button'
                            className='btn-trash btn-sm'>
                        <i className='fa fa-trash-o'></i>
                    </button>
                    
                    <i className='fa fa-heart'></i> 
                </div>
            </div>
        )
    }
}