import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 5px',
    '&: first-child': {
      marginLeft: 0,
    },
  },
  title: {
    fontSize: '12px',
    marginBottom: '5px',
  },
  digitContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
  },
  singleLeftDigit: {
    position: 'relative',
    display: 'flex',
    flex: '0 1 25%',
    fontSize: '44px',
    backgroundColor: '#000',
    borderRadius: '5px 0 0 5px',
    padding: '0 0 0 5px',
    color: 'white',
    '&:after': {
      position: 'absolute',
      left: '0px',
      right: '0px',
      top: '50%',
      bottom: '50%',
      content: '',
      width: '100%',
      height: '2px',
      backgroundColor: '#232323',
      opacity: '0.4',
    },
  },
  singleRightDigit: {
    position: 'relative',
    display: 'flex',
    flex: '0 1 25%',
    fontSize: '44px',
    backgroundColor: '#000',
    borderRadius: '0 5px 5px 0',
    padding: '0 5px 0 0',
    color: 'white',
    '&:after': {
      position: 'absolute',
      left: '0px',
      right: '0px',
      top: '50%',
      bottom: '50%',
      content: '',
      width: '100%',
      height: '2px',
      backgroundColor: '#232323',
      opacity: '0.4',
    },
  },
}));

export default function Digit({ value, title }) {
  const classes = useStyles();
  const leftDigit = value >= 10 ? value.toString()[0] : '0';
  const rightDigit = value >= 10 ? value.toString()[1] : value.toString();
  return (
    <div className={classes.container}>
      <span className={classes.title}>{title}</span>
      <div className={classes.digitContainer}>
        <span className={classes.singleLeftDigit}>
          {leftDigit}
        </span>
        <span className={classes.singleRightDigit}>
          {rightDigit}
        </span>
      </div>
    </div>
  );
}
Digit.defaultProps = {
  value: null,
  title: null,
};
Digit.propTypes = {
  value: PropTypes.number,
  title: PropTypes.string,
};
