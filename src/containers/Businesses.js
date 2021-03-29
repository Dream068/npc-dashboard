import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import SchoolsImage from '../assets/schools.png';
import CinemasImage from '../assets/cinemas.png';
import BusImage from '../assets/bus.png';
import ShopsImage from '../assets/shops.png';
import EventsImage from '../assets/events.png';

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
    marginBottom: theme.spacing(8),
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 0 6px #1E417F',
    border: '1px solid #1E417F70',
    borderRadius: '10px',
    padding: '15px 5px',
    height: '300px',
    marginBottom: theme.spacing(1.5),
    cursor: 'pointer',
  },
  image: {
    width: '300px',
    height: '200px',
    objectFit: 'contain',
  },
  containerItem: {
    marginBottom: theme.spacing(2),
  },
  pagination: {
    alignSelf: 'center',
    '& .MuiPaginationItem-page': {
      color: theme.palette.primary.main,
    },
  },
}));

function Businesses() {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div className={classes.contentRoot}>
      <div className={classes.title}>
        <Typography variant="h4" color="primary">{t('businesses_management')}</Typography>
        <Typography variant="h3" color="primary" className={classes.transactionTitle}>{t('businesses')}</Typography>
      </div>
      <div className={classes.containerItem}>
        <Grid container spacing={7}>
          <Grid item xs={12} sm={6}>
            <div className={classes.card}>
              <img className={classes.image} src={SchoolsImage} alt="school" />
              <Typography variant="h2" color="primary">{t('schools')}</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.card}>
              <img className={classes.image} src={CinemasImage} alt="cinema" />
              <Typography variant="h2" color="primary">{t('cinemas')}</Typography>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={classes.containerItem}>
        <Grid container spacing={7}>
          <Grid item xs={12} sm={6}>
            <div className={classes.card}>
              <img className={classes.image} src={BusImage} alt="bus" />
              <Typography variant="h2" color="primary">{t('bus_tickets')}</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.card}>
              <img className={classes.image} src={ShopsImage} alt="shops" />
              <Typography variant="h2" color="primary">{t('shops')}</Typography>
            </div>
          </Grid>
        </Grid>
      </div>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={6}>
          <div className={classes.card}>
            <img className={classes.image} src={EventsImage} alt="event" />
            <Typography variant="h2" color="primary">{t('events')}</Typography>
          </div>
        </Grid>
      </Grid>
      <div className={classes.pagination}>
        <Pagination count={10} variant="outlined" shape="rounded" />
      </div>
    </div>
  );
}

export default Businesses;
