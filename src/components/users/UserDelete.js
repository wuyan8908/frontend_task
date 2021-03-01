/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { requestUserDelete } from '../../store/auth';

function deleteUser(id, dispatch, token) {
  dispatch(requestUserDelete(id, token));
}
function UserDelete(props) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const { id } = props.match.params;
  return (
    <Container component="main" maxWidth="xs">
      <div> do you want to delete </div>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={() => deleteUser(id, dispatch, token)}
      >
        Confirm
      </Button>
    </Container>
  );
}

export default memo(UserDelete);
