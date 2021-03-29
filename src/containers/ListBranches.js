import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { DataGrid } from '@material-ui/data-grid';
import Select from '../components/Select';
import Button from '../components/Button';
import AddImage from '../assets/add.png';
import FilterImage from '../assets/filter.png';
import { bankOptions, listBranchColumns, listBranchRows } from '../constants/mockdata';

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
    marginBottom: theme.spacing(3),
  },
  createMerchant: {
    display: 'flex',
    justifyContent: 'flex-end',
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
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
  filterHeader: {
    display: 'flex',
    alignItems: 'center',
  },
  filterGroup: {
    display: 'flex',
    width: '100%',
    marginTop: theme.spacing(5),
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(5),
  },
  bankSelect: {
    marginRight: '50px',
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
  addImage: {
    width: '30px',
    height: '30px',
    margin: '0 20px 0 -20px',
  },
  filterImage: {
    width: '26px',
    height: '26px',
    marginRight: theme.spacing(2),
  },
}));

function ListBranches() {
  const classes = useStyles();
  const { t } = useTranslation();
  const [page, setPage] = React.useState(1);
  return (
    <div className={classes.contentRoot}>
      <div className={classes.title}>
        <Typography variant="h4" color="primary">{t('branch_management')}</Typography>
        <Typography variant="h3" color="primary" className={classes.transactionTitle}>{t('branch_list')}</Typography>
      </div>
      <div className={classes.createMerchant}>
        <Button fontSize="24px" width="320px" height="60px" radius="50px">
          <img className={classes.addImage} src={AddImage} alt="add" />
          {t('create_branch')}
        </Button>
      </div>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder={t('search_by_branch')}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
      <div className={classes.filterHeader}>
        <img className={classes.filterImage} src={FilterImage} alt="filter" />
        <Typography variant="h5" color="primary">{t('filter')}</Typography>
      </div>
      <div className={classes.filterGroup}>
        <Select
          options={bankOptions}
          placeholder={t('by_branch')}
          className={classes.merchantSelect}
        />
        <Select
          options={bankOptions}
          placeholder={t('active')}
          className={classes.merchantSelect}
        />
        <Button fontSize="16px" width="260px" height="42px" radius="50px">
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
          rows={listBranchRows}
          columns={listBranchColumns}
        />
      </div>
    </div>
  );
}

export default ListBranches;
