import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, makeStyles, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputField from '../../../../components/form-controls/InputField';
import PasswordField from '../../../../components/form-controls/PasswordField';

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(4),  
    },

    avatar: {
        margin: '0 auto',
        backgroundColor: theme.palette.secondary.main,
    },

    title: {
        margin: theme.spacing(2, 0, 3, 0),
        textAlign: 'center',
    },

    submit: {
        margin: theme.spacing(3, 0, 2, 0),
    },
}));

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
    const classes = useStyles();

    const schema = yup.object().shape({
        identifier: yup.string().required('Please enter your email.').email('Please enter a valid email address.'),   
        password: yup.string().required('Please enter your password'),    
    });

    const form = useForm({
        defaultValues: {  
            identifier: '',
            password: '',         
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = (values) => {
        const {onSubmit} = props;
        if (onSubmit) {
            onSubmit(values);
        }

        form.reset();
    }

    return (
        <div className={classes.root}>
            <Avatar className={classes.avatar}>
                <LockOutlined></LockOutlined>
            </Avatar>

            <Typography className={classes.title} component="h3" variant="h5">
                Sign In
            </Typography>

            <form onSubmit={form.handleSubmit(handleSubmit)}>
            
            <InputField name="identifier" label="Email" form={form} />
            <PasswordField name="password" label="Password" form={form} />
            

            <Button type="submit" className={classes.submit} variant="contained" color="primary" fullWidth>
                Sign in
            </Button>
            </form>
        </div>

        
    );
}

export default LoginForm;