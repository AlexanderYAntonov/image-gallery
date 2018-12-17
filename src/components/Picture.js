import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class Picture extends React.Component {
    /*state = {
        visible: false
    }

    handleReadMoreClick = (e) => {
        e.preventDefault();
        this.setState({visible: true});
    }*/

    render (){
        const { imageTitle, imageURL } = this.props.data;
        return (
            <div className='picture'>
                <div className='picture__title'>
                    <p>{imageTitle}</p>
                </div>
                <div className='picture__image'>
                    <img className='picture__img' src={imageURL} />
                </div>
            {/* {
                    !this.state.visible && <a href='#readmore' onClick={this.handleReadMoreClick} className='news__readmore'>Подробнее</a>
                }
                {
                    this.state.visible && <p className='news__big-text'>{bigText}</p>
                }*/}
            </div>
        )
    }
}

Picture.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        imageTitle: PropTypes.string.isRequired,            
        imageURL: PropTypes.string.isRequired        
    })
}

export {Picture};