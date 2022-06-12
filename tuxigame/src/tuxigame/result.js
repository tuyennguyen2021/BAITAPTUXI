import React, { Component } from "react";
import { connect } from "react-redux";

class Result extends Component {
  render() {
    return (
      <div>
        <div>
          <h1 className="text-warning display-4">{this.props.ketQua}</h1>
        </div>
        <div className="text-success display-4">
          Số bàn thắng:{" "}
          <span className="text-warning">{this.props.soBanThang}</span>
        </div>
        <div className="text-success display-4">
          Số bàn chơi:{" "}
          <span className="text-warning">{this.props.soBanChoi}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ketQua: state.tuxiReducer.ketQua,
    soBanThang: state.tuxiReducer.soBanThang,
    soBanChoi: state.tuxiReducer.soBanChoi,
  };
};

export default connect(mapStateToProps)(Result);
