import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import Select from '../components/Select';
import Button from '../components/Button';
import { bankOptions } from '../constants/mockdata';

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
  billTop: {
    marginTop: theme.spacing(20),
    display: 'flex',
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '20px',
    alignItems: 'center',
    margin: '0 120px',
  },
  enterBill: {
    display: 'flex',
    padding: '20px 30px',
    alignItems: 'center',
    '& .MuiSvgIcon-root': {
      color: theme.palette.secondary.main,
      marginRight: theme.spacing(2),
    },
  },
  chooseBill: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'space-between',
    padding: '20px 50px',
    '& .MuiSvgIcon-root': {
      color: theme.palette.secondary.main,
    },
  },
  height: {
    width: '1px',
    height: '100%',
    background: theme.palette.primary.main,
    margin: theme.spacing(0, 0, 0, 25),
  },
  billSelect: {
    marginRight: '50px',
    width: '30%',
  },
}));

function Documentation() {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div className={classes.contentRoot}>
      <div className={classes.title}>
        <Typography variant="h4" color="primary">{t('documentation_management')}</Typography>
        <Typography variant="h3" color="primary" className={classes.transactionTitle}>{t('documentation')}</Typography>
      </div>
      <div className={classes.billTop}>
        <div className={classes.enterBill}>
          <EmailIcon />
          <Typography variant="h4" color="secondary" style={{ marginLeft: '10px' }}>{t('enter_email')}</Typography>
        </div>
        <div className={classes.height} />
        <div className={classes.chooseBill}>
          <Select
            options={bankOptions}
            placeholder={t('choose_doc_type')}
            className={classes.billSelect}
          />
          <Button fontSize="20px" width="250px" height="50px" radius="20px">
            {t('send')}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Documentation;
