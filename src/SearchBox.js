import React from 'react';
import {Motion, spring} from 'react-motion';

const hobbies = [
  {id: 1, name: 'Acting'},
  {id: 2, name: 'Basketball'},
  {id: 3, name: 'Board Games'},
  {id: 4, name: 'Chess'},
  {id: 5, name: 'Coding'},
  {id: 6, name: 'Cooking'},
  {id: 7, name: 'Dance'},
  {id: 8, name: 'Fashion'},
  {id: 9, name: 'Football'},
  {id: 10, name: 'Gardening'},
  {id: 11, name: 'Guitar'},
  {id: 12, name: 'Knitting'},
  {id: 13, name: 'Magic'},
  {id: 14, name: 'Movies'},
  {id: 15, name: 'Lego Building'},
  {id: 16, name: 'Music'},
  {id: 17, name: 'Paintball'},
  {id: 18, name: 'Painting'},
  {id: 19, name: 'Photography'},
  {id: 20, name: 'Piano'},
  {id: 21, name: 'Puzzles'},
  {id: 22, name: 'Read'},
  {id: 23, name: 'Singing'},
  {id: 24, name: 'Sports'},
  {id: 25, name: 'Traveling'},
  {id: 26, name: 'TV Shows'},
  {id: 27, name: 'Video Games'},
  {id: 28, name: 'Writing'},
];

export default class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hobbiesFound: hobbies,
      searchTerm: '',
      showHobbiesFound: false
    };

    this.getHobbies = this.getHobbies.bind(this);
    this.searchHobby = this.searchHobby.bind(this);
    this.handleHobby = this.handleHobby.bind(this);
    this.handleMouseClick = this.handleMouseClick.bind(this);
  }

  componentDidMount () {
    window.addEventListener('mousedown', this.handleMouseClick);
  }

  componentWillUnmount () {
    window.removeEventListener('mousedown', this.handleMouseClick);
  }

  handleMouseClick(e) {
    const showHobbiesFound = e.target.closest('.hobbySelector') !== null && this.state.showHobbiesFound;
    this.setState({showHobbiesFound});
  }

  getHobbies() {
    const handleHobby = this.handleHobby;
    const hobbiesList = this.state.hobbiesFound.map((hobby) => {
      return (
        <li key={hobby.id} onClick={() => handleHobby(hobby)}>
          {hobby.name}
          <span className="addHobby">
            +
          </span>
        </li>
      );
    });
    return hobbiesList;
  }

  searchHobby(e) {
    if (e.target.value.length) {
      const hobbiesSelected = this.props.hobbiesSelected;
      const hobbiesFound = hobbies.filter(hobby => {
        return hobby.name.toLowerCase().includes(e.target.value.toLowerCase()) && !hobbiesSelected.includes(hobby);
      })
      this.setState({
        hobbiesFound: hobbiesFound,
        searchTerm: e.target.value,
        showHobbiesFound: true,
      });
    } else {
      this.setState({
        hobbiesFound: [],
        searchTerm: e.target.value,
        showHobbiesFound: true,
      });
    }
  }

  handleHobby(hobbySelected) {
    const hobbiesSelected = this.props.hobbiesSelected;
    const hobbiesFound = this.state.hobbiesFound.filter(hobby => {
      return !hobby.name.toLowerCase().includes(hobbySelected.name.toLowerCase()) && !hobbiesSelected.includes(hobby);
    })
    this.setState({
      hobbiesFound
    });
    this.props.handleHobbySelector(hobbySelected);
  }

  render() {
    return (
      <Motion style={{x: spring(this.state.showHobbiesFound ? 1 : 0)}}>
        {({x}) =>
          <div className="hobbySelector" onBlur={this.handleBlur}>
            <input type="text" name="hobbies" placeholder="Add hobbies to your profile" value={this.state.searchTerm}
                  onFocus={this.searchHobby}
                  onChange={this.searchHobby}
            />
            <div className="hobbiesList" style={{
              opacity: x,
            }}>
              {this.state.showHobbiesFound &&
                <ul>
                  {this.getHobbies()}
                </ul>
              }
            </div>
          </div>
        }
      </Motion>
    );
  }
}