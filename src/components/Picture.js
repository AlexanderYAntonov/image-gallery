import React from "react";
import PropTypes from "prop-types";
import "../App.css";

class Picture extends React.Component {
	handleDeleteClick = e => {
		e.preventDefault();
		const { id } = this.props.data;

		this.props.onClickDel(id);
	};

	render() {
		const { imageTitle, imageURL, visible } = this.props.data;
		return (
			visible && (
				<div className="picture">
					<div className="picture__title">
						<span>{imageTitle}</span>
						<a href="#del" onClick={this.handleDeleteClick}>
							Delete
						</a>
					</div>
					<div className="picture__image">
						<img className="picture__img" src={imageURL} alt="" />
					</div>
				</div>
			)
		);
	}
}

Picture.propTypes = {
	onClickDel: PropTypes.func.isRequired,
	data: PropTypes.shape({
		id: PropTypes.number.isRequired,
		imageTitle: PropTypes.string.isRequired,
		imageURL: PropTypes.string.isRequired
	})
};

export { Picture };
