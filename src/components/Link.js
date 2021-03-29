import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import config from '../config/config';
import versionConstants from '../constants/version';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    padding: theme.spacing(0),
    color: blue[500],
    textDecoration: 'none',
    [theme.breakpoints.down('xxs')]: {
      fontSize: theme.typography.caption.fontSize,
      padding: theme.spacing(0.5),
    },
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const Link = ({ href, children, ...props }) => {
  const classes = useStyles(props);
  const onClick = (event) => {
    event.preventDefault();
  };
  return (
    <a
      href={href}
      className={classes.root}
      onClick={(config.VERSION !== versionConstants.WEBAPP ? onClick : undefined)}
      {...props}
    >
      {children}
    </a>
  );
};

Link.defaultProps = {
  children: null,
  href: '',
};

Link.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
};
export default Link;
