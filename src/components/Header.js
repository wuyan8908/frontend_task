import React, {memo} from 'react';
import history from '../history';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {useSelector } from 'react-redux';
import {signOut} from '../store/auth'
import { useDispatch } from 'react-redux';

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

function Header (){
  const isSignedIn = useSelector(state => state.isSignedIn);
  const dispatch = useDispatch();
  const classes = useStyles();
  if(!isSignedIn){
    return null;
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Demo
          </Typography>
          <Button color="inherit" onClick={() => dosignOut(dispatch)}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
    // <div className="ui secondary pointing menu">
    //   <Link to="/" className="item">
    //     Demo
    //   </Link>
    //   <div className="right menu">
    //     <Button  variant="contained" color="primary" onClick={signOut}>
    //       Sign Out
    //     </Button>
    //   </div>
    // </div>
  );
};

async function dosignOut(dispatch) {
  dispatch(signOut());
  history.push('/')
  // try{
  //     await fetch( '/api/v2/users/tokens', {
  //       method: 'DELETE',
  //     })
      
  //   }
  //   catch(error){
  //     console.log(error);
  //   }
  //   finally{
      
  //     history.push('/')
  //   }
}

export default memo(Header);
