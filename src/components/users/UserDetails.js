/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { requestUserDetail } from '../../store/auth';
import './UserDetails.css';

function UserDetails(props) {
  const token = useSelector((state) => state.token);
  const { id } = props.match.params;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestUserDetail(id, token));
    // eslint-disable-next-line
  }, [dispatch]);
  const data = useSelector((state) => state.userDetail);
  if (data) {
    return (
      <Container className="itemDetail" maxWidth="xs">
        <Card>
          <CardContent>
            <div id="DetailList" key={data.users.id}>
              <p>
                <span>id: </span> {data.users.id}
              </p>
              <p>
                <span>email: </span> {data.users.email}
              </p>
              <p>
                <span>first_name: </span> {data.users.first_name}
              </p>
              <p>
                <span>last_name: </span> {data.users.last_name}
              </p>
              <p>
                <span>jobs_count: </span> {data.users.jobs_count}
              </p>
              <p>
                <span>active: </span> {data.users.active ? <CheckIcon /> : <ClearIcon />}
              </p>
              <p>
                <span>slack_username:</span> {data.users.slack_username}
              </p>
            </div>
          </CardContent>
          <CardActions>
            <Link to="/users">Back to List</Link>
          </CardActions>
        </Card>
      </Container>
    );
  }
}

export default memo(UserDetails);
