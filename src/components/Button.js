import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    background: (props) => (props.color ? props.color : "#1E417F"),
    width: (props) => props.width,
    height: (props) => props.height,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.common.white,
    fontSize: (props) => props.fontSize,
    borderRadius: (props) => props.radius,
    cursor: "pointer",
  },
}));
function Button({ children, ...props }) {
  const classes = useStyles(props);
  return (
    <div className={classes.button} {...props}>
      {children}
    </div>
  );
}

Button.defaultProps = {
  children: null,
};

Button.propTypes = {
  children: PropTypes.node,
};
export default Button;
