import React from 'react';
import { toast } from 'react-toastify';
import { ToastState } from '../constants/States';

toast.configure();

const { toastStatus } = ToastState;

const toastBody = ({ type, info }) => (
  <div className="toast-body">
    <div className="toast-icon d-flex">
      <div className={`toast-heading color-${toastStatus[type]}`}>{type}</div>
    </div>
    <div className="toast-content-wrapper">
      <div className="toast-content">{info}</div>
    </div>
  </div>
);

const handleSuccess = (info, type) => {
  toast.success(toastBody({ type: type || 'SUCCESS', info }), {
    containerId: 'A', position: toast.POSITION.TOP_RIGHT, className: 'toast-info', autoClose: 5000,
  });
};

const handleInfo = (info) => {
  toast.info(toastBody({ type: 'INFORMATION', info }), {
    containerId: 'B', position: toast.POSITION.TOP_RIGHT, className: 'toast-info', autoClose: 5000,
  });
};

const handleWarning = (info) => {
  toast.warn(toastBody({ type: 'WARNING', info }), {
    containerId: 'C', position: toast.POSITION.BOTTOM_RIGHT, className: 'toast-warning', autoClose: false, draggable: false, closeOnClick: false,
  });
};

const handleError = (info) => {
  toast.error(toastBody({ type: 'ERROR', info }), {
    containerId: 'D', position: toast.POSITION.BOTTOM_RIGHT, className: 'toast-error', autoClose: 5000,
  });
};

export {
  handleError, handleWarning, handleInfo, handleSuccess,
};
