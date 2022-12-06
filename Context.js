import { Button } from "bootstrap";
import React, { Component } from "react";
const MyContext = React.createContext();

class Context extends Component {
  state = {
    stage: 1,
    players: [],
    result: "",
  };
  handlePlayers = (newPlayer) => {
    this.setState((prevState) => ({
      players: [...prevState.players, newPlayer],
    }));
  };
  handleRemove = (idx) => {
    const newArray = this.state.players;
    newArray.splice(idx, 1);
    this.setState({ players: newArray });
  };
  handleNext = () => {
    const player = this.state.players;
    if (player < 2) {
      alert("Please enter at least two players");
    } else {
      this.setState(
        {
          stage: 2,
        },
        () => {
          setTimeout(() => {
            this.pickLooser();
          }, 2000);
        }
      );
    }
  };
  pickLooser = () => {
    this.setState({
      result:
        this.state.players[
          Math.floor(Math.random() * this.state.players.length)
        ],
    });
  };
  handleReset = () => {
    this.setState({
      stage: 1,
      players: [],
      result: "",
    });
  };
  handleNewLooser = () => {
    this.setState({
      result:
        this.state.players[
          Math.floor(Math.random() * this.state.players.length)
        ],
    });
  };
  render() {
    return (
      <div>
        <MyContext.Provider
          value={{
            state: this.state,
            addPlayers: this.handlePlayers,
            removePlayers: this.handleRemove,
            nextPlayers: this.handleNext,
            resetGame: this.handleReset,
            newLooser: this.pickLooser,
          }}
        >
          {this.props.children}
        </MyContext.Provider>
      </div>
    );
  }
}
export { MyContext, Context };
