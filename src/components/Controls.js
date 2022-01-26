import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const containerStyle = {
  backgroundColor: "blue",
  color: "#FFFFFF",
  display: "flex",
  alignItems: "center",
  fontWeight: "bold",
  fontSize: "1.5em",
  justifyContent: "space-around",
  padding: "0.5em 1em",
  width: "100%"
};

export default props => {
  return (
    <div style={containerStyle} id="titlebar">
      <div> Book Appointment</div>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={props.onShowFormClick}
        title={props.formVisible ? `Hide Form` : `Show Form`}
        disabled={props.formVisible}
      >
        Add Appointment
      </Button>
    </div>
  );
};
