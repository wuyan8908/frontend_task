import React, {memo, useEffect} from 'react'
import { useDispatch,  useSelector } from 'react-redux';
import { requestUser } from '../../store/auth';
import './UserIndex.css'
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';

  
function createData(id, email, jobCount, active) {
    return { id,email, jobCount,active };
  }

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
  
  const headCells = [
    { id: 'id', numeric: false, disablePadding: true, label: 'ID' },
    { id: 'email', numeric: false, disablePadding: false, label: 'Email' },
    { id: 'jobCount', numeric: true, disablePadding: false, label: 'Job Count' },
    { id: 'active', numeric: false, disablePadding: false, label: 'Active' },
  ];
  
  function EnhancedTableHead(props) {
    const { classes, order, orderBy, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };
  
    return (
      <TableHead>
        <TableRow>
  
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={'left'}
              padding={headCell.disablePadding ? 'none' : 'default'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </span>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
  
  EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };
  
  
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
  }));




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
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    //const row = [];
    if (user) {
        const rows = user.map(item =>{
            return createData(item.id,item.email,item.jobs_count,item.active);
        })
        //console.log(rowsData);
            return (
                <div className={classes.root}>
                    <Paper className={classes.paper}>
                        <TableContainer>
                        <Table
                            className={classes.table}
                            aria-labelledby="tableTitle"
                            aria-label="enhanced table"
                        >
                            <EnhancedTableHead
                            classes={classes}
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                            />
                            <TableBody>
                            {stableSort(rows, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                const labelId = `${index}`;
                                return (
                                    <TableRow
                                    hover
                                    key={row.name}
                                    >
                                    <TableCell component="th" id={labelId} scope="row" padding="none">
                                        {row.id}
                                    </TableCell>
                                    <TableCell align="left">{row.email}</TableCell>
                                    <TableCell align="left">{row.jobCount}</TableCell>
                                    <TableCell align="left">{row.active ? <CheckIcon/> : <ClearIcon/>}</TableCell>
                                    <Link to={`/users/detail/${row.id}`}>
                                      View
                                    </Link>
                                    <Link to={`/users/edit/${row.id}`}>
                                      Edit
                                    </Link>
                                    <Link to={`/users/delete/${row.id}`}>
                                      Delete
                                    </Link>
                                    </TableRow>
                                );
                                })}
                            </TableBody>
                        </Table>
                        </TableContainer>
                        <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </Paper>
                    <Link to={`/users/create`}>
                        Create
                    </Link>
                    </div>
                );
    }
     
} 

export default memo(UserIndex);