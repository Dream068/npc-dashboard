import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
  dialogTopBar: {
    display: 'flex',
  },
  dialogTitle: {
    overflow: 'hidden',
    display: 'flex',
    flex: '1 1 auto',
    '& h2': {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
  },
  backIcon: {
    fontSize: theme.typography.pxToRem(35),
  },
  dialogContent: {
    display: 'flex',
    padding: '0 20',
  },
}));

const DatePickerDialog = ({
  onClose, children,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const { t } = useTranslation();
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      open={open}
    >
      <DialogContent className={classes.dialogContent}>
        {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

DatePickerDialog.defaultProps = {
  children: null,
  onClose: null,
};

DatePickerDialog.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
};

export default DatePickerDialog;
