/**
 * Creating the Carrousel component (Carrousel for photos in Fiche Logement Page)
 * @param  { url }      Style : importing the CSS Style for Gallery component
 * @param  { url }      Illustrations : icons for left and right arrow of Carrousel
 * @param  { react }    React : Import of react for the class method of construction
 * @return { function } Function : Creating the Carrousel Component with props (from backend call) and state (image index position from the raltive array in back)
 */

import "../assets/styles/componentsStyles/Carrousel.css";
import VectorG from "../assets/images/VectorG.svg";
import VectorD from "../assets/images/VectorD.svg";
import React from "react";

/* 
	~ STATE explanations ~
	index : initializing at "0"
	min   : lowest possible position of the image counter
	max   : highest possibility of image in carrousel from listening the image array in backend
	compteur value : for creating the Carrousel status (position of image)

***

 ~ How it works ~
 - Click on left button for decrementation of state (index position in array)
 - Click on right button for incrementation of state (index position in array)
 - Carrousel Status is the reflect of image position in array combine with previous tools
	*/

class Carrousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			index: 0,
			min: 0,
			max: props.pictures.length - 1,
			compteurValue: 1,
		};
	}

	pictureNext() {
		if (this.state.index < this.state.max) {
			this.setState((state) => ({
				index: state.index + 1,
				compteurValue: state.compteurValue + 1,
			}));
		} else {
			this.setState(() => ({ index: 0, compteurValue: 1 }));
		}
	}

	picturePrevious() {
		if (this.state.index > this.state.min) {
			this.setState((state) => ({
				index: state.index - 1,
				compteurValue: state.compteurValue - 1,
			}));
		} else {
			this.setState((state) => ({
				index: (state.index = this.props.pictures.length - 1),
				compteurValue: (state.compteurValue = this.props.pictures.length),
			}));
		}
	}

	render() {
		return (
			<div className="Carrousel">
				<img
					src={this.props.pictures.at(this.state.index)}
					alt="VacationPlace"
					className="Carrousel--image"
				/>

				<p className="Carrousel__status">
					{this.state.compteurValue}/{this.props.pictures.length}
				</p>

				{this.state.max > 1 ? (
					<div className="Carrousel__buttons">
						<button
							onClick={this.picturePrevious.bind(this)}
							className="Carrousel__buttons--vectorG"
						>
							<img
								src={VectorG}
								alt="vectorG"
								className="Carrousel__buttons--icon"
							/>
						</button>
						<button
							onClick={this.pictureNext.bind(this)}
							className="Carrousel__buttons--vectorD"
						>
							<img
								src={VectorD}
								alt="vectorD"
								className="Carrousel__buttons--icon"
							/>
						</button>
					</div>
				) : null}
			</div>
		);
	}
}

export default Carrousel;
