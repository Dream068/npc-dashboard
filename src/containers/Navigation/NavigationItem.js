import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PropTypes from "prop-types";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    [theme.breakpoints.down("xxs")]: {
      padding: theme.spacing(1, 0.5),
    },
  },
  nested: {
    paddingLeft: theme.spacing(4),
    [theme.breakpoints.down("xxs")]: {
      paddingLeft: theme.spacing(2),
    },
    "& .MuiListItemText-root": {
      marginTop: 0,
      marginBottom: 0,
    },
  },
  badge: {
    fontSize: theme.typography.caption.fontSize,
    height: theme.icon.badgeHeight,
  },
  navigationText: {
    fontWeight: (props) => (props.active ? "bold" : "normal"),
    // lineHeight: (props) => (props.active ? "1.2" : "1"),
    letterSpacing: (props) => (props.active ? "2px" : "1px"),
    textTransform: "unset",
    fontSize: (props) =>
      props.item === "menu"
        ? theme.typography.h4.fontSize
        : theme.typography.h5.fontSize,
    [theme.breakpoints.down("xxs")]: {
      lineHeight: "120%",
      fontSize: theme.typography.subtitle2.fontSize,
    },
  },
  navigationIcon: {
    minWidth: theme.spacing(4),
    margin: "0 20px 0 10px",
    [theme.breakpoints.down("xs")]: {
      minWidth: theme.spacing(4.5),
    },
  },
}));

const NavigationItem = ({ nested, nav, open, ...props }) => {
  const classes = useStyles(props);
  const expandIcon = open ? <ExpandLess /> : <ExpandMore />;

  return (
    <ListItem
      {...props}
      className={classNames({
        [classes.root]: true,
        [classes.nested]: nested,
      })}
    >
      <ListItemIcon classes={{ root: classes.navigationIcon }}>
        {nav.icon}
      </ListItemIcon>
      <ListItemText
        primaryTypographyProps={{ variant: "button" }}
        classes={{ primary: classes.navigationText }}
        primary={nav.label}
      />
      {nav.submenu && expandIcon}
    </ListItem>
  );
};

NavigationItem.defaultProps = {
  nested: false,
  nav: null,
  open: false,
};

NavigationItem.propTypes = {
  nested: PropTypes.bool,
  nav: PropTypes.shape(),
  open: PropTypes.bool,
};

export default NavigationItem;
