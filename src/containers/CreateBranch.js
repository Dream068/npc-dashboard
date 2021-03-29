import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { TextField, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Select from '../components/Select';
import Button from '../components/Button';
import { branchOptions } from '../constants/mockdata';
import DownloadImage from '../assets/download.png';
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
    marginBottom: theme.spacing(6),
  },
  branchContent: {
    padding: '0 50px',
  },
  inputGroup: {
    marginTop: theme.spacing(5),
  },
  inputRow: {
    display: 'flex',
    marginBottom: theme.spacing(2),
    '& .MuiFormControl-root': {
      width: '100%',
    },
    '& .MuiOutlinedInput-input': {
      padding: '15px 20px',
      fontSize: theme.spacing(2),
      color: theme.palette.primary.main,
    },
    '& .MuiInputLabel-root': {
      display: 'none',
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: theme.spacing(1),
      '&:hover': {
        display: 'block',
      },
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: `1px solid ${theme.palette.primary.main} !important`,
    },
  },
  inputLabel: {
    marginBottom: theme.spacing(1),
  },
  continue: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(12),
  },
  downloadSample: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(3, 6),
  },
  downloadImage: {
    width: '40px',
    height: '40px',
    margin: '0 20px 0 -30px',
  },
}));

function CreateBranch() {
  const classes = useStyles();
  const { t } = useTranslation();
  const [branchName, setBranchName] = useState('');
  const [branchAddress, setBranchAddress] = useState('');
  const [branchManager, setBranchManager] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const moveBranchBulk = () => {
    history.push(routes.BRANCH_BULK);
  };
  return (
    <div className={classes.contentRoot}>
      <div className={classes.title}>
        <Typography variant="h4" color="primary">{t('branch_management')}</Typography>
        <Typography variant="h3" color="primary" className={classes.transactionTitle}>{t('branches_create')}</Typography>
      </div>
      <div className={classes.downloadSample}>
        <Button fontSize="20px" width="270px" height="60px" radius="50px" onClick={moveBranchBulk}>
          <img className={classes.downloadImage} src={DownloadImage} alt="download" />
          {t('bulk_import')}
        </Button>
      </div>
      <div className={classes.branchContent}>
        <Typography variant="subtitle2" color="primary">{t('create_branch')}</Typography>
        <Typography variant="h5" color="secondary" className={classes.transactionTitle}>{t('enter_all_branch')}</Typography>
        <div className={classes.inputGroup}>
          <div className={classes.inputRow}>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h5" color="primary" className={classes.inputLabel}>{t('branch_name*')}</Typography>
                <TextField
                  className={classes.textField}
                  variant="outlined"
                  value={branchName}
                  onChange={(e) => setBranchName(e.target.value)}
                  InputLabelProps={{
                    shrink: false,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h5" color="primary" className={classes.inputLabel}>{t('branch_address')}</Typography>
                <TextField
                  className={classes.textField}
                  variant="outlined"
                  value={branchAddress}
                  onChange={(e) => setBranchAddress(e.target.value)}
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
                <Typography variant="h5" color="primary" className={classes.inputLabel}>{t('branch_manager')}</Typography>
                <TextField
                  className={classes.textField}
                  variant="outlined"
                  value={branchManager}
                  onChange={(e) => setBranchManager(e.target.value)}
                  InputLabelProps={{
                    shrink: false,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h5" color="primary" className={classes.inputLabel}>{t('phone_number*')}</Typography>
                <TextField
                  className={classes.textField}
                  variant="outlined"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
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
                <Typography variant="h5" color="primary" className={classes.inputLabel}>{t('email')}</Typography>
                <TextField
                  className={classes.textField}
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  InputLabelProps={{
                    shrink: false,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h5" color="primary" className={classes.inputLabel}>{t('branch_type')}</Typography>
                <Select
                  className={classes.bankSelect}
                  options={branchOptions}
                  placeholder="Grade - |"
                  borderRadius="8px"
                />
              </Grid>
            </Grid>
          </div>
          <div className={classes.continue}>
            <Button fontSize="22px" radius="50px" width="280px" height="60px">
              {t('continue')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateBranch;
