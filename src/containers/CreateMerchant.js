import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import { TextField, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Select from "../components/Select";
import Button from "../components/Button";
import { bankOptions } from "../constants/mockdata";
import { paymentOptions } from "../constants/mockdata";
import UploadImage from "../assets/import.png";

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
  merchantContent: {
    padding: "0 50px",
  },
  imageInput: {
    display: "none",
  },
  inputGroup: {
    marginTop: theme.spacing(5),
  },
  inputRow: {
    display: "flex",
    marginBottom: theme.spacing(2),
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
  addBank: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: theme.spacing(5),
  },
  uploadImage: {
    width: "33px",
    height: "33px",
    margin: "0 20px 0 -30px",
  },
}));

function CreateMerchant() {
  const classes = useStyles();
  const { t } = useTranslation();

  const [state, setState] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    email: "",
    tinNumber: "",
    bank: "",
    bankAccountNumber: "",
  });

  const [selectedPaymentOptions, setSelectedPaymentOptions] = useState(
    "Direct"
  );
  const [selectedBusinessType, setSelectedBusinessType] = useState("School");

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  return (
    <div className={classes.contentRoot}>
      <div className={classes.title}>
        <Typography variant="h4" color="primary">
          {t("merchant_management")}
        </Typography>
        <Typography
          variant="h3"
          color="primary"
          className={classes.transactionTitle}
        >
          {t("merchant_create")}
        </Typography>
      </div>
      <div className={classes.merchantContent}>
        <Typography variant="subtitle2" color="primary">
          {t("create_merchant")}
        </Typography>
        <Typography
          variant="h5"
          color="secondary"
          className={classes.transactionTitle}
        >
          {t("enter_all_merchant")}
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
                  {t("middle_name")}
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
                  {t("last_name")}
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
                  {t("address")}
                </Typography>
                <TextField
                  className={classes.textField}
                  variant="outlined"
                  name="address"
                  value={state.address}
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
          <div className={classes.inputRow}>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h5"
                  color="primary"
                  className={classes.inputLabel}
                >
                  {t("tin_number")}
                </Typography>
                <TextField
                  className={classes.textField}
                  variant="outlined"
                  name="tinNumber"
                  value={state.tinNumber}
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
                  {t("payment_option")}
                </Typography>
                <Select
                  className={classes.bankSelect}
                  value={selectedPaymentOptions.selectedOption}
                  onChange={(selectedOption) => {
                    setSelectedPaymentOptions(selectedOption);
                  }}
                  options={paymentOptions}
                  placeholder="Direct"
                  borderRadius="8px"
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
                  {t("bank")}
                </Typography>
                <TextField
                  className={classes.textField}
                  variant="outlined"
                  name="bank"
                  value={state.bank}
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
                  {t("bank_account_number")}
                </Typography>
                <TextField
                  className={classes.textField}
                  variant="outlined"
                  name="bankAccountNumber"
                  value={state.bankAccountNumber}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: false,
                  }}
                />
              </Grid>
            </Grid>
          </div>
          <div className={classes.addBank}>
            <Button fontSize="14px" radius="50px" width="160px" height="30px">
              {t("add_bank")}
            </Button>
          </div>
          <div className={classes.inputRow}>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h5"
                  color="primary"
                  className={classes.inputLabel}
                >
                  {t("business_license")}
                </Typography>
                <input
                  accept="image/*"
                  className={classes.imageInput}
                  id="icon-button-file"
                  type="file"
                />
                <label htmlFor="icon-button-file">
                  <Button
                    fontSize="14px"
                    radius="50px"
                    width="180px"
                    height="50px"
                  >
                    <img
                      className={classes.uploadImage}
                      src={UploadImage}
                      alt="invoice"
                    />
                    {t("upload")}
                  </Button>
                </label>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h5"
                  color="primary"
                  className={classes.inputLabel}
                >
                  {t("business_type")}
                </Typography>
                <Select
                  className={classes.bankSelect}
                  value={selectedBusinessType.businessType}
                  onChange={(businessType) =>
                    setSelectedBusinessType(businessType.value)
                  }
                  options={bankOptions}
                  placeholder="School"
                  borderRadius="8px"
                />
              </Grid>
            </Grid>
          </div>
          <div className={classes.addBank}>
            <Button
              fontSize="22px"
              radius="50px"
              width="280px"
              height="60px"
              onClick={() => {
                console.log({
                  firstName: state.firstName,
                  middleName: state.middleName,
                  lastName: state.lastName,
                  phoneNumber: state.phoneNumber,
                  email: state.email,
                  address: state.address,
                  tinNumber: state.tinNumber,
                  payment_Options: selectedPaymentOptions,
                  bank: state.bank,
                  bankAccountNumber: state.bankAccountNumber,
                  businessType: selectedBusinessType,
                });
              }}
            >
              {t("continue")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateMerchant;
