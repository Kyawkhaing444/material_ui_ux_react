import { Grid } from "@material-ui/core";
import React from "react";
import Card from "./Card";

const Content = () => {
  return (
    <Grid container direction="column">
      <Grid item xs={false} sm={2}><div></div></Grid>
      <Grid item container direction="row" spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Content;
