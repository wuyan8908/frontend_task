/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { requestUserDelete } from '../../store/auth';
import history from '../../history';

function UserDelete(props) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const { id } = props.match.params;
  const [open, setOpen] = React.useState(true);
  const deleteUser = () => {
    dispatch(requestUserDelete(id, token));
  };

  const handleClose = () => {
    setOpen(false);
    history.push('/users');
  };
  const title = 'Are you sure to delete this user?';
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            It will permently delete the user.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={deleteUser} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default memo(UserDelete);
