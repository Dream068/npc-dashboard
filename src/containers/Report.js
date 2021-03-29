import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import Select from '../components/Select';
import Button from '../components/Button';
import ExportImage from '../assets/download.png';
import DownloadInvoice from '../assets/invoice.png';
import { bankOptions, reportColumns, reportRows } from '../constants/mockdata';

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
    marginBottom: theme.spacing(1),
  },
  filterGroup: {
    display: 'flex',
    width: '70%',
    alignSelf: 'center',
    justifyContent: 'space-around',
    marginBottom: theme.spacing(5),
  },
  bankSelect: {
    marginRight: '50px',
    width: '10%',
  },
  merchantSelect: {
    marginRight: '50px',
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
  importImage: {
    width: '33px',
    height: '33px',
    margin: '0 20px 0 -20px',
  },
}));

function Report() {
  const classes = useStyles();
  const { t } = useTranslation();
  const [page, setPage] = React.useState(1);
  return (
    <div className={classes.contentRoot}>
      <div className={classes.title}>
        <Typography variant="h4" color="primary">{t('report_management')}</Typography>
        <Typography variant="h3" color="primary" className={classes.transactionTitle}>{t('report')}</Typography>
      </div>
      <div className={classes.filterGroup}>
        <div style={{ marginTop: '-16px' }}>
          <Typography variant="h5" color="secondary">{t('choose_transaction')}</Typography>
          <Select
            options={bankOptions}
            placeholder="02 Jan - 03 Jan"
            className={classes.merchantSelect}
          />
        </div>
        <Button fontSize="16px" width="180px" height="42px" radius="50px">
          <img className={classes.importImage} src={ExportImage} alt="import" />
          {t('export')}
        </Button>
        <Button fontSize="16px" width="320px" height="42px" radius="50px">
          <img className={classes.importImage} src={DownloadInvoice} alt="invoice" />
          {t('export_daily_report')}
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
          rows={reportRows}
          columns={reportColumns}
        />
      </div>
    </div>
  );
}

export default Report;
