import React from 'react';
import PropTypes from 'prop-types';
import {Picture} from './Picture';
import '../App.css';

class Gallery extends React.Component {
    constructor (props) {
        super(props);
    }    
    
    renderPictures = () => {
       const {data} = this.props;

       let picturesTemplate = null;

       if (data.length){

           picturesTemplate = data.map(function(item) {
               return <Picture key={item.id} data={item}/>
           } )

        } else {
            picturesTemplate = <p>No pictures</p>
        }
        return picturesTemplate;
    }

    /*showPopup = () => {
         this.props.onClickNew();      
    } */                                 
                                       
    render (){
        const {data} = this.props;

        return (
            <React.Fragment>
                <div className='gallery__header'>
                    <div className='gallery__black_circle'></div>
                    <div className='gallery__header_title'>
                        <p>Images</p>
                    </div>
                </div>
                <div className='gallery__main'>
                    <div className='gallery__add_btn' 
                            onClick={this.props.onClickNew}>
                            NEW
                    </div> 
                    <div className='gallery__pictures_list'>
                        {this.renderPictures()}
                    </div>
                </div>
           </React.Fragment>
        )
    }


}
/*
News.propTypes = {
        someNews: PropTypes.array.isRequired
}*/
Gallery.propTypes = {
    onClickNew: PropTypes.func.isRequired
}   
    
export {Gallery};