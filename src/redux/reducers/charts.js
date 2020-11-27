import { GET_CHARTS, UPDATE_CHARTS } from "../constants";
/* eslint-disable import/no-anonymous-default-export */
export default (charts = [], action) => {
  console.log("testsetset22", action.payload);
  switch (action.type) {
    // case DELETE:
    //   return posts.filter((post) => post._id !== action.payload);
    // case UPDATE:
    //   return posts.map((post) =>
    //     post._id === action.payload._id ? action.payload : post
    //   );
    // case FETCH_ALL:
    //   return action.payload;
    case UPDATE_CHARTS:
      return charts.map((chart, i) =>
        charts.push({ change: action.payload[i] })
      );

    case GET_CHARTS:
      return charts.length
        ? charts.map((chart) =>
            chart.basePrice === action.payload.basePrice
              ? chart
              : action.payload
          )
        : action.payload;
    // return [...charts, action.payload];
    default:
      return charts;
  }
};
