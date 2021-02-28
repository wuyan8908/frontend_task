import React,{memo,useEffect} from 'react'
import { useDispatch,  useSelector } from 'react-redux';
import { requestUserEdit,requestUserDetail } from '../../store/auth';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import EditForm from '../forms/EditForm'


function UserEdit (props) {

    const dispatch = useDispatch();
    const token = useSelector(state => state.token);
    const id = props.match.params.id;
    useEffect(() => {
        dispatch(requestUserDetail(id,token))
       }, [dispatch])
    ;
    const data = useSelector(state => state.userDetail);

    if(data){
        return(
            <EditForm data={data}/>
        )
    }

};

export default memo(UserEdit);