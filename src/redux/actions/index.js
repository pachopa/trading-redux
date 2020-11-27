import { GET_CHARTS, UPDATE_CHARTS } from "../constants";
import { chartsInfo } from "../../fixtures/chartInfo";

export const createCharts = (randomNumber) => async (dispatch) => {
  console.log("chartsInfo:", chartsInfo);

  try {
    //   if (randomNumber) {
    //     dispatch({});
    //   } else {
    dispatch({ type: GET_CHARTS, payload: chartsInfo });
    // }
    // console.log("actions folder", chartsInfo);

    // const initialChartsInfo = chartsInfo.map((chartInfo) => ({
    //   type: GET_CHARTS,
    //   payload: chartInfo,
    // }));

    // console.log(initialChartsInfo);

    // console.log("chartInitialData:", chartInitialData);
    // return "test";
  } catch (error) {
    console.log(error);
  }
};

export const updateCharts = (randomNumberArray) => (dispatch) => {
  try {
    if (randomNumberArray.length) {
      dispatch({ type: UPDATE_CHARTS, payload: randomNumberArray });
    }
  } catch (error) {}
};
