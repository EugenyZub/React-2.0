import React, {Component} from 'react';
import './popup.css';

export default class Popup extends Component {
    constructor (props) {
        super(props);
        this.onConfirmEdit = this.onConfirmEdit.bind(this);
    }

    onConfirmEdit() {
        console.log(1111);
        // this.setState(({like}) => ({
        //     like: !like
        // }));
    }
    //let textt = document.querySelector('#textarea');
    render() {
        const {label} = this.props;
        return (
            <div className='overlay'>
                <div className="popup">
                    <form>
                        <div className="form-group">
                            <label className='form-label'>Редактирование поста</label>
                            <input 
                                type="textarea" 
                                id='textarea' 
                                className="form-control" 
                                aria-describedby="emailHelp" 
                                placeholder=''>
                            </input>
                        </div>
                        <button 
                            type="submit" 
                            onClick={this.onConfirmEdit}
                            className="btn btn-primary">
                                Submit
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}