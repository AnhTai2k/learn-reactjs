import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../userSlice';
import LoginForm from '../LoginForm';

Login.propTypes = {
    closeDialog: PropTypes.func,
};

function Login(props) {
    const dispatch = useDispatch();

    const {enqueueSnackbar} = useSnackbar();

    const handleSubmit = async (values) => {       
        try {
            const action = login(values);
            const resultAction = await dispatch(action);
            unwrapResult(resultAction);

            const {closeDialog} = props;
            if (closeDialog) {
                closeDialog();
            }

    //        enqueueSnackbar('Register successfully!!!', {variant: 'success'});
        } catch (error) {
            console.log('Failed to register', error);
            enqueueSnackbar(error.message, { variant: 'error'});
        }
    };

    return (
        <div>
            <LoginForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Login;