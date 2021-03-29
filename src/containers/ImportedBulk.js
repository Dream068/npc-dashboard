import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import { importBulkColumns, importBulkRows } from '../constants/mockdata';

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
  allImported: {
    marginBottom: theme.spacing(3),
  },
}));

function ImportedBulk() {
  const classes = useStyles();
  const { t } = useTranslation();
  const [page, setPage] = React.useState(1);
  return (
    <div className={classes.contentRoot}>
      <div className={classes.title}>
        <Typography variant="h4" color="primary">{t('create_payment_management')}</Typography>
        <Typography variant="h3" color="primary" className={classes.transactionTitle}>{t('imported_bulk')}</Typography>
      </div>
      <Typography variant="subtitle1" color="primary" className={classes.allImported}>{t('all_imported_bulk')}</Typography>
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
          rows={importBulkRows}
          columns={importBulkColumns}
        />
      </div>
    </div>
  );
}

export default ImportedBulk;
