import React from 'react';
import {Motion, spring} from 'react-motion';

const hobbies = [
  {id: 1, name: 'Sports'},
  {id: 2, name: 'Cooking'},
  {id: 3, name: 'Code'},
  {id: 4, name: 'Music'},
  {id: 5, name: 'Guitar'},
  {id: 6, name: 'Video Games'},
  {id: 7, name: 'Read'},
  {id: 8, name: 'Chess'},
  {id: 9, name: 'Football'},
  {id: 10, name: 'Basketball'},
  {id: 11, name: 'Acting'},
  {id: 12, name: 'Writing'},
  {id: 13, name: 'Dance'},
  {id: 14, name: 'Fashion'},
  {id: 15, name: 'Movies'},
  {id: 16, name: 'Board Games'},
  {id: 17, name: 'Gardening'},
  {id: 18, name: 'Puzzles'},
  {id: 19, name: 'Knitting'},
  {id: 20, name: 'Lego Building'},
  {id: 21, name: 'Magic'},
  {id: 22, name: 'Painting'},
  {id: 23, name: 'Singing'},
  {id: 24, name: 'TV Shows'},
  {id: 25, name: 'Paintball'},
  {id: 26, name: 'Photography'},
  {id: 27, name: 'Traveling'},
];

export default class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hobbies: this.props.hobbiesSelected,
      searchTerm: this.props.hobbieSearch,
      showHobbiesFound: false
    };

    this.searchHobby = this.searchHobby.bind(this);
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

  searchHobby(e) {
    const hobbiesFound = hobbies.filter(hobby => {
      return hobby.includes(e.target.value);
    })
    this.setState({
      hobbies: hobbiesFound,
    });
  }

  handleBlur() {
    this.setState({
      showHobbiesFound: false,
    });
  }

  render() {
    return (
      <input type="text" name="hobbies" required placeholder="Add hobbies to your profile" onChange={this.searchHobby} onBlur={this.handleBlur}/>
      <Motion style={{x: spring(this.state.selectorActive ? 1 : 0)}}>
        {({x}) =>
          // children is a callback which should accept the current value of
          // `style`
          <div className="hobbySelector" style={{
            maxWidth: x === 0 ? 140 : 1000,
            maxHeight: x === 0 ? 100 : 1000
          }}>
            {!this.state.selectorActive &&
              <div className="activeImage">
                <img className="active" src={this.state.imageSelected.url} onClick={this.openImageSelector} />
                <span className="arrow-down" onClick={this.openImageSelector}></span>
              </div>
            }
            <div className="availableImages" style={{
              opacity: `${x}`,
            }}>
              {this.state.hobbies}
            </div>
          </div>
        }
      </Motion>
    );
  }
}