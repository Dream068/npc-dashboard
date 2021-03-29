import React from 'react';
import { useTime } from 'react-timer-hook';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Digit from './Digit';

const useStyles = makeStyles((theme) => ({
  timerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '350px',
    borderRadius: '10px',
    marginBottom: theme.spacing(4),
    background: '#404549',
    padding: theme.spacing(3, 3),
  },
  separtorContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'flex-end',
    margin: theme.spacing(0, 0, 1, 0),
  },
  separtor: {
    display: 'inline-block',
    width: '6px',
    height: '6px',
    backgroundColor: '#404549',
    borderRadius: '6px',
    margin: '5px 0',
  },
}));

function Timer({ days }) {
  const {
    seconds,
    minutes,
    hours,
  } = useTime({ });
  const classes = useStyles();
  return (
    <div style={{ textAlign: 'center' }}>
      <div className={classes.timerContainer}>
        {days !== undefined ? <Digit value={days} title="DAYS" addSeparator /> : null}
        {days !== undefined ? (
          <span className={classes.separtorContainer}>
            <span className={classes.separtor} />
            <span className={classes.separtor} />
          </span>
        ) : null}
        <Digit value={hours} title="HOURS" addSeparator />
        <span className={classes.separtorContainer}>
          <span className={classes.separtor} />
          <span className={classes.separtor} />
        </span>
        <Digit value={minutes} title="MINUTES" addSeparator />
        <span className={classes.separtorContainer}>
          <span className={classes.separtor} />
          <span className={classes.separtor} />
        </span>
        <Digit value={seconds} title="SECONDS" />
      </div>
    </div>
  );
}
Timer.defaultProps = {
  days: 0,
};

Timer.propTypes = {
  days: PropTypes.number,
};
export default Timer;
