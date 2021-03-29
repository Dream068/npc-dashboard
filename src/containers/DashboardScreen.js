import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import { Typography } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import Grid from "@material-ui/core/Grid";
import Timer from "../components/Timer";
import Card from "../components/Card";
import CanvasJSReact from "../components/Canvas/canvasjs.react";
import RefreshImage from "../assets/refresh.png";
import {
  options,
  options1,
  dashboardColumns,
  dashboardRows,
  dashboardBranchRows,
  dashboardBranchColumns,
  dashboardMerchantRows,
  dashboardMerchantColumns,
} from "../constants/mockdata";

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
  cardItem: {
    marginBottom: theme.spacing(1.5),
    wordBreak: "break-word",
  },
  dashboardTop: {
    padding: theme.spacing(3, 2),
    marginBottom: "30px",
  },
  dashboardTitle: {
    marginBottom: theme.spacing(8),
  },
  graphImage: {
    width: "auto",
    maxHeight: "300px",
  },
  circleImage: {
    width: "200px",
    height: "200px",
  },
  organization: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: "0 20px",
  },
  salesList: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: "0 20px",
    marginTop: "30px",
  },
  square: {
    width: "20px",
    height: "20px",
    borderRadius: "5px",
  },
  grid: {
    width: "100%",
    height: "350px",
    "& .MuiDataGrid-root": {
      color: theme.palette.primary.main,
      fontSize: theme.typography.h5.fontSize,
      border: "unset",
    },
    "& .MuiDataGrid-row": {
      maxHeight: "40px !important",
      minHeight: "40px !important",
    },
    "& .MuiDataGrid-columnsContainer": {
      border: "unset",
      maxHeight: "40px !important",
      minHeight: "40px !important",
    },
    "& .MuiDataGrid-columnSeparator": {
      display: "none",
    },
    "& .MuiDataGrid-cell": {
      border: "unset",
    },
    "& .MuiTablePagination-root": {
      color: theme.palette.primary.main,
      fontSize: theme.typography.h5.fontSize,
    },
    "& .MuiDataGrid-window": {
      top: "40px !important",
      overflow: "hidden !important",
    },
  },
  timer: {
    position: "fixed",
    top: "5px",
    display: "flex",
    alignSelf: "center",
  },
}));
const { CanvasJSChart } = CanvasJSReact;
function DashboardScreen() {
  const classes = useStyles();
  const { t } = useTranslation();
  const { userrole } = useSelector((state) => state.user);
  const [page, setPage] = React.useState(1);
  const time = new Date();
  const date = time.getDate();
  return (
    <div className={classes.contentRoot}>
      {userrole !== "admin" && (
        <div className={classes.timer}>
          <Timer days={date} />
        </div>
      )}
      <div className={classes.dashboardTop}>
        <Typography
          variant="h3"
          color="primary"
          className={classes.dashboardTitle}
        >
          {t("dashboard")}
        </Typography>
        {userrole === "admin" ? (
          <Grid container spacing={3}>
            <Grid item xs={6} sm={5}>
              <Grid container spacing={3}>
                <Grid item xs={6} sm={6}>
                  <Card>
                    <Typography
                      variant="h4"
                      color="primary"
                      className={classes.cardItem}
                    >
                      {t("total_banks")}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="primary"
                      className={classes.cardItem}
                    >
                      15
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <Card>
                    <Typography
                      variant="h4"
                      color="primary"
                      className={classes.cardItem}
                    >
                      {t("total_transactions")}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="primary"
                      className={classes.cardItem}
                    >
                      1,000,000
                    </Typography>
                  </Card>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={6} sm={6}>
                  <Card>
                    <Typography
                      variant="h4"
                      color="primary"
                      className={classes.cardItem}
                    >
                      {t("total_payment")}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="primary"
                      className={classes.cardItem}
                    >
                      1,000,000,000
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <Card>
                    <Typography
                      variant="h4"
                      color="primary"
                      className={classes.cardItem}
                    >
                      {t("total_pending")}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="primary"
                      className={classes.cardItem}
                    >
                      147
                    </Typography>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} sm={6}>
              <CanvasJSChart options={options1} />
            </Grid>
          </Grid>
        ) : (
          <>
            <Grid container spacing={3}>
              <Grid item xs={6} sm={3}>
                <Card>
                  <Typography
                    variant="h4"
                    color="primary"
                    className={classes.cardItem}
                  >
                    {t("total_no_paid")}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    style={{ color: "#0FC400" }}
                    className={classes.cardItem}
                  >
                    14,000
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Card>
                  <Typography
                    variant="h4"
                    color="primary"
                    className={classes.cardItem}
                  >
                    {t("total_paid_amount")}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    className={classes.cardItem}
                  >
                    {userrole === "merchant" ? "ETB 19,000,00" : "1,000,000"}
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Card>
                  <Typography
                    variant="h4"
                    color="primary"
                    className={classes.cardItem}
                  >
                    {t("total_expired_payments")}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    className={classes.cardItem}
                  >
                    147
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Card>
                  <Typography
                    variant="h4"
                    color="primary"
                    className={classes.cardItem}
                  >
                    {t("total_generated_bills")}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    className={classes.cardItem}
                  >
                    50,000
                  </Typography>
                </Card>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={6} sm={3}>
                <Card>
                  <Typography
                    variant="h4"
                    color="primary"
                    className={classes.cardItem}
                  >
                    {t("total_expired_payments")}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    style={{ color: "#FF0000" }}
                    className={classes.cardItem}
                  >
                    147
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Card>
                  <Typography
                    variant="h4"
                    color="primary"
                    className={classes.cardItem}
                  >
                    {t("total_penalized_bills")}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    style={{ color: "#FFC400" }}
                    className={classes.cardItem}
                  >
                    15
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Card>
                  <Typography
                    variant="h4"
                    color="primary"
                    className={classes.cardItem}
                  >
                    {userrole === "merchant"
                      ? t("january_earning")
                      : t("total_merchants")}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    className={classes.cardItem}
                  >
                    {userrole === "merchant" ? "ETB 14,175" : "15"}
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Card>
                  <Typography
                    variant="h4"
                    color="primary"
                    className={classes.cardItem}
                  >
                    {userrole === "bank"
                      ? t("total_active_branches")
                      : t("total_refunded_bills")}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    className={classes.cardItem}
                  >
                    471
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </>
        )}
      </div>
      <div className={classes.dashboardBottom}>
        <Grid container spacing={7}>
          <Grid item xs={6} sm={8}>
            <Card>
              <div className={classes.organization}>
                <Typography
                  variant="subtitle2"
                  color="primary"
                  className={classes.cardItem}
                >
                  {userrole === "admin"
                    ? t("top_performing_organizations")
                    : userrole === "bank"
                    ? t("top_performing_branches")
                    : userrole === "branch"
                    ? t("top_performing_merchants")
                    : t("recent_transactions")}
                </Typography>
                <img src={RefreshImage} alt="refresh" width="30" height="30" />
              </div>
              <div className={classes.grid}>
                <DataGrid
                  page={page}
                  onPageChange={(params) => {
                    setPage(params.page);
                  }}
                  disableColumnMenu
                  disableColumnSelector
                  sortingOrder={null}
                  pageSize={6}
                  pagination
                  rows={
                    userrole === "branch"
                      ? dashboardBranchRows
                      : userrole === "merchant"
                      ? dashboardMerchantRows
                      : dashboardRows
                  }
                  columns={
                    userrole === "branch"
                      ? dashboardBranchColumns
                      : userrole === "merchant"
                      ? dashboardMerchantColumns
                      : dashboardColumns
                  }
                />
              </div>
            </Card>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Card>
              <div className={classes.organization}>
                <Typography
                  variant="subtitle2"
                  color="primary"
                  className={classes.cardItem}
                >
                  {t("total_sales")}
                </Typography>
                <img src={RefreshImage} alt="refresh" width="30" height="30" />
              </div>
              <div style={{ display: "flex" }}>
                <CanvasJSChart options={options} />
              </div>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default DashboardScreen;
