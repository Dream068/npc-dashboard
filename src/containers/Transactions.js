import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { fade, makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InputBase from '@material-ui/core/InputBase';
import { DataGrid } from '@material-ui/data-grid';
import moment from 'moment';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import DatePickerDialog from '../components/DatePickerDialog';
import CustomDialog from '../components/CustomDialog';
import Select from '../components/Select';
import Button from '../components/Button';
import CalendarImage from '../assets/calendar.png';
import {
  bankOptions, transactionColumns, transactionrows, branchModalColumns, branchModalRows,
} from '../constants/mockdata';
import { history } from '../config/store';
import routes from '../constants/routes';

const useStyles = makeStyles((theme) => ({
  contentRoot: {
    flex: '1 1 auto',
    display: 'flex',
    overflow: 'auto',
    position: 'relative',
    flexDirection: 'column',
    padding: '30px 30px',
    [theme.breakpoints.down('xxs')]: {
      overflowX: 'hidden',
    },
    [theme.breakpoints.down('md')]: {
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
    marginBottom: theme.spacing(2),
  },
  filterGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(5),
  },
  bankModal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 2),
    cursor: 'pointer',
    height: '38px',
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '12px',
    width: '200px',
    '& .MuiSvgIcon-root': {
      color: theme.palette.primary.main,
    },
  },
  grid: {
    width: '100%',
    height: '550px',
    '& .MuiDataGrid-root': {
      color: theme.palette.primary.main,
      fontSize: theme.typography.h5.fontSize,
      borderColor: theme.palette.primary.main,
    },
    '& .MuiDataGrid-columnsContainer': {
      borderColor: theme.palette.primary.main,
    },
    '& .MuiDataGrid-columnSeparator': {
      display: 'none',
    },
    '& .MuiDataGrid-cell': {
      borderColor: theme.palette.primary.main,
    },
    '& .MuiTablePagination-root': {
      color: theme.palette.primary.main,
      fontSize: theme.typography.h5.fontSize,
    },
    '& .MuiDataGrid-window': {
      overflow: 'hidden !important',
    },
  },
  dateRangePicker: {
    border: `1px solid ${theme.palette.primary.main}`,
    width: '250px',
    height: '38px',
    borderRadius: theme.spacing(1.5),
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  calendarImage: {
    width: '30px',
    height: '30px',
    position: 'absolute',
    top: theme.spacing(0.5),
    right: theme.spacing(2),
  },
  dateText: {
    marginLeft: theme.spacing(3),
  },
  search: {
    position: 'relative',
    marginTop: theme.spacing(5),
    alignSelf: 'center',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    width: '50% !important',
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '50px',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& .MuiSvgIcon-root': {
      color: theme.palette.secondary.main,
      marginRight: theme.spacing(2),
    },
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    padding: theme.spacing(1.5, 1, 1.5, 0),
    color: theme.palette.secondary.main,
    fontSize: theme.typography.h4.fontSize,
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
  searchButton: {
    marginTop: theme.spacing(4),
  },
  modalTable: {
    width: '100%',
    height: '350px',
    marginTop: theme.spacing(4),
    '& .MuiDataGrid-root': {
      color: theme.palette.secondary.main,
      fontSize: theme.typography.h4.fontSize,
      border: 'unset',
    },
    '& .MuiDataGrid-row': {
      maxHeight: '40px !important',
      minHeight: '40px !important',
    },
    '& .MuiDataGrid-columnsContainer': {
      maxHeight: '40px !important',
      minHeight: '40px !important',
    },
    '& .MuiDataGrid-columnSeparator': {
      display: 'none',
    },
    '& .MuiDataGrid-cell': {
      border: 'unset',
    },
    '& .MuiTablePagination-root': {
      color: theme.palette.primary.main,
      fontSize: theme.typography.h5.fontSize,
    },
    '& .MuiDataGrid-window': {
      top: '40px !important',
      overflow: 'hidden !important',
    },
    '& .MuiDataGrid-colCellTitleContainer': {
      justifyContent: 'center',
    },
    '& .MuiDataGrid-cellLeft': {
      textAlign: 'center',
    },
  },
}));

function Transactions() {
  const classes = useStyles();
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [isOpenDatePicker, setIsOpenDatePicker] = useState(false);
  const [isOpenBankDialog, setIsOpenBankDialog] = useState(false);
  const [isOpenMerchantDialog, setIsOpenMerchantDialog] = useState(false);
  const [isOpenBillDialog, setIsOpenBillDialog] = useState(false);
  const [rangeDate, setRangeDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
    },
  ]);
  const { userrole } = useSelector((state) => state.user);
  const handleDatePicker = () => {
    setIsOpenDatePicker(((prev) => !prev));
  };
  const handlePickerDialogClose = () => {
    setIsOpenDatePicker(((prev) => !prev));
  };
  const handleBankDialogClose = () => {
    setIsOpenBankDialog(((prev) => !prev));
  };
  const handleMerchantDialogClose = () => {
    setIsOpenMerchantDialog(((prev) => !prev));
  };
  const handleBillDialogClose = () => {
    setIsOpenBillDialog(((prev) => !prev));
  };
  const moveDetail = () => {
    history.push(routes.TRANSACTIONS_DETAIL);
  };
  return (
    <div className={classes.contentRoot}>
      <div className={classes.title}>
        <Typography variant="h4" color="primary">{t('transactions_management')}</Typography>
        <Typography variant="h3" color="primary" className={classes.transactionTitle}>{t('transactions')}</Typography>
      </div>
      <Typography variant="h3" color="primary" className={classes.filterTitle}>{t('filter')}</Typography>
      <div className={classes.filterGroup}>
        {userrole === 'admin'
         && (
         <div role="presentation" className={classes.bankModal} onClick={() => setIsOpenBankDialog(true)}>
           <Typography variant="h5" color="secondary">{t('bank')}</Typography>
           <ExpandMoreIcon />
         </div>
         )}
        <div role="presentation" className={classes.bankModal} onClick={() => setIsOpenBankDialog(true)}>
          <Typography variant="h5" color="secondary">{t('Merchant')}</Typography>
          <ExpandMoreIcon />
        </div>
        {userrole === 'bank'
         && (
         <div role="presentation" className={classes.bankModal} onClick={() => setIsOpenBankDialog(true)}>
           <Typography variant="h5" color="secondary">{t('bill_id')}</Typography>
           <ExpandMoreIcon />
         </div>
         )}
        <div role="presentation" className={classes.dateRangePicker} onClick={handleDatePicker}>
          <Typography variant="h5" color="primary" className={classes.dateText}>
            {moment(rangeDate[0].startDate).format('DD MMM')}
            {' '}
            -
            {' '}
            {moment(rangeDate[0].endDate).format('DD MMM')}
          </Typography>
          <img className={classes.calendarImage} src={CalendarImage} alt="calendar" />
        </div>
        {isOpenDatePicker && (
          <DatePickerDialog onClose={handlePickerDialogClose}>
            <DateRange
              editableDateInputs={false}
              onChange={(item) => { setRangeDate([item.range1]); }}
              moveRangeOnFirstSelection={false}
              ranges={rangeDate}
              showDateDisplay={false}
            />
          </DatePickerDialog>
        )}
        <Button fontSize="16px" width="250px" height="42px" radius="50px">
          {t('search')}
        </Button>
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
          onRowClick={() => moveDetail()}
          rows={transactionrows}
          columns={transactionColumns}
        />
      </div>
      {isOpenBankDialog && (
        <CustomDialog onClose={handleBankDialogClose}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search By ID or Name"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.searchButton}>
            <Button fontSize="16px" width="260px" height="42px" radius="50px">
              {t('search')}
            </Button>
          </div>
          <div className={classes.modalTable}>
            <DataGrid
              page={page}
              onPageChange={(params) => {
                setPage(params.page);
              }}
              hideFooter
              disableColumnMenu
              disableColumnSelector
              sortingOrder={null}
              pageSize={6}
              pagination
              rows={branchModalRows}
              columns={branchModalColumns}
            />
          </div>
        </CustomDialog>
      )}
      {isOpenMerchantDialog && (
        <CustomDialog onClose={handleMerchantDialogClose}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search By ID or Name"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.searchButton}>
            <Button fontSize="16px" width="260px" height="42px" radius="50px">
              {t('search')}
            </Button>
          </div>
          <div className={classes.modalTable}>
            <DataGrid
              page={page}
              onPageChange={(params) => {
                setPage(params.page);
              }}
              hideFooter
              disableColumnMenu
              disableColumnSelector
              sortingOrder={null}
              pageSize={6}
              pagination
              rows={branchModalRows}
              columns={branchModalColumns}
            />
          </div>
        </CustomDialog>
      )}
      {isOpenBillDialog && (
        <CustomDialog onClose={handleBillDialogClose}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search By Bill ID"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.searchButton}>
            <Button fontSize="16px" width="260px" height="42px" radius="50px">
              {t('search')}
            </Button>
          </div>
          <div className={classes.modalTable}>
            <DataGrid
              page={page}
              onPageChange={(params) => {
                setPage(params.page);
              }}
              hideFooter
              disableColumnMenu
              disableColumnSelector
              sortingOrder={null}
              pageSize={6}
              pagination
              rows={branchModalRows}
              columns={branchModalColumns}
            />
          </div>
        </CustomDialog>
      )}
    </div>
  );
}

export default Transactions;
