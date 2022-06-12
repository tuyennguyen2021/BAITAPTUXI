import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {
  render() {
    let keyframe = `@keyframes randomItem${Date.now()}{
      0% {top:-50 px;}
      25% {top:100px;}
      50% {top:-50px;}
      75% {top:100px;}
      100% {top:0px;}
    }`;
    return (
      <div>
        <style>{keyframe}</style>
        <div className="things">
          <img
            src={this.props.computer.hinhAnh}
            style={{
              position: "absolute",
              animation: `randomItem${Date.now()} 0.5s`,
              width: 45,
              height: 45,
            }}
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          src="./img/playerComputer.png"
          alt=""
          style={{ width: 200, height: 200 }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    computer: state.tuxiReducer.computer,
  };
};
export default connect(mapStateToProps)(Computer);
