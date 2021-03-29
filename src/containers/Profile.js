import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Information from "./Information";
import NotificationPreference from "./NotificationPreference";
import PasswordSecurity from "./PasswordSecurity";
import InformationImage from "../assets/information.png";
import NotificationImage from "../assets/notification.png";
import PasswordImage from "../assets/password.png";
import AvatarImage from "../assets/avatar.png";

const useStyles = makeStyles((theme) => ({
  contentRoot: {
    overflow: "auto !important",
    flex: "1 1 auto",
    display: "flex",
    position: "relative",
    flexDirection: "column",
    [theme.breakpoints.down("xxs")]: {
      overflowX: "auto",
    },
    [theme.breakpoints.down("md")]: {
      flex: 1,
    },
  },
  title: {
    padding: theme.spacing(8, 4, 4, 4),
    boxShadow: "0 0 20px #A0ACC373",
    borderBottom: "1px solid #70707030",
  },
  profileContent: {
    height: "100%",
    "& .MuiGrid-container": {
      height: "100%",
      margin: 0,
    },
    "& .MuiGrid-item": {
      padding: 0,
    },
  },
  profileMenu: {
    borderRight: `1px solid ${theme.palette.secondary.main}`,
    height: "100%",
    padding: theme.spacing(10, 0, 0, 0),
  },
  profileMenuItem: {
    display: "flex",
    alignItems: "center",
    marginLeft: theme.spacing(1),
    cursor: "pointer",
  },
  profileMenuImage: {
    width: "32px",
    height: "32px",
    marginRight: theme.spacing(2),
  },
  divider: {
    width: "89%",
    height: "1px",
    background: theme.palette.secondary.main,
    margin: theme.spacing(2, 0, 3, "auto"),
  },
  profileItemContent: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(8),
  },
  avatarImage: {
    width: "150px",
    height: "150px",
    alignSelf: "center",
    marginBottom: theme.spacing(4),
  },
}));

function Profile() {
  const classes = useStyles();
  const { t } = useTranslation();
  const [activeMenuItem, setActiveMenuItem] = useState("information");
  const handleMenuItem = (item) => {
    setActiveMenuItem(item);
  };
  return (
    <div className={classes.contentRoot}>
      <div className={classes.title}>
        <Typography variant="h4" color="primary">
          {t("user_profile_management")}
        </Typography>
        <Typography
          variant="h3"
          color="primary"
          className={classes.transactionTitle}
        >
          {t("my_profile")}
        </Typography>
      </div>
      <div className={classes.profileContent}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <div className={classes.profileMenu}>
              <div
                className={classes.profileMenuItem}
                role="presentation"
                onClick={() => handleMenuItem("information")}
              >
                <img
                  className={classes.profileMenuImage}
                  src={InformationImage}
                  alt="information"
                />
                <Typography
                  variant="h4"
                  color="primary"
                  style={{
                    fontWeight: activeMenuItem === "information" && "bold",
                  }}
                >
                  {t("basic_information")}
                </Typography>
              </div>
              <div className={classes.divider} />
              <div
                className={classes.profileMenuItem}
                role="presentation"
                onClick={() => handleMenuItem("notification")}
              >
                <img
                  className={classes.profileMenuImage}
                  src={NotificationImage}
                  alt="notification"
                />
                <Typography
                  variant="h4"
                  color="primary"
                  style={{
                    fontWeight: activeMenuItem === "notification" && "bold",
                  }}
                >
                  {t("notification_preference")}
                </Typography>
              </div>
              <div className={classes.divider} />
              <div
                className={classes.profileMenuItem}
                role="presentation"
                onClick={() => handleMenuItem("password")}
              >
                <img
                  className={classes.profileMenuImage}
                  src={PasswordImage}
                  alt="password"
                />
                <Typography
                  variant="h4"
                  color="primary"
                  style={{
                    fontWeight: activeMenuItem === "password" && "bold",
                  }}
                >
                  {t("password_security")}
                </Typography>
              </div>
              <div className={classes.divider} />
            </div>
          </Grid>
          <Grid item xs={12} sm={8}>
            <div className={classes.profileItemContent}>
              <img
                className={classes.avatarImage}
                src={AvatarImage}
                alt="avatar"
              />
              {activeMenuItem === "information" && <Information />}
              {activeMenuItem === "notification" && <NotificationPreference />}
              {activeMenuItem === "password" && <PasswordSecurity />}
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Profile;
