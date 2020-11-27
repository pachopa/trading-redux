import React, { useState, useEffect } from "react";
import generateRandomDecimal from "./utils/index";
import { useSelector, useDispatch } from "react-redux";
import { createCharts, updateCharts } from "./redux/actions";

import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import StockLists from "./components/watchlists/stock-lists";

import "./app.css";

export default function App() {
  const charts = useSelector((state) => state.charts);
  const dispatch = useDispatch();
  const [randomNumberArray, setRandomNumberArray] = useState(null);

  useEffect(() => {
    dispatch(createCharts());
  }, []);

  useEffect(() => {
    console.log("charts.length:", charts.length);

    const randomNumberTimer = setTimeout(() => {
      setRandomNumberArray(generateRandomDecimal(charts.length));
    }, 3000);

    dispatch(updateCharts(randomNumberArray));
  }, [randomNumberArray]);
  ////

  console.log(charts, randomNumberArray);
  return (
    <Container maxWidth={false}>
      <AppBar position="static" color="inherit">
        <Typography>Trading</Typography>
      </AppBar>
      <Grow in>
        {/* <Container> */}
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item xs={12} sm={8}>
            test
          </Grid>
          <Grid item xs={12} sm={4}>
            <StockLists />
          </Grid>
        </Grid>
        {/* </Container> */}
      </Grow>
    </Container>
  );
}
