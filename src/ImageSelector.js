import React from 'react';
// import './imageSelector.css';

const images = [
  {
    id: 1,
    url: "grey_background.jpg"
  },
  {
    id: 2,
    url: "img1.jpg"
  },
  {
    id: 3,
    url: "grey_background.jpg"
  },
  {
    id: 4,
    url: "grey_background.jpg"
  },
  {
    id: 5,
    url: "grey_background.jpg"
  },
  {
    id: 6,
    url: "grey_background.jpg"
  }
];

export default class ImageSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSelected: this.props.imageSelected,
      selectorActive: false,
    };

    this.openImageSelector = this.openImageSelector.bind(this);
    this.handleImageSelector = this.handleImageSelector.bind(this);
  }

  getImages(images) {
    const selectElement = images.map((image) => {
      let imageActive = image.id === this.state.imageSelected.id ? 'active' : '';
      return (
        <img key={image.id} src={image.url} className={imageActive} onClick={() => this.handleImageSelector(image)}/>
      );
    });
    return selectElement;
  }

  openImageSelector() {
    this.setState({
      selectorActive: !this.state.selectorActive,
    });
  }

  handleImageSelector(image) {
    this.setState({
      imageSelected: image,
    });
    this.props.onImageChange(image);
  }

  render() {

    return (
      <div className="imageSelector">
        {!this.state.selectorActive &&
          <div>
            <img className="active" src={this.state.imageSelected.url} />
            <span className="arrow-down" onClick={this.openImageSelector}></span>
          </div>
        }
        {this.state.selectorActive &&
            this.getImages(images)
        }
      </div>
    );
  }
}