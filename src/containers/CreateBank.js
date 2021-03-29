import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';

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
}));

function CreateBank() {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div className={classes.contentRoot}>
      <div className={classes.title}>
        <Typography variant="h4" color="primary">{t('bank_management')}</Typography>
        <Typography variant="h3" color="primary" className={classes.transactionTitle}>{t('bank_create')}</Typography>
      </div>
    </div>
  );
}

export default CreateBank;
