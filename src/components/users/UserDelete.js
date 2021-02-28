import React, {memo,useEffect} from 'react'
import { useDispatch,  useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import {requestUserDelete} from '../../store/auth'
import Container from '@material-ui/core/Container';

function UserDelete (props) {
    const dispatch = useDispatch();
    const token = useSelector(state => state.token);
    const id = props.match.params.id;
    return(
    <Container component="main" maxWidth="xs">
    <div> do you want to delete </div>
    <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={() => deleteUser(id,dispatch,token)}>
            Confirm
    </Button>
    </Container>
    ) 
};
function deleteUser(id,dispatch,token){
    dispatch(requestUserDelete(id,token));
}
export default memo(UserDelete);