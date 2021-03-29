import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useTranslation } from "react-i18next";
import UserProfile from "../assets/user@2x.png";
import { history } from "../config/store";
import routes from "../constants/routes";

const useStyles = makeStyles((theme) => ({
  userMenu: {
    display: "flex",
    position: "fixed",
    top: theme.spacing(2),
    right: theme.spacing(4),
    width: "100%",
    justifyContent: "flex-end",
    zIndex: 999,
    "& .MuiSvgIcon-root": {
      color: theme.palette.primary.main,
    },
  },
  image: {
    width: "34px",
    height: "45px",
    marginRight: theme.spacing(3),
  },
  menu: {
    transform: "translate(0, 10px)",
  },
  menuTitleGroup: {
    display: "flex",
    cursor: "pointer",
    justifyContent: "center",
    alignItems: "center",
  },
  menuTitle: {
    marginRight: theme.spacing(1.5),
    fontSize: "20px",
  },
  menuProfile: {
    marginRight: theme.spacing(1.5),
    marginBottom: theme.spacing(1),
    fontSize: "12px",
  },
  menuLogOut: {
    fontSize: "12px",
  },

  menuContent: {
    width: "127px",
    border: "1px dotted #1E417F",
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1, 2),
    marginTop: theme.spacing(1),
    cursor: "pointer",
  },
}));

function UserMenuBar() {
  const classes = useStyles();
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const moveProfile = () => {
    history.push(routes.PROFILE);
  };
  const moveLogout = () => {};
  const handleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <div className={classes.userMenu}>
      <img src={UserProfile} alt="user" className={classes.image} />
      <div className={classes.menu}>
        <div
          role="presentation"
          className={classes.menuTitleGroup}
          onClick={handleMenu}
        >
          <Typography
            variant="h5"
            color="primary"
            className={classes.menuTitle}
          >
            {t("NPC_super")}
          </Typography>
          <ExpandMoreIcon />
        </div>
        {isMenuOpen && (
          <div className={classes.menuContent}>
            <Typography
              variant="h6"
              color="primary"
              className={classes.menuProfile}
              onClick={moveProfile}
            >
              {t("my_profile")}
            </Typography>
            <Typography
              variant="h6"
              color="primary"
              className={classes.menuLogOut}
              onClick={moveLogout}
            >
              {t("logout")}
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserMenuBar;
