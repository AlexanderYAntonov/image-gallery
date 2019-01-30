import React, { Component } from "react";
import "./App.css";
import { Add } from "./components/Add";
import { Gallery } from "./components/Gallery";

let data = [
	{
		id: 1,
		imageTitle: "First image",
		imageURL:
			"https://avatars.mds.yandex.net/get-pdb/1244951/451ed7ec-71d2-4afe-b0c9-4355382154e7/s1200",
		visible: true
	},
	{
		id: 2,
		imageTitle: "Second image",
		imageURL:
			"https://avatars.mds.yandex.net/get-pdb/70729/36ce9361-0c9a-4120-afcf-e461e99dc96b/s1200",
		visible: true
	},
	{
		id: 3,
		imageTitle: "Third image",
		imageURL:
			"https://avatars.mds.yandex.net/get-pdb/28866/0c7f0448-9665-48ae-bfb0-66e4a2991541/s1200",
		visible: true
	}
];

class App extends Component {
	state = {
		isShowingPopup: false
	};

	handleOnClickNew = () => {
		const { isShowingPopup } = this.state;
		this.setState({ isShowingPopup: !isShowingPopup });
	};

	closeAddPopup = () => {
		this.setState({ isShowingPopup: false });
	};

	addNewImage = obj => {
		this.setState({ isShowingPopup: false });
		data.unshift({
			id: obj.id,
			imageTitle: obj.imageTitle,
			imageURL: obj.imageURL,
			visible: true
		});
	};

	deleteImage = id => {
		for (let i = 0; i < data.length; i++)
			if (data[i].id === id) {
				data[i].visible = false;
				this.forceUpdate();
				return;
			}
	};

	render() {
		const { isShowingPopup } = this.state;
		return (
			<div className="App">
				{!isShowingPopup && (
					<Gallery
						data={data}
						onClickNew={this.handleOnClickNew}
						onClickDelete={this.deleteImage}
					/>
				)}
				{isShowingPopup && (
					<Add
						onClickClose={this.closeAddPopup}
						onClickAdd={this.addNewImage}
					/>
				)}
			</div>
		);
	}
}

export default App;
