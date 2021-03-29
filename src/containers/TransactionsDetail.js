import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '../components/Button';
import PrintImage from '../assets/print.png';
import BarcodeImage from '../assets/barcode.png';
import RefundsImage from '../assets/refunds.png';

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
  printSample: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    display: 'flex',
    justifyContent: 'flex-end',
  },
  printImage: {
    width: '40px',
    height: '40px',
    margin: '0 20px 0 -30px',
  },
  barcodeImage: {
    width: '250px',
    height: '250px',
  },
  card: {
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '20px',
    padding: theme.spacing(4, 4),
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(4),
  },
  bottomcard: {
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '20px',
    padding: theme.spacing(3, 4),
    display: 'flex',
    flexDirection: 'column',
    minHeight: '300px',
  },
  barcodeRight: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  barcodeLeftRow: {
    display: 'flex',
    marginBottom: theme.spacing(2),
  },
  barcodeRightRow: {
    display: 'flex',
  },
  cardTitle: {
    display: 'flex',
    alignSelf: 'center',
    marginBottom: theme.spacing(3),
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(5),
  },
  refundsImage: {
    width: '40px',
    height: '40px',
    margin: '0 20px 0 -20px',
  },
  refund: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

function TransactionsDetail(props) {
  const classes = useStyles();
  const { t } = useTranslation();
  const { userrole } = useSelector((state) => state.user);
  return (
    <div className={classes.contentRoot}>
      <div className={classes.title}>
        <Typography variant="h4" color="primary">{t('transactions_management')}</Typography>
        <Typography variant="h3" color="primary" className={classes.transactionTitle}>{t('transactions_detail')}</Typography>
      </div>
      <div className={classes.printSample}>
        <Button fontSize="20px" width="300px" height="55px" radius="50px">
          <img className={classes.printImage} src={PrintImage} alt="print" />
          {t('print_invoice')}
        </Button>
      </div>
      <div className={classes.card}>
        <div className={classes.barcodeLeft}>
          <div className={classes.barcodeLeftRow}>
            <Typography variant="h4" color="primary" style={{ fontWeight: 'bold' }}>
              {t('amount')}
              :
            </Typography>
            <Typography variant="h4" color="primary">ETB12,000</Typography>
          </div>
          <div className={classes.barcodeLeftRow}>
            <Typography variant="h4" color="primary" style={{ fontWeight: 'bold' }}>
              {t('created_date')}
              :
            </Typography>
            <Typography variant="h4" color="primary">Jan 21, 2020</Typography>
          </div>
          <div className={classes.barcodeLeftRow}>
            <Typography variant="h4" color="primary" style={{ fontWeight: 'bold' }}>
              {t('due_date')}
              :
            </Typography>
            <Typography variant="h4" color="primary">Jan 21, 2020</Typography>
          </div>
          <div className={classes.barcodeLeftRow}>
            <Typography variant="h4" color="primary" style={{ fontWeight: 'bold' }}>
              {t('payment_date')}
              :
            </Typography>
            <Typography variant="h4" color="primary">Jan 21, 2020</Typography>
          </div>
          <div className={classes.barcodeLeftRow}>
            <Typography variant="h4" color="primary" style={{ fontWeight: 'bold' }}>
              {t('bank')}
              :
            </Typography>
            <Typography variant="h4" color="primary">Abyssina Bank</Typography>
          </div>
          <div className={classes.barcodeLeftRow}>
            <Typography variant="h4" color="primary" style={{ fontWeight: 'bold' }}>
              {t('branch')}
              :
            </Typography>
            <Typography variant="h4" color="primary">Leyukan Birhanu</Typography>
          </div>
          <div className={classes.barcodeLeftRow}>
            <Typography variant="h4" color="primary" style={{ fontWeight: 'bold' }}>
              {t('bank_ref')}
              :
            </Typography>
            <Typography variant="h4" color="primary">FT128912869</Typography>
          </div>
        </div>
        <div className={classes.barcodeRight}>
          <div className={classes.barcodeRightRow}>
            <Typography variant="h4" color="primary" style={{ fontWeight: 'bold' }}>
              {t('bill_no')}
              :
            </Typography>
            <Typography variant="h4" color="primary">128913</Typography>
          </div>
          <img className={classes.barcodeImage} src={BarcodeImage} alt="barcode" />
        </div>
      </div>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <div className={classes.bottomcard}>
            <div className={classes.cardTitle}>
              <Typography variant="h4" color="primary" style={{ fontWeight: 'bold' }}>{t('biller_details')}</Typography>
            </div>
            <div className={classes.barcodeLeftRow}>
              <Typography variant="h4" color="primary" style={{ fontWeight: 'bold' }}>
                {t('company_name')}
                :
              </Typography>
            </div>
            <div className={classes.barcodeLeftRow}>
              <Typography variant="h4" color="primary" style={{ fontWeight: 'bold' }}>
                {t('payment_creator')}
                :
              </Typography>
              <Typography variant="h4" color="primary">Bersufekad Amare</Typography>
            </div>
            <div className={classes.barcodeLeftRow}>
              <Typography variant="h4" color="primary" style={{ fontWeight: 'bold' }}>
                {t('bank_account')}
                :
              </Typography>
            </div>
            <div className={classes.barcodeLeftRow}>
              <Typography variant="h4" color="primary" style={{ fontWeight: 'bold' }}>
                {t('phone')}
                :
              </Typography>
            </div>
            <div className={classes.barcodeLeftRow}>
              <Typography variant="h4" color="primary" style={{ fontWeight: 'bold' }}>
                {t('email')}
                :
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.bottomcard}>
            <div className={classes.cardTitle}>
              <Typography variant="h4" color="primary" style={{ fontWeight: 'bold' }}>{t('payer_details')}</Typography>
            </div>
            <div className={classes.barcodeLeftRow}>
              <Typography variant="h4" color="primary" style={{ fontWeight: 'bold' }}>
                {t('company_name')}
                :
              </Typography>
              <Typography variant="h4" color="primary">Yeabsira Gashaw Abebe</Typography>
            </div>
            <div className={classes.barcodeLeftRow}>
              <Typography variant="h4" color="primary" style={{ fontWeight: 'bold' }}>
                {t('phone')}
                :
              </Typography>
              <Typography variant="h4" color="primary">+251923930947</Typography>
            </div>
            <div className={classes.barcodeLeftRow}>
              <Typography variant="h4" color="primary" style={{ fontWeight: 'bold' }}>
                {t('email')}
                :
              </Typography>
              <Typography variant="h4" color="primary">yeab13me@gmail.com</Typography>
            </div>
          </div>
        </Grid>
      </Grid>
      {userrole === 'merchant' && props.location.state === 'refund'
      && (
      <div className={classes.buttonGroup}>
        <div role="presentation" className={classes.refund}>
          <Button fontSize="20px" width="300px" height="55px" radius="50px" color="#0FC400">
            <img className={classes.refundsImage} src={RefundsImage} alt="import" />
            {t('accept_refund')}
          </Button>
        </div>
        <div role="presentation" className={classes.refund}>
          <Button fontSize="20px" width="300px" height="55px" radius="50px" color="#FFC400">
            <img className={classes.refundsImage} src={RefundsImage} alt="import" />
            {t('review_refund')}
          </Button>
        </div>
        <div role="presentation" className={classes.refund}>
          <Button fontSize="20px" width="300px" height="55px" radius="50px" color="#FF0000">
            <img className={classes.refundsImage} src={RefundsImage} alt="import" />
            {t('reject_refund')}
          </Button>
        </div>
      </div>
      )}
    </div>
  );
}

export default TransactionsDetail;
