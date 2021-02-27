import React, {memo, useEffect} from 'react'
import { useDispatch,  useSelector } from 'react-redux';
import { requestUser } from '../../store/auth';
import './UserIndex.css'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


function createData(id, email, jobCount, active) {
    return { id,email, jobCount,active };
  }


function UserIndex(props) {
    const dispatch = useDispatch()
    const token = useSelector(state => state.token);
    //const token = cookie.load('token');
    useEffect(() => {
       dispatch(requestUser(token))
      }, [dispatch])
    ;
    //dispatch(requestUser(token))
    const user = useSelector(state => state.userList);
    //const row = [];
    if (user) {
        const rowsData = user.map(item =>{
            return createData(item.id,item.email,item.jobs_count,item.active);
        })
        console.log(rowsData);
            return (
                <Container maxWidth="lg"> 
                    <div className="ui celled list">
                        <React.Fragment>
                            <h3>User List</h3>
                            <Table size="small">
                                <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Job Count</TableCell>
                                    <TableCell>Active</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rowsData.map((row) => (
                                    <TableRow key={row.id}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.email}</TableCell>
                                    <TableCell>{row.jobCount}</TableCell>
                                    <TableCell>{row.active ? <CheckIcon/> : <ClearIcon/>}</TableCell>
                                    <Link to="/users/detail/11">
                                      View
                                    </Link>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </React.Fragment>
                    </div>
               </Container>)
    }
     
} 

export default memo(UserIndex);