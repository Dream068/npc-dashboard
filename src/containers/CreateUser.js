import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import { TextField, ThemeProvider, Typography } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Button from "../components/Button";
import theme from "../theme/theme";

const useStyles = makeStyles((theme) => ({
  contentRoot: {
    flex: "1 1 auto",
    display: "flex",
    overflow: "auto",
    position: "relative",
    flexDirection: "column",
    padding: "30px 30px",
    [theme.breakpoints.down("xxs")]: {
      overflowX: "hidden",
    },
    [theme.breakpoints.down("md")]: {
      flex: 1,
    },
  },
  title: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(6),
  },
  userContent: {
    padding: "0 50px",
  },
  inputGroup: {
    marginTop: theme.spacing(5),
  },
  inputRow: {
    display: "flex",
    marginBottom: theme.spacing(3),
    "& .MuiFormControl-root": {
      width: "100%",
    },
    "& .MuiOutlinedInput-input": {
      padding: "15px 20px",
      fontSize: theme.spacing(2),
      color: theme.palette.primary.main,
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
      border: `1px solid ${theme.palette.primary.main} !important`,
    },
  },
  inputLabel: {
    marginBottom: theme.spacing(1),
  },
  createUser: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: theme.spacing(5),
  },
  checkBox: {
    marginTop: theme.spacing(6),
    "& .MuiCheckbox-root": {
      color: theme.palette.secondary.main,
    },
    "& .MuiTypography-root": {
      color: theme.palette.secondary.main,
      fontSize: theme.typography.h4.fontSize,
    },
    "& .MuiSvgIcon-root": {
      width: "40px",
      height: "40px",
    },
  },

  checkedBox: {
    marginTop: theme.spacing(6),
    "& .MuiCheckbox-root": {
      color: theme.palette.primary.main,
    },
    "& .MuiTypography-root": {
      color: theme.palette.primary.main,
      fontSize: theme.typography.h4.fontSize,
    },
    "& .MuiSvgIcon-root": {
      width: "40px",
      height: "40px",
    },
  },
}));

function CreateUser() {
  const classes = useStyles();
  const { t } = useTranslation();

  const [state, setState] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    role: "",
    password: "",
    confirmPassword: "",
    checked: false,
  });

  const handleChange = (event) => {
    let value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  return (
    <div className={classes.contentRoot}>
      <div className={classes.title}>
        <Typography variant="h4" color="primary">
          {t("users_management")}
        </Typography>
        <Typography
          variant="h3"
          color="primary"
          className={classes.anotherstyle}
        >
          {t("users_create")}
        </Typography>
      </div>
      <div className={classes.userContent}>
        <Typography variant="subtitle2" color="primary">
          {t("create_user")}
        </Typography>
        <Typography
          variant="h5"
          color="secondary"
          className={classes.transactionTitle}
        >
          {t("enter_all_user")}
        </Typography>
        <div className={classes.inputGroup}>
          <div className={classes.inputRow}>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h5"
                  color="primary"
                  className={classes.inputLabel}
                >
                  {t("first_name*")}
                </Typography>
                <TextField
                  className={classes.textField}
                  variant="outlined"
                  name="firstName"
                  value={state.firstName}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: false,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h5"
                  color="primary"
                  className={classes.inputLabel}
                >
                  {t("middle_name*")}
                </Typography>
                <TextField
                  className={classes.textField}
                  variant="outlined"
                  name="middleName"
                  value={state.middleName}
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
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h5"
                  color="primary"
                  className={classes.inputLabel}
                >
                  {t("last_name*")}
                </Typography>
                <TextField
                  className={classes.textField}
                  variant="outlined"
                  name="lastName"
                  value={state.lastName}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: false,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h5"
                  color="primary"
                  className={classes.inputLabel}
                >
                  {t("phone_number")}
                </Typography>
                <TextField
                  className={classes.textField}
                  variant="outlined"
                  name="phoneNumber"
                  value={state.phoneNumber}
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
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h5"
                  color="primary"
                  className={classes.inputLabel}
                >
                  {t("email")}
                </Typography>
                <TextField
                  className={classes.textField}
                  variant="outlined"
                  name="email"
                  value={state.email}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: false,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h5"
                  color="primary"
                  className={classes.inputLabel}
                >
                  {t("role*")}
                </Typography>
                <TextField
                  className={classes.textField}
                  variant="outlined"
                  name="role"
                  value={state.role}
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
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h5"
                  color="primary"
                  className={classes.inputLabel}
                >
                  {t("password*")}
                </Typography>
                <TextField
                  className={classes.textField}
                  variant="outlined"
                  name="password"
                  value={state.password}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: false,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h5"
                  color="primary"
                  className={classes.inputLabel}
                >
                  {t("confirm_password*")}
                </Typography>
                <TextField
                  className={classes.textField}
                  name="confirmPassword"
                  variant="outlined"
                  value={state.confirmPassword}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: false,
                  }}
                />
              </Grid>
            </Grid>
          </div>
          <div
            className={state.checked ? classes.checkedBox : classes.checkBox}
          >
            <FormControlLabel
              control={
                <Checkbox
                  name="checked"
                  checked={state.checked}
                  onChange={handleChange}
                />
              }
              label="I agree to all the NPC's Terms and Privacy Policy"
            />
          </div>
          <div className={classes.createUser}>
            <Button
              fontSize="22px"
              radius="50px"
              color={
                state.checked
                  ? theme.palette.primary.main
                  : theme.palette.secondary.main
              }
              width="280px"
              height="60px"
              disabled="true"
            >
              {t("create_user")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateUser;
