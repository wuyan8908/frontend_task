/* eslint-disable react/prop-types */
import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { requestUserEdit } from '../../store/auth';
import history from '../../history';

function backToList() {
  history.push('/users');
}

// eslint-disable-next-line complexity
function EditForm(props) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const { data } = props;
  const { id } = data.users;
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    first_name: yup
      .string('Enter your first name')
      .max(50, 'first name should be of maxmum 50 characters length')
      .required('first name is required'),
    last_name: yup
      .string('Enter your last name')
      .max(50, 'last name should be of maxmum 50 characters length')
      .required('last name is required'),
    jobs_count: yup
      .number('Enter your jobs count')
      .integer('Should be Integer')
      .required('jobs count is required'),
    active: yup.string('Enter your active').required('active is required'),
    slack_username: yup
      .string('Enter your slack username')
      .max(50, 'slack username should be of maxmum 50 characters length')
      .required('slack username is required'),
  });
  let activeS = '';
  if (data.users.active) {
    activeS = 'true';
  } else {
    activeS = 'false';
  }
  const formik = useFormik({
    initialValues: {
      email: data.users.email,
      first_name: data.users.first_name,
      last_name: data.users.last_name,
      jobs_count: data.users.jobs_count,
      active: activeS,
      slack_username: data.users.slack_username,
    },
    validationSchema,
    onSubmit: (values) => {
      const Userdata = JSON.stringify(values);
      dispatch(requestUserEdit(id, Userdata, token));
    },
  });
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Edit User
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="first_name"
                variant="outlined"
                required
                fullWidth
                id="first_name"
                label="First Name"
                autoFocus
                value={formik.values.first_name}
                onChange={formik.handleChange}
                error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                helperText={formik.touched.first_name && formik.errors.first_name}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="last_name"
                label="Last Name"
                name="last_name"
                value={formik.values.last_name}
                onChange={formik.handleChange}
                error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                helperText={formik.touched.last_name && formik.errors.last_name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="jobs_count"
                label="jobs count"
                id="jobs_count"
                value={formik.values.jobs_count}
                onChange={formik.handleChange}
                error={formik.touched.jobs_count && Boolean(formik.errors.jobs_count)}
                helperText={formik.touched.jobs_count && formik.errors.jobs_count}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="active"
                label="active"
                id="active"
                value={formik.values.active}
                onChange={formik.handleChange}
                error={formik.touched.active && Boolean(formik.errors.active)}
                helperText={formik.touched.active && formik.errors.active}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="slack_username"
                label="slack username"
                id="slack_username"
                value={formik.values.slack_username}
                onChange={formik.handleChange}
                error={formik.touched.slack_username && Boolean(formik.errors.slack_username)}
                helperText={formik.touched.slack_username && formik.errors.slack_username}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Submit
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() => {
                  backToList();
                }}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default memo(EditForm);
