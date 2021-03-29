import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import WarningIcon from '@material-ui/icons/Warning';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import Button from '../components/Button';
import DownloadImage from '../assets/download.png';
import ImportImage from '../assets/import.png';
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
  downloadSample: {
    marginTop: theme.spacing(6),
    display: 'flex',
    justifyContent: 'flex-end',
  },
  importExcel: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(20),
  },
  uploadBulk: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
    '& .MuiSvgIcon-root': {
      color: theme.palette.secondary.main,
      marginRight: theme.spacing(2),
    },
  },
  downloadImage: {
    width: '40px',
    height: '40px',
    margin: '0 20px 0 -30px',
  },
  importImage: {
    width: '60px',
    height: '60px',
    margin: '0 50px 0 -50px',
  },
}));

function BranchBulk() {
  const classes = useStyles();
  const { t } = useTranslation();
  const moveImportedBulk = () => {
    history.push(routes.IMPORTED_BULK);
  };
  return (
    <div className={classes.contentRoot}>
      <div className={classes.title}>
        <Typography variant="h4" color="primary">{t('branch_management')}</Typography>
        <Typography variant="h3" color="primary" className={classes.transactionTitle}>{t('create_branch_bulk')}</Typography>
      </div>
      <div className={classes.downloadSample}>
        <Button fontSize="20px" width="300px" height="60px" radius="50px">
          <img className={classes.downloadImage} src={DownloadImage} alt="download" />
          {t('download_sample')}
        </Button>
      </div>
      <div role="presentation" className={classes.importExcel} onClick={moveImportedBulk}>
        <Button fontSize="20px" width="480px" height="80px" radius="50px">
          <img className={classes.importImage} src={ImportImage} alt="import" />
          {t('import_excel')}
        </Button>
      </div>
      <div className={classes.uploadBulk}>
        <WarningIcon />
        <Typography variant="h4" color="secondary">{t('upload_bulk_branch')}</Typography>
      </div>
    </div>
  );
}

export default BranchBulk;
