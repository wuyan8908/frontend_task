import React,{memo,useEffect} from 'react'
import { useDispatch,  useSelector } from 'react-redux';
import { requestUserDetail } from '../../store/auth';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
//import history from './history';
import { Link } from 'react-router-dom';


function UserDetails (props) {
    const token = useSelector(state => state.token);
    const id = props.match.params.id;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(requestUserDetail(id,token))
       }, [dispatch])
    ;
    const data = useSelector(state => state.userDetail);
    if (data){    
            return(
                <div className="item" key={data.users.id}>
                    <div>
                        id: {data.users.id}
                    </div>
                    <div>
                        email: {data.users.email}
                    </div>
                    <div>
                        first_name: {data.users.first_name}
                    </div>
                    <div>
                        last_name: {data.users.last_name}
                    </div>
                    <div>
                        jobs_count: {data.users.jobs_count}
                    </div>
                    <div>
                        active: {data.users.active ? <CheckIcon/> : <ClearIcon/>}
                    </div>
                    <div>
                        slack_username: {data.users.slack_username}
                    </div>
                    <Link to="/users">
                        Back to List
                    </Link>
                </div>
            )
    }
    //console.log(props.match.params.id);
    return <div> 123  </div>
};

export default memo(UserDetails);