import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => {
  return {
    backButton: {
      backgroundColor: "#c92b2b",
      color: "#cbcbcb"
    }
  }
})

const BackButton = props => {
  const classes = useStyles(props);
  return (
    <Button className={classes.backButton} onClick={() => props.history.goBack()}>
      Back
    </Button>
  );
};

export default BackButton;
