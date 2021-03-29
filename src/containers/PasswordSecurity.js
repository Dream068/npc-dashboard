import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import { TextField, Typography } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Grid from "@material-ui/core/Grid";
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
  inputRow: {
    display: "flex",
    marginBottom: theme.spacing(4),
    position: "relative",
    "& .MuiFormControl-root": {
      width: "100%",
    },
    "& .MuiOutlinedInput-input": {
      padding: "15px 20px",
      fontSize: theme.spacing(2),
      color: theme.palette.secondary.main,
    },
    "& .MuiInputLabel-root": {
      display: "none",
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: theme.spacing(1),
      "&:hover": {
        display: "block",
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: `1px solid ${theme.palette.secondary.main} !important`,
    },
  },
  inputLabel: {
    marginBottom: theme.spacing(1),
  },
  reference: {
    marginBottom: theme.spacing(5),
  },
  saveChange: {
    marginTop: theme.spacing(3),
  },
  visibility: {
    position: "absolute",
    top: "42px",
    right: "11px",
    "& .MuiSvgIcon-root": {
      color: theme.palette.secondary.main,
      marginRight: theme.spacing(2),
    },
  },
}));

function PasswordSecurity() {
  const classes = useStyles();
  const { t } = useTranslation();
  const [state, setState] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    let value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    if (state.newPassword !== state.confirmPassword) {
      console.log(
        `password don't match, new : ${state.newPassword}, confirm: ${state.confirmPassword}`
      );
    } else {
      console.log(`match`);
    }
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" color="secondary" className={classes.reference}>
        {t("you_need_logout")}
      </Typography>
      <div className={classes.inputRow}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12}>
            <Typography
              variant="h4"
              color="secondary"
              className={classes.inputLabel}
            >
              {t("current_password")}
            </Typography>
            <TextField
              className={classes.textField}
              type="password"
              variant="outlined"
              name="currentPassword"
              value={state.currentPassword}
              onChange={handleChange}
              InputLabelProps={{
                shrink: false,
              }}
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.inputRow}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12}>
            <Typography
              variant="h4"
              color="secondary"
              className={classes.inputLabel}
            >
              {t("new_password")}
            </Typography>
            <TextField
              className={classes.textField}
              type="password"
              variant="outlined"
              name="newPassword"
              value={state.newPassword}
              onChange={handleChange}
              InputLabelProps={{
                shrink: false,
              }}
            />
            <span className={classes.visibility}>
              <VisibilityIcon />
            </span>
          </Grid>
        </Grid>
      </div>
      <div className={classes.inputRow}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12}>
            <Typography
              variant="h4"
              color="secondary"
              className={classes.inputLabel}
            >
              {t("confirm_password_password")}
            </Typography>
            <TextField
              className={classes.textField}
              type="password"
              variant="outlined"
              name="confirmPassword"
              value={state.confirmPassword}
              onChange={handleChange}
              InputLabelProps={{
                shrink: false,
              }}
            />
            <span className={classes.visibility}>
              <VisibilityIcon />
            </span>
          </Grid>
        </Grid>
      </div>
      <div className={classes.saveChange}>
        <Button
          fontSize="22px"
          radius="50px"
          width="280px"
          height="60px"
          onClick={handleSubmit}
        >
          {t("save_changes")}
        </Button>
      </div>
    </div>
  );
}

export default PasswordSecurity;
