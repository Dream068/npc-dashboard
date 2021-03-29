import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
  dialogContainer: {
    '& .MuiDialogContent-root': {
      width: '700px',
      height: '80vh',
    },
  },
  dialogContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const CustomDialog = ({
  onClose, children,
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const { t } = useTranslation();
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="lg"
    >
      <div className={classes.dialogContainer}>
        <DialogContent className={classes.dialogContent}>
          {children}
        </DialogContent>
      </div>
    </Dialog>
  );
};

CustomDialog.defaultProps = {
  children: null,
  onClose: null,
};

CustomDialog.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
};

export default CustomDialog;
