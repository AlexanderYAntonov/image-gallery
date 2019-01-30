import React from "react";
import PropTypes from "prop-types";
import { Picture } from "./Picture";
import "../App.css";

class Gallery extends React.Component {
	/*constructor (props) {
        super(props);
    }  */

	handleOnClickDelete = id => {
		this.props.onClickDelete(id);
	};

	renderPictures = () => {
		const { data } = this.props;
		const handleOnClickDel = this.handleOnClickDelete;

		let picturesTemplate = null;

		if (data.length) {
			picturesTemplate = data.map(function(item) {
				return (
					<Picture
						key={item.id}
						data={item}
						onClickDel={handleOnClickDel}
					/>
				);
			});
		} else {
			picturesTemplate = <p>No pictures</p>;
		}
		return picturesTemplate;
	};

	render() {
		return (
			<React.Fragment>
				<div className="gallery__header">
					<div className="gallery__black_circle" />
					<div className="gallery__header_title">
						<p>Images</p>
					</div>
				</div>
				<div className="gallery__main">
					<div
						className="gallery__add_btn"
						onClick={this.props.onClickNew}
					>
						NEW
					</div>
					<div className="gallery__pictures_list">
						{this.renderPictures()}
					</div>
				</div>
			</React.Fragment>
		);
	}
}

Gallery.propTypes = {
	onClickNew: PropTypes.func.isRequired,
	onClickDelete: PropTypes.func.isRequired
};

export { Gallery };
