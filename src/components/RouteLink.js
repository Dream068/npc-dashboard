import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { blue } from '@material-ui/core/colors';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    padding: theme.spacing(0),
    fontSize: theme.spacing(1.8),
    color: blue[500],
    fontWeight: 'bold',
    [theme.breakpoints.down('xxs')]: {
      fontSize: theme.typography.caption.fontSize,
      padding: theme.spacing(0.5),
    },
  },
}));

const RouteLinkRef = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

const RouteLink = ({ ...props }) => {
  const classes = useStyles(props);
  return (
    <Link
      component={RouteLinkRef}
      href="/"
      classes={{ root: classes.root }}
      {...props}
    />
  );
};
export default RouteLink;
