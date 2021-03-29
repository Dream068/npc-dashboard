import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import moment from 'moment';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import DatePickerDialog from '../components/DatePickerDialog';
import Select from '../components/Select';
import Button from '../components/Button';
import CalendarImage from '../assets/calendar.png';
import RefundsImage from '../assets/refunds.png';
import { bankOptions, refundsColumns, refundsRows } from '../constants/mockdata';
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
  branchSelect: {
    width: '15%',
  },
  merchantSelect: {
    width: '15%',
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
    width: '200px',
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
  refundsImage: {
    width: '40px',
    height: '40px',
    margin: '0 20px 0 -20px',
  },
  refund: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

function Refunds() {
  const classes = useStyles();
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [isOpenDatePicker, setIsOpenDatePicker] = useState(false);
  const { userrole } = useSelector((state) => state.user);
  const [rangeDate, setRangeDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const handleDatePicker = () => {
    setIsOpenDatePicker(((prev) => !prev));
  };
  const handlePickerDialogClose = () => {
    setIsOpenDatePicker(((prev) => !prev));
  };
  const moveRequestRefund = () => {
    history.push(routes.REQUEST_REFUND);
  };
  const moveDetail = () => {
    const refundData = 'refund';
    if (userrole === 'merchant') {
      history.push(routes.TRANSACTIONS_DETAIL, refundData);
    }
  };
  return (
    <div className={classes.contentRoot}>
      <div className={classes.title}>
        <Typography variant="h4" color="primary">{t('refund_management')}</Typography>
        <Typography variant="h3" color="primary" className={classes.transactionTitle}>{t('refunds')}</Typography>
      </div>
      {userrole === 'branch'
      && (
      <div role="presentation" className={classes.refund} onClick={moveRequestRefund}>
        <Button fontSize="20px" width="300px" height="55px" radius="50px">
          <img className={classes.refundsImage} src={RefundsImage} alt="import" />
          {t('request_refund')}
        </Button>
      </div>
      )}
      <Typography variant="h3" color="primary" className={classes.filterTitle}>{t('filter')}</Typography>
      <div className={classes.filterGroup}>
        {userrole === 'bank'
          && (
          <Select
            className={classes.branchSelect}
            options={bankOptions}
            placeholder={t('branch')}
            height="38px"
          />
          )}
        <Select
          options={bankOptions}
          placeholder={t('Merchant')}
          className={classes.merchantSelect}
          height="38px"
        />
        <Select
          options={bankOptions}
          placeholder={t('bill_id')}
          className={classes.merchantSelect}
          height="38px"
        />
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
              onChange={(item) => setRangeDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={rangeDate}
              showDateDisplay={false}
            />
          </DatePickerDialog>
        )}
        <Button fontSize="16px" width="200px" height="42px" radius="50px">
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
          rows={refundsRows}
          columns={refundsColumns}
        />
      </div>
    </div>
  );
}

export default Refunds;
