import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import { TextField, Typography } from "@material-ui/core";
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
      overflowY: "auto",
    },
    [theme.breakpoints.down("md")]: {
      flex: 1,
    },
  },
  emailInput: {
    display: "flex",
    marginBottom: theme.spacing(2),
    "& .MuiFormControl-root": {
      width: "95%",
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
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: `1px solid ${theme.palette.secondary.main} !important`,
    },
  },
  inputRow: {
    display: "flex",
    marginBottom: theme.spacing(2),
    "& .MuiFormControl-root": {
      width: "90%",
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
  saveChange: {
    marginTop: theme.spacing(5),
  },
}));

function Information() {
  const classes = useStyles();
  const { t } = useTranslation();
  const [state, setState] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address: "",
    organization: "",
    role: "",
  });

  const handleChange = (event) => {
    let value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  return (
    <div className={classes.root}>
      <div className={classes.inputRow}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h5"
              color="secondary"
              className={classes.inputLabel}
            >
              {t("first_name")}
            </Typography>
            <TextField
              className={classes.textField}
              variant="outlined"
              name="firstName"
              value={state.firstName}
              onChange={handleChange}
              placeholder="Bersufekad"
              InputLabelProps={{
                shrink: false,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h5"
              color="secondary"
              className={classes.inputLabel}
            >
              {t("middle_name")}
            </Typography>
            <TextField
              className={classes.textField}
              variant="outlined"
              name="middleName"
              value={state.middleName}
              onChange={handleChange}
              placeholder="Getachew"
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
              color="secondary"
              className={classes.inputLabel}
            >
              {t("last_name")}
            </Typography>
            <TextField
              className={classes.textField}
              variant="outlined"
              name="lastName"
              value={state.lastName}
              onChange={handleChange}
              placeholder="Amare"
              InputLabelProps={{
                shrink: false,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h5"
              color="secondary"
              className={classes.inputLabel}
            >
              {t("phone")}
            </Typography>
            <TextField
              className={classes.textField}
              variant="outlined"
              name="phoneNumber"
              value={state.phoneNumber}
              onChange={handleChange}
              placeholder="+251923930947"
              InputLabelProps={{
                shrink: false,
              }}
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.emailInput}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12}>
            <Typography
              variant="h5"
              color="secondary"
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
              placeholder="bersufekadgetachew@gmail.com"
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
              color="secondary"
              className={classes.inputLabel}
            >
              {t("address")}
            </Typography>
            <TextField
              className={classes.textField}
              variant="outlined"
              name="address"
              value={state.address}
              onChange={handleChange}
              placeholder="Addis Ababa , Ethiopia"
              InputLabelProps={{
                shrink: false,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h5"
              color="secondary"
              className={classes.inputLabel}
            >
              {t("organization")}
            </Typography>
            <TextField
              className={classes.textField}
              variant="outlined"
              name="organization"
              value={state.organization}
              onChange={handleChange}
              placeholder="NPC"
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
              color="secondary"
              className={classes.inputLabel}
            >
              {t("role")}
            </Typography>
            <TextField
              className={classes.textField}
              variant="outlined"
              name="role"
              value={state.role}
              onChange={handleChange}
              placeholder="Administrator"
              InputLabelProps={{
                shrink: false,
              }}
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.saveChange}>
        <Button fontSize="22px" radius="50px" width="280px" height="60px">
          {t("save_changes")}
        </Button>
      </div>
    </div>
  );
}

export default Information;
