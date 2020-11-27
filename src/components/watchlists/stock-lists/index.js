import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { useSelector } from "react-redux";

const StockLists = () => {
  const charts = useSelector((state) => (state.charts ? state.charts : null));

  return charts.length ? (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Symbol</TableCell>
            <TableCell align="right">Last</TableCell>
            <TableCell align="right">Chg</TableCell>
            <TableCell align="right">Chg%</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {charts.map((chart) => (
            <TableRow key={chart.id}>
              <TableCell component="th" scope="row">
                {chart.name}
              </TableCell>
              <TableCell align="right">{chart.basePrice}</TableCell>
              <TableCell align="right">test</TableCell>
              <TableCell align="right">test</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : null;
};

export default StockLists;
