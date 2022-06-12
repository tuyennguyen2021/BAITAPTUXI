const stateDefaults = {
  mangDatCuoc: [
    { ma: "keo", hinhAnh: "./img/keo.png", datCuoc: false },
    { ma: "bua", hinhAnh: "./img/bua.png", datCuoc: true },
    { ma: "bao", hinhAnh: "./img/bao.png", datCuoc: false },
  ],
  ketQua: "im iron man, i love you 3000",
  soBanThang: 0,
  soBanChoi: 0,
  computer: {
    ma: "keo",
    hinhAnh: "./img/keo.png",
  },
};

export const tuxiReducer = (state = stateDefaults, action) => {
  switch (action.type) {
    case "CHOSEN": {
      let mangCuocNew = [...state.mangDatCuoc];
      mangCuocNew = mangCuocNew.map((item, index) => {
        if (item.ma === action.chosen) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });
      state.mangDatCuoc = mangCuocNew;
      console.log(state.mangDatCuoc);
      return { ...state };
    }
    case "RAN_DOM": {
      let indexRandom = Math.floor(Math.random() * 3);
      let quanCuocRandom = state.mangDatCuoc[indexRandom];
      state.computer = quanCuocRandom;

      return { ...state };
    }
    case "END_GAME": {
      let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
      let computer = state.computer;
      switch (player.ma) {
        case "keo":
          if (computer.ma === "keo") {
            state.ketQua = "Hoa nhau!!!";
          } else if (computer.ma === "bua") {
            state.ketQua = "thua goi!!!";
          } else {
            state.soBanThang += 1;
            state.ketQua = "im iron man, i love you 3000";
          }
          break;

        case "bua":
          if (computer.ma === "keo") {
            state.soBanThang += 1;
            state.ketQua = "im iron man, i love you 3000";
          } else if (computer.ma === "bua") {
            state.ketQua = "Hoa nhau!!!";
          } else {
            state.ketQua = "thua goi!!!";
          }
          break;
        case "bao":
          if (computer.ma === "keo") {
            state.ketQua = "thua goi!!!";
          } else if (computer.ma === "bua") {
            state.soBanThang += 1;
            state.ketQua = "im iron man, i love you 3000";
          } else {
            state.ketQua = "Hoa nhau!!!";
          }
          break;

        default:
          state.ketQua = "im iron man, i love you 3000";
          break;
      }
      state.soBanChoi += 1;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default tuxiReducer;
