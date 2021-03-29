import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { TextField, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { history } from '../../config/store';
import routes from '../../constants/routes';
import Button from '../../components/Button';
import { login } from '../../actions/authAction';
import { setUserRole } from '../../actions/user-action-type';

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
  loginButton: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  forgetPass: {
    transform: 'translate(-190px, 0)',
    cursor: 'pointer',
  },
}));

function SignIn() {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.auth);
  const {loading} = useSelector((state) => state.auth);
  const [organizationId, setOrganizationId] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const submitHandler = () => {
    const loginData = {
      username: userName,
      password: password 
    };
    dispatch(login(loginData))
  };
  const moveForget = () => {
    history.push(routes.FORGOT_PASSWORD);
  };
  return (
    <div className={classes.contentRoot}>
      <div className={classes.logoGroup}>
        <Typography variant="h1" color="primary">{t('NPC')}</Typography>
        <Typography variant="h5" color="primary">{t('national')}</Typography>
      </div>
      <div className={classes.inputGroup}>
        <div className={classes.inputItem}>
          <Typography variant="h5" color="primary">{t('organizationId')}</Typography>
          <TextField
            className={classes.textField}
            variant="outlined"
            value={organizationId}
            onChange={(e) => setOrganizationId(e.target.value)}
            InputLabelProps={{
              shrink: false,
              classes: {
                root: classes.label,
              },
            }}
          />
        </div>
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
          <Typography variant="h5" color="primary">{t('password')}</Typography>
          <TextField
            className={classes.textField}
            variant="outlined"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            InputLabelProps={{
              shrink: false,
              classes: {
                root: classes.label,
              },
            }}
          />
        </div>
      </div>
      <div className={classes.loginButton}>
        <Button fontSize="26px" radius="50px" width="400px" height="70px" onClick={submitHandler}>
          {!loading ? t('login') : <CircularProgress color="secondary"/>}
        </Button>
      </div>
      <div role="presentation" className={classes.forgetPass} onClick={moveForget}>
        <Typography variant="h5" color="primary">{t('forgetPassword?')}</Typography>
      </div>
    </div>
  );
}

export default SignIn;
