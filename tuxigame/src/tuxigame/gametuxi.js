import React, { Component } from "react";
import "./buble.css";
import Player from "./player";
import Computer from "./computer";
import Result from "./result";
import { connect } from "react-redux";
class Gametuxi extends Component {
  render() {
    return (
      <div className="bg-game">
        <div className="row text-center mt-5">
          <div className="col-4">
            <Player />
          </div>
          <div className="col-4">
            <Result />
            <button
              className="btn btn-success"
              onClick={() => {
                this.props.playGame();
              }}
            >
              play game
            </button>
          </div>
          <div className="col-4">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      let randomComputerItem = setInterval(() => {
        let action = {
          type: "RAN_DOM",
        };
        dispatch(action);
        count++;
        if (count > 10) {
          clearInterval(randomComputerItem);
          dispatch({
            type: "END_GAME",
          });
        }
      }, 100);
    },
  };
};

export default connect(null, mapDispatchToProps)(Gametuxi);
