/* eslint-disable quotes */
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import { TextField, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "../components/Button";

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
  paymentContent: {
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
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: `1px solid ${theme.palette.primary.main} !important`,
    },
  },
  billReason: {
    marginBottom: theme.spacing(3),
    "& .MuiFormControl-root": {
      width: "100%",
    },
    "& .MuiInputBase-inputMultiline": {
      height: "100% !important",
      lineHeight: 1.2,
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
      height: "170px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: `1px solid ${theme.palette.primary.main} !important`,
    },
  },
  inputLabel: {
    marginBottom: theme.spacing(1),
  },
  createPayment: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: theme.spacing(5),
  },
}));

function Single() {
  const classes = useStyles();
  const { t } = useTranslation();
  const [state, setState] = useState({
    fullName: "",
    amountETB: 0,
    dueDate: "",
    phoneNumber: "",
    email: "",
    billReason: "",
  });

  const handleChange = (event) => {
    let value = event.target.value;

    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  return (
    <div className={classes.contentRoot}>
      <div className={classes.title}>
        <Typography variant="h4" color="primary">
          {t("create_payment_management")}
        </Typography>
        <Typography
          variant="h3"
          color="primary"
          className={classes.transactionTitle}
        >
          {t("create_payment_single")}
        </Typography>
      </div>
      <div className={classes.paymentContent}>
        <Typography variant="subtitle2" color="primary">
          {t("create_payment")}
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
                  {t("full_name")}
                </Typography>
                <TextField
                  className={classes.textField}
                  variant="outlined"
                  name="fullName"
                  value={state.fullName}
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
                  {t("amount_in_etb")}
                </Typography>
                <TextField
                  className={classes.textField}
                  variant="outlined"
                  name="amountETB"
                  value={state.amountETB}
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
                  {t("due_date")}
                </Typography>
                <TextField
                  className={classes.textField}
                  variant="outlined"
                  name="dueDate"
                  value={state.dueDate}
                  type="date"
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
            </Grid>
          </div>
          <div className={classes.billReason}>
            <Grid item xs={12} sm={12}>
              <Typography
                variant="h5"
                color="primary"
                className={classes.inputLabel}
              >
                {t("bill_reason")}
              </Typography>
              <TextField
                className={classes.textField}
                variant="outlined"
                name="billReason"
                multiline
                value={state.billReason}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: false,
                }}
              />
            </Grid>
          </div>
          <div className={classes.createPayment}>
            <Button fontSize="22px" radius="50px" width="280px" height="60px">
              {t("create_payment")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Single;
