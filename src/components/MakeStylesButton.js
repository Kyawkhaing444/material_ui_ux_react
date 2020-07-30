import React from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  //   buttonStyles: (props) => {
  //     return {
  //         color: props.cool?"red":"green",
  //         background: props.cool?"black":"red"
  //     };
  //   }
  buttonStyles: {
    color: "red",
    [theme.breakpoints.up("sm")]: {
      color: "green",
    }
  },
}));

export default function MakeStylesButton(props) {
  const classes = useStyles();
  return (
    <Button fullWidth className={classes.buttonStyles}>
      {" "}
      Click me
    </Button>
  );
}
