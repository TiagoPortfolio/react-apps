import React from 'react';
// import './imageSelector.css';

const images = [
  {
    id: 1,
    url: "grey_background.jpg"
  },
  {
    id: 2,
    url: "grey_background.jpg"
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
      imageSelected: {
        id: 1,
        url: "grey_background.jpg"
      },
      selectorActive: false,
    };
  }

  getImages(images) {
    const selectElement = images.map((image) => {
      let imageActive = image.id == this.state.imageSelected.id ? 'active' : '';
      return (
        <img key={image.id} src={image.url} className={imageActive} onClick={() => this.props.onImageChange(image)}/>
      );
    });
    return selectElement;
  }

  handleImageSelector() {
    this.setState({
      selectorActive: !this.state.selectorActive,
    });
  }

  render() {

    return (
      <div className="imageSelector" onClick={this.handleImageSelector.bind(this)}>
        {!this.state.selectorActive &&
          <div>
            <img className="active" src={this.state.imageSelected.url} />
            <span className="arrow-down"></span>
          </div>
        }
        {this.state.selectorActive &&
            this.getImages(images)
        }
      </div>
    );
  }
}