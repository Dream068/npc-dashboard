import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { Typography, TextField } from '@material-ui/core';
import Button from '../components/Button';
import UsersIcon from '../assets/users.png';
import MasterCardImage from '../assets/mastercard.png';

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
  visalogoImage: {
    width: '50%',
  },
  visalogo: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(10, 0, 10, 0),
  },
  title: {
    marginTop: theme.spacing(4),
  },
  applyNow: {
    width: '33px',
    height: '33px',
    margin: '0 20px 0 -30px',
  },
  apply: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(5),
  },
  inputLabel: {
    marginBottom: theme.spacing(1),
  },
  card: {
    display: 'flex',
    height: '300px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 0 12px #00000035',
    border: '1px solid #70707015',
    borderRadius: '10px',
    padding: '15px 5px',
    marginBottom: theme.spacing(1.5),
    '& .MuiFormControl-root': {
      width: '100%',
    },
    '& .MuiInputBase-inputMultiline': {
      height: '100% !important',
      lineHeight: 1.2,
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
      height: '300px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
  },
}));

function VisaMasterCard() {
  const classes = useStyles();
  const { t } = useTranslation();
  const [billReason, setBillReason] = useState('');
  return (
    <div className={classes.contentRoot}>
      <div className={classes.title}>
        <Typography variant="h4" color="primary">{t('mastercard_management')}</Typography>
        <Typography variant="h3" color="primary" className={classes.transactionTitle}>{t('apply_for_visa')}</Typography>
      </div>
      <div className={classes.visalogo}>
        <img className={classes.visalogoImage} src={MasterCardImage} alt="visa" />
      </div>
      <Typography variant="h5" color="primary" className={classes.inputLabel}>{t('describe_your_business')}</Typography>
      <div className={classes.card}>
        <TextField
          className={classes.textField}
          variant="outlined"
          multiline
          value={billReason}
          onChange={(e) => setBillReason(e.target.value)}
          InputLabelProps={{
            shrink: false,
          }}
        />
      </div>
      <div className={classes.apply}>
        <Button fontSize="20px" width="300px" height="60px" radius="50px">
          <img className={classes.applyNow} src={UsersIcon} alt="apply" />
          {t('apply_now')}
        </Button>
      </div>
    </div>
  );
}

export default VisaMasterCard;
