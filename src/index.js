import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// function Square(props) {
//   return (
//     <button className="square" onClick={props.onClick}>
//       {props.value}
//     </button>
//   );
// }

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }

// class Board extends React.Component {
//   renderSquare(i) {
//     return (
//       <Square
//         value={this.props.squares[i]}
//         onClick={() => this.props.onClick(i)}
//       />
//     );
//   }

//   render() {
//     const board = [];
//     var squareNumber = 0;
//     for (var i = 1; i <= 3; i++) {
//       let cells = [];
//       for (var x = 1; x <= 3; x++) {
//         cells.push(this.renderSquare(squareNumber));
//         squareNumber++;
//       }
//       board.push(React.createElement(
//         'div',
//         {className: "board-row"},
//         cells
//       ));
//     }

//     return (
//       React.createElement(
//         'div',
//         {},
//         board
//       )
//     );
//   }
// }

// class Game extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       history: [{
//         squares: Array(9).fill(null),
//       }],
//       stepNumber: 0,
//       xIsNext: true,
//       inputValue: '',
//     };
//   }


//   handleClick(i) {
//     const history = this.state.history.slice(0, this.state.stepNumber + 1);
//     const current = history[history.length - 1];
//     const squares =  current.squares.slice();
//     if (calculateWinner(squares) || squares[i]) {
//       return;
//     }
//     squares[i] = this.state.xIsNext ? 'X' : 'O';
//     this.setState({
//       history: history.concat([{
//         squares: squares,
//       }]),
//       stepNumber: history.length,
//       xIsNext: !this.state.xIsNext,
//     });
//   }

//   handleInputChange(e) {
//     const newInputValue = e.target.value;
//     this.setState({
//       inputValue: newInputValue,
//     })
//   }

//   jumpTo(move) {
//     this.setState({
//       stepNumber: move,
//       xIsNext: (move % 2) === 0,
//     })
//   }

//   render() {
//     const history = this.state.history;
//     const current =  history[this.state.stepNumber];
//     const winner = calculateWinner(current.squares);

//     const moves = history.map((step, move) => {
//       let desc = move ? 'Go to move #' + move : 'Go to game start';
//       desc = this.state.stepNumber == move ? <b>{desc}</b> : desc;

//       return (
//         <li key={move}>
//           <button onClick={() => this.jumpTo(move)}>
//             {desc}
//           </button>
//         </li>
//       );
//     });

//     let status;
//     if (winner) {
//       status = 'Winner: ' + winner;
//     } else {
//       status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
//     }

//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board
//             squares={current.squares}
//             onClick={(i) => this.handleClick(i)}
//           />
//         </div>
//         <div className="game-info">
//           <div>{status}</div>
//           <ol>{moves}</ol>
//         </div>
//       </div>
//     );
//   }
// }

// FORM ========================================
// import './index.css';
import Profile from './Profile';
import Form from './Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      intro: '',
      image: {
        id: 1,
        url: "https://video-react.js.org/assets/logo.png"
      }
    };
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({
      [e.target.name]: value
    });
  }

  handleImageChange(image) {
    // const value = e.target.value;
    // this.setState({
    //   [e.target.name]: value
    // });
  }

  render() {
    return (
      <div className="app">
        <div className="appTitle">
          <h1>Create Your Profile</h1>
        </div>
        <div className="appContent">
          <Profile globalState={this.state}/>
          <Form globalState={this.state}
                formHandler={this.handleChange.bind(this)}
                onImageChange={(i) => this.handleImageChange(i)}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
