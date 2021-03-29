import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import CircularProgressLib from '@material-ui/core/CircularProgress';
import { makeStyles, createStyles, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
  },
  message: {
    marginBottom: theme.spacing(2),
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: theme.typography.caption2.fontSize,
  },
}));

const TIME_TO_SLOW_CONNECTION = 10000;

const CircularProgress = ({ innerRef, removeMessages, ...props }) => {
  const classes = useStyles(props);
  const theme = useTheme();
  useEffect(() => {
    const timer = setTimeout(() => {
    }, TIME_TO_SLOW_CONNECTION);
    return () => clearTimeout(timer);
  }, []);

  const { color } = props;
  let variantColor = color;
  if (theme.palette.type === 'dark' && color === 'primary') {
    variantColor = 'secondary';
  }
  return (
    <>
      <CircularProgressLib
        {...props}
        color={variantColor}
        ref={innerRef}
        classes={{ root: classes.root }}
      />
    </>
  );
};

CircularProgress.defaultProps = {
  innerRef: null,
  color: 'primary',
  removeMessages: false,
};

CircularProgress.propTypes = {
  innerRef: PropTypes.oneOfType([
    // Either a function
    PropTypes.func,
    // Or the instance of a DOM native element (see the note about SSR)
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  color: PropTypes.string,
  removeMessages: PropTypes.bool,
};

export default CircularProgress;
