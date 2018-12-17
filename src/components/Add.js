import React from 'react';
import PropTypes from 'prop-types';

class Add extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imageTitle: '',
            imageURL: '',
            titleStatus: true,
            URLstatus: true
        };
    }
    
    addData = () => {
        //console.log('validate data & add to gallery array');
        let error = 0;
        let {imageTitle, imageURL} = this.state;
        imageTitle = imageTitle.trim();
        imageURL = imageURL.trim();
        
        if (!imageTitle) {
            this.setState({titleStatus: false});
            error += 1;
        } else {
            this.setState({titleStatus: true});
        }
        
        if (!imageURL || !/http*:*.*/.test(imageURL)) {
            this.setState({URLstatus: false});
            error += 2;
        } else {
            this.setState({URLstatus: true});
        }
        if (error > 0) return false;
        
        //now add new image
        const id = new Date().valueOf();
        this.props.onClickAdd({imageTitle, imageURL, id});
    }

    /*validate = (event) => {
        let {imageTitle, imageURL} = this.state;
        imageTitle = imageTitle.trim();
        imageURL = imageURL.trim();
        
        return imageTitle && imageURL;
    }*/

    handleChange = (event) => {
        const {id, value} = event.currentTarget;
        console.log(event.currentTarget)
        console.log(id, value);
        this.setState({[id]: value});
        console.log(this.state);
    }
/*
    handleCheckChange = (event) => {
        this.setState({isChecked:event.currentTarget.checked});
    }

    showInputValue = (e) => {
        e.preventDefault();
        const {author, text, bigText} = this.state;
        //alert(this.state.author+'\n'+this.state.text);
        const id = new Date().valueOf();
        this.props.onAddNews({author, text, bigText, id})
    }
*/
    render() {
        const {imageTitle, imageURL, titleStatus, URLstatus} = this.state;
        return (
            <div className='add'>
                <div className='add__form'>
                    <div className='add__header'>
                        New image
                    </div>
                    <input 
                        type='text'
                        id = 'imageTitle'
                        className={(titleStatus && 'add__title') || (!titleStatus && 'add__title_error')}
                        value = {imageTitle}
                        onChange = {this.handleChange}
                        placeholder='Title'
                    />
                    <input 
                        type='text'
                        id = 'imageURL'
                        className={(URLstatus && 'add__URL') || (!URLstatus && 'add__URL_error')}
                        value = {imageURL}
                        onChange = {this.handleChange}
                        placeholder='URL' />
                    <div className='add__buttons'>
                        <div
                            className='add__close_btn' 
                            onClick={this.props.onClickClose}>
                            CLOSE
                        </div> 
                        <div
                            className='add__add_btn' 
                            onClick={this.addData}>
                            ADD
                        </div>     
                    </div>
                </div>
            </div>
        )
    }

}

Add.propTypes = {
    onClickClose: PropTypes.func.isRequired,
    onClickAdd: PropTypes.func.isRequired,
}

export {Add};