import React, {Component} from 'react';
import { Button, Input, Form  } from 'reactstrap';

import './post-add.css';
export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onValueChange(e) {
        this.setState({
            text: e.target.value
        });     
    }

    onSubmit(e) {
        console.log(this.state.text)
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        });
    }

    render() {
        return (
            <Form 
                className='post-add-form d-flex'
                onSubmit={this.onSubmit}>
                <Input
                    type='text'
                    placeholder='О чём вы думаете сейчас?'
                    className='form-control post-add-form-input new-post-label'
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <Button
                    outline
                    type='submit'
                    color='secondary'
                    >
                    Добавить
                </Button>
            </Form>
        )
    }   
}