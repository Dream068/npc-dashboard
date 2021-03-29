import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import { Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
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
  },
  billTop: {
    marginTop: theme.spacing(10),
    display: "flex",
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "20px",
    alignItems: "center",
    margin: "0 120px",
  },
  billBottomGroup: {
    marginTop: theme.spacing(6),
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: "20px",
    margin: "0 120px",
    padding: "40px 30px",
  },
  billBottom: {
    display: "flex",
    margin: "30px 0",
  },
  enterBill: {
    display: "flex",
    padding: "20px 30px",
    alignItems: "center",
    "& .MuiSvgIcon-root": {
      color: theme.palette.secondary.main,
      marginRight: theme.spacing(2),
    },
  },
  chooseBill: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "space-between",
    padding: "20px 50px",
    "& .MuiSvgIcon-root": {
      color: theme.palette.secondary.main,
    },
  },
  height: {
    width: "1px",
    height: "100%",
    background: theme.palette.primary.main,
    margin: "0 50px",
  },
  bottomHeight: {
    width: "1px",
    background: theme.palette.secondary.main,
    margin: "0 40px",
  },
  downloadInvoice: {
    width: "33px",
    height: "33px",
    margin: "0 20px 0 -30px",
  },
  bottomItem: {
    display: "flex",
    flex: 1,
  },
  bottomTitle: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  bottomValue: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: "flex-end",
  },
  billItem: {
    marginBottom: theme.spacing(3),
  },
  bottomButton: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

function Notifications() {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div className={classes.contentRoot}>
      <div className={classes.title}>
        <Typography variant="h4" color="primary">
          {t("notification_management")}
        </Typography>
        <Typography
          variant="h3"
          color="primary"
          className={classes.transactionTitle}
        >
          {t("notification")}
        </Typography>
      </div>
      <div className={classes.billTop}>
        <div className={classes.enterBill}>
          <SearchIcon />
          <Typography
            variant="h4"
            color="secondary"
            style={{ marginLeft: "10px" }}
          >
            {t("enter_bill")}
          </Typography>
        </div>
        <div className={classes.height} />
        <div className={classes.chooseBill}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h4"
              color="secondary"
              style={{ marginRight: "10px" }}
            >
              {t("choose_bill")}
            </Typography>
            <ExpandMoreIcon />
          </div>
          <Button fontSize="20px" width="250px" height="50px" radius="50px">
            {t("search")}
          </Button>
        </div>
      </div>
      <div className={classes.billBottomGroup}>
        <div className={classes.billBottom}>
          <div className={classes.bottomItem}>
            <div className={classes.bottomTitle}>
              <Typography
                variant="h4"
                color="secondary"
                className={classes.billItem}
              >
                {t("bill_no")}
              </Typography>
              <Typography
                variant="h4"
                color="secondary"
                className={classes.billItem}
              >
                {t("bill_date")}
              </Typography>
              <Typography
                variant="h4"
                color="secondary"
                className={classes.billItem}
              >
                {t("amount")}
              </Typography>
              <Typography
                variant="h4"
                color="secondary"
                className={classes.billItem}
              >
                {t("status")}
              </Typography>
            </div>
            <div className={classes.bottomValue}>
              <Typography
                variant="h4"
                color="secondary"
                className={classes.billItem}
              >
                #121281
              </Typography>
              <Typography
                variant="h4"
                color="secondary"
                className={classes.billItem}
              >
                Jan 20,2020
              </Typography>
              <Typography
                variant="h4"
                color="secondary"
                className={classes.billItem}
              >
                ETB12, 127
              </Typography>
              <Typography
                variant="h4"
                color="secondary"
                className={classes.billItem}
              >
                Pending
              </Typography>
            </div>
          </div>
          <div className={classes.bottomHeight} />
          <div className={classes.bottomItem}>
            <div className={classes.bottomTitle}>
              <Typography
                variant="h4"
                color="secondary"
                className={classes.billItem}
              >
                {t("bill_no")}
              </Typography>
              <Typography
                variant="h4"
                color="secondary"
                className={classes.billItem}
              >
                {t("bill_date")}
              </Typography>
              <Typography
                variant="h4"
                color="secondary"
                className={classes.billItem}
              >
                {t("amount")}
              </Typography>
              <Typography
                variant="h4"
                color="secondary"
                className={classes.billItem}
              >
                {t("status")}
              </Typography>
            </div>
            <div className={classes.bottomValue}>
              <Typography
                variant="h4"
                color="secondary"
                className={classes.billItem}
              >
                #121281
              </Typography>
              <Typography
                variant="h4"
                color="secondary"
                className={classes.billItem}
              >
                Jan 20,2020
              </Typography>
              <Typography
                variant="h4"
                color="secondary"
                className={classes.billItem}
              >
                ETB12, 127
              </Typography>
              <Typography
                variant="h4"
                color="secondary"
                className={classes.billItem}
              >
                Pending
              </Typography>
            </div>
          </div>
        </div>
        <div className={classes.bottomButton}>
          <Button fontSize="20px" width="300px" height="60px" radius="50px">
            {t("notify_email")}
          </Button>
          <Button fontSize="20px" width="300px" height="60px" radius="50px">
            {t("notify_sms")}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
