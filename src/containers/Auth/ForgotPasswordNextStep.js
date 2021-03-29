import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { history } from '../../config/store';
import routes from '../../constants/routes';
import Button from '../../components/Button';

const useStyles = makeStyles((theme) => ({
  contentRoot: {
    flex: '1 1 auto',
    display: 'flex',
    overflow: 'auto',
    padding: theme.spacing(6),
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    '& .MuiOutlinedInput-input': {
      padding: '25px 35px',
      fontSize: theme.spacing(3.5),
      color: theme.palette.primary.main,
    },
    '& .MuiInputLabel-root': {
      display: 'none',
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: theme.spacing(2.5),
      minWidth: '550px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      boxShadow: '0 0 6px #00000016',
      border: '1px solid #70707015',
    },
    [theme.breakpoints.down('xxs')]: {
      overflowX: 'hidden',
    },
    [theme.breakpoints.down('md')]: {
      flex: 1,
    },
  },
  logoGroup: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '288px',
    justifyContent: 'flex-start',
    margin: '0 auto',
  },
  inputGroup: {
    marginTop: theme.spacing(7),
  },
  textField: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2.5),
  },
  label: {
    '&$focusedLabel': {
      color: theme.palette.grey[400],
    },
    '&$erroredLabel': {
      color: theme.palette.error,
    },
  },
  passwordButton: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
}));

function ForgotPasswordNextStep() {
  const classes = useStyles();
  const { t } = useTranslation();
  const [userName, setUserName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const resetHandleChange = () => {
    history.push(routes.SIGN_IN);
  };
  return (
    <div className={classes.contentRoot}>
      <div className={classes.logoGroup}>
        <Typography variant="h1" color="primary">{t('NPC')}</Typography>
        <Typography variant="h5" color="primary">{t('national')}</Typography>
      </div>
      <div className={classes.inputGroup}>
        <div className={classes.inputItem}>
          <Typography variant="h5" color="primary">{t('username')}</Typography>
          <TextField
            className={classes.textField}
            variant="outlined"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            InputLabelProps={{
              shrink: false,
              classes: {
                root: classes.label,
              },
            }}
          />
        </div>
        <div className={classes.inputItem}>
          <Typography variant="h5" color="primary">{t('newPassword')}</Typography>
          <TextField
            className={classes.textField}
            variant="outlined"
            value={newPassword}
            type="password"
            onChange={(e) => setNewPassword(e.target.value)}
            InputLabelProps={{
              shrink: false,
              classes: {
                root: classes.label,
              },
            }}
          />
        </div>
        <div className={classes.inputItem}>
          <Typography variant="h5" color="primary">{t('confirmPassword')}</Typography>
          <TextField
            className={classes.textField}
            variant="outlined"
            value={confirmPassword}
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            InputLabelProps={{
              shrink: false,
              classes: {
                root: classes.label,
              },
            }}
          />
        </div>
      </div>
      <div className={classes.passwordButton}>
        <Button fontSize="26px" width="400px" height="70px" radius="50px" onClick={resetHandleChange}>
          {t('resetPassword')}
        </Button>
      </div>
    </div>
  );
}

export default ForgotPasswordNextStep;
