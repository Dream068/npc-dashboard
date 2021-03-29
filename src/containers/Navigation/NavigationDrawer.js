import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Hidden from "@material-ui/core/Hidden";
import config from "../../config/config";
import { setNavigationDrawerMobileStatus } from "../../actions/navigation-action-type";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawerTemporaryPaper: {
    width: config.DRAWER_WIDTH,
    paddingTop: theme.spacing(1),
    [theme.breakpoints.down("xxs")]: {
      fontSize: theme.typography.caption.fontSize,
      padding: theme.spacing(0),
      overflowX: "hidden",
      width: config.DRAWER_WIDTH_SMALL,
    },
    [theme.breakpoints.down("sm")]: {
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
  },
  drawer: {
    width: config.DRAWER_WIDTH,
  },
  drawerPermanentPaper: {
    width: config.DRAWER_WIDTH,
    zIndex: theme.zIndex.drawer,
    paddingTop: theme.spacing(4),
    background: theme.palette.primary.main,
  },
  drawerContainer: {
    overflowY: "auto",
    overflowX: "hidden",
    minWidth: config.DRAWER_WIDTH,
  },
  formControl: {
    margin: theme.spacing(1),
    flex: "0 0 auto",
  },
}));

export default function NavigationDrawer({ children }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const {
    navigationDrawerDesktopStatus,
    navigationDrawerMobileStatus,
  } = useSelector((state) => ({
    navigationDrawerDesktopStatus:
      state.navigationMenu.navigationDrawerDesktopStatus,
    navigationDrawerMobileStatus:
      state.navigationMenu.navigationDrawerMobileStatus,
  }));

  const toggleNavigationDrawerMobileStatus = () => {
    dispatch(setNavigationDrawerMobileStatus(!navigationDrawerMobileStatus));
  };

  return (
    <>
      <Hidden mdUp>
        <SwipeableDrawer
          className={classes.drawer}
          variant="temporary"
          anchor="left"
          swipeAreaWidth={8}
          disableSwipeToOpen={false}
          disableBackdropTransition
          open={navigationDrawerMobileStatus}
          classes={{
            paper: classes.drawerTemporaryPaper,
            root: classes.root,
          }}
          ModalProps={{
            keepMounted: true,
          }}
          onOpen={toggleNavigationDrawerMobileStatus}
          onClose={toggleNavigationDrawerMobileStatus}
        >
          {children}
        </SwipeableDrawer>
      </Hidden>
      {navigationDrawerDesktopStatus && (
        <Hidden smDown implementation="css" className={classes.drawerContainer}>
          <Drawer
            variant="permanent"
            anchor="left"
            className={classes.drawer}
            classes={{
              paper: classes.drawerPermanentPaper,
              root: classes.root,
            }}
          >
            {children}
          </Drawer>
        </Hidden>
      )}
    </>
  );
}

NavigationDrawer.defaultProps = {
  children: null,
};

NavigationDrawer.propTypes = {
  children: PropTypes.node,
};
