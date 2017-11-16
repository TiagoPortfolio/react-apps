import React from 'react';
// import './imageSelector.css';

const images = [
  {
    id: 1,
    url: "https://video-react.js.org/assets/logo.png"
  },
  {
    id: 2,
    url: "https://video-react.js.org/assets/logo.png"
  },
  {
    id: 3,
    url: "https://video-react.js.org/assets/logo.png"
  }
];

export default class ImageSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSelected: {
        id: 1,
        url: "https://video-react.js.org/assets/logo.png"
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
        <img src={this.state.imageSelected.url} />
        {this.state.selectorActive &&
          this.getImages(images)
        }
      </div>
    );
  }
}