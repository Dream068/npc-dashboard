import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";
import classNames from "classnames";
import UserMenuBar from "./UserMenuBar";
import config from "../config/config";
import versionConstants from "../constants/version";
import NavigationMenu from "./Navigation/NavigationMenu";
import { dashboardRoutes } from "./Routes";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100%",
    background: theme.palette.background.default,
  },
  drawerPermanentPaper: {
    paddingTop: theme.spacing(2),
  },
  content: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    height: "100vh",
    flexDirection: "column",
    position: "relative",
  },
}));

export default function MainContent() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <UserMenuBar />
      {config.VERSION !== versionConstants.MOBILE && (
        <NavigationMenu
          classes={classNames({
            [classes.drawerPermanentPaper]: true,
          })}
        />
      )}
      <main
        className={classNames({
          [classes.content]: true,
        })}
      >
        <React.Suspense>
          <Switch>
            {dashboardRoutes.map((pRoute) => (
              <Route
                key={pRoute.key}
                path={pRoute.path}
                component={pRoute.component}
              />
            ))}
          </Switch>
        </React.Suspense>
      </main>
    </div>
  );
}
