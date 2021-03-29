import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import { Typography } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import Chip from "@material-ui/core/Chip";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { logColumns, logRows } from "../constants/mockdata";

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
  transactionTitle: {
    marginBottom: theme.spacing(5),
  },
  filterTitle: {
    marginBottom: theme.spacing(1),
  },
  filterGroup: {
    display: "flex",
    width: "100%",
    alignSelf: "center",
    justifyContent: "space-around",
    marginBottom: theme.spacing(1),
  },
  grid: {
    width: "100%",
    height: "550px",
    "& .MuiDataGrid-root": {
      color: theme.palette.primary.main,
      fontSize: theme.typography.h5.fontSize,
      borderColor: theme.palette.primary.main,
    },
    "& .MuiDataGrid-columnsContainer": {
      borderColor: theme.palette.primary.main,
    },
    "& .MuiDataGrid-columnSeparator": {
      display: "none",
    },
    "& .MuiDataGrid-cell": {
      borderColor: theme.palette.primary.main,
    },
    "& .MuiTablePagination-root": {
      color: theme.palette.primary.main,
      fontSize: theme.typography.h5.fontSize,
    },
    "& .MuiDataGrid-window": {
      overflow: "hidden !important",
    },
  },
  search: {
    position: "relative",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    width: "100% !important",
    borderBottom: `1px solid ${theme.palette.primary.main}`,
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& .MuiSvgIcon-root": {
      color: theme.palette.secondary.main,
      marginRight: theme.spacing(2),
    },
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    color: theme.palette.secondary.main,
    fontSize: theme.typography.h4.fontSize,
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
  chipGroup: {
    display: "flex",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    marginBottom: theme.spacing(3),
    "& .MuiChip-outlined": {
      border: `1.5px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
    },
    "& .MuiChip-clickableColorSecondary": {
      color: theme.palette.primary.main,
    },
  },
  chip: {
    margin: theme.spacing(0.5),
    // background: "#1E417E",
    borderRadius: "100px",
    border: "none",
  },
}));

function Logs() {
  const classes = useStyles();
  const { t } = useTranslation();
  const [page, setPage] = React.useState(1);
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "Login" },
    { key: 1, label: "Enable" },
    { key: 2, label: "Logout" },
    { key: 3, label: "Delete" },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  return (
    <div className={classes.contentRoot}>
      <div className={classes.title}>
        <Typography variant="h4" color="primary">
          {t("activity_logs_management")}
        </Typography>
        <Typography
          variant="h3"
          color="primary"
          className={classes.transactionTitle}
        >
          {t("activity_logs")}
        </Typography>
      </div>
      <div className={classes.filterGroup}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search Activity"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </div>
      <div className={classes.chipGroup}>
        {chipData.map((data) => {
          let icon;
          return (
            <li key={data.key}>
              <Chip
                icon={icon}
                label={data.label}
                color="primary"
                onDelete={handleDelete(data)}
                className={classes.chip}
                variant="outlined"
                deletableColorSecondary
              />
            </li>
          );
        })}
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
          pageSize={8}
          pagination
          rows={logRows}
          columns={logColumns}
        />
      </div>
    </div>
  );
}

export default Logs;
