import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestUserDetail } from '../../store/auth';
import EditForm from '../forms/EditForm';

function UserEdit(props) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const { id } = props.match.params;
  useEffect(() => {
    dispatch(requestUserDetail(id, token));
  }, [dispatch]);
  const data = useSelector((state) => state.userDetail);

  if (data) {
    return <EditForm data={data} />;
  }
}

export default memo(UserEdit);
