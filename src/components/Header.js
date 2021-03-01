import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '../store/auth';
import history from '../history';

async function dosignOut(dispatch) {
  dispatch(signOut());
  history.push('/');
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const isSignedIn = useSelector((state) => state.isSignedIn);
  const dispatch = useDispatch();
  const classes = useStyles();
  if (!isSignedIn) {
    return null;
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Yan Wu - React Task
          </Typography>
          <Button color="inherit" onClick={() => dosignOut(dispatch)}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default memo(Header);
