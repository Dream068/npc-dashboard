import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 0 12px #00000035',
    border: '1px solid #70707015',
    borderRadius: '10px',
    padding: '15px 5px',
    marginBottom: theme.spacing(1.5),
  },
}));

const Card = ({
  children,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      {children}
    </div>
  );
};

Card.defaultProps = {
  children: null,
};
Card.propTypes = {
  children: PropTypes.node,
};
export default Card;
