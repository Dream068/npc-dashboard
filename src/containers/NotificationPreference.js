import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import { Typography } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import IOSSwitch from "../components/IOSSwitch";
import Button from "../components/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    overflow: "auto",
    position: "relative",
    flexDirection: "column",
    padding: "30px 40px",
    [theme.breakpoints.down("xxs")]: {
      overflowX: "hidden",
    },
    [theme.breakpoints.down("md")]: {
      flex: 1,
    },
  },
  inputLabel: {
    marginBottom: theme.spacing(6),
  },
  toggle: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(6),
  },
}));

function NotificationPreference() {
  const classes = useStyles();
  const { t } = useTranslation();
  const [state, setState] = React.useState({
    checkedSMS: false,
    checkedEmail: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div className={classes.root}>
      <Typography variant="h4" color="secondary" className={classes.inputLabel}>
        {t("you_can_update")}
      </Typography>
      <div className={classes.toggle}>
        <Typography
          variant="h4"
          color="secondary"
          className={classes.inputLabel}
        >
          {t("get_notification_sms")}
        </Typography>
        <FormControlLabel
          control={
            <IOSSwitch
              checked={state.checkedSMS}
              onChange={handleChange}
              name="checkedSMS"
            />
          }
          label="iOS style"
        />
      </div>
      <div className={classes.toggle}>
        <Typography
          variant="h4"
          color="secondary"
          className={classes.inputLabel}
        >
          {t("get_notification_sms")}
        </Typography>
        <FormControlLabel
          control={
            <IOSSwitch
              checked={state.checkedEmail}
              onChange={handleChange}
              name="checkedEmail"
            />
          }
          label="iOS style"
        />
      </div>
      <Button fontSize="22px" radius="50px" width="280px" height="60px">
        {t("save_changes")}
      </Button>
    </div>
  );
}

export default NotificationPreference;
