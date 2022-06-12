import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  renderItem = () => {
    return this.props.mangDatCuoc.map((item, index) => {
      let border = {};
      if (item.datCuoc) {
        border = { border: "3px solid orange" };
      }
      return (
        <div className="col-4" key={index}>
          <button
            style={border}
            onClick={() => {
              this.props.datCuoc(item.ma);
            }}
          >
            <img src={item.hinhAnh} style={{ width: 45, height: 45 }} />
          </button>
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <div className="things">
          <img
            src={
              this.props.mangDatCuoc.find((item) => item.datCuoc === true)
                .hinhAnh
            }
            style={{ width: 45, height: 45 }}
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          src="./img/player.png"
          alt=""
          style={{ width: 150, height: 150 }}
        />
        <div className="row">{this.renderItem()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangDatCuoc: state.tuxiReducer.mangDatCuoc,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (chosen) => {
      let action = {
        type: "CHOSEN",
        chosen,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
