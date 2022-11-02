import { unwrapResult } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../userSlice';
import RegisterForm from '../RegisterForm';

Register.propTypes = {
    
};

function Register(props) {
    const dispatch = useDispatch();

    const handleSubmit = async (values) => {       
        try {
            // auto set username = email
            values.username = values.email;

            console.log('Form Submit:', values);
            const action = register(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);
            console.log('New ueer', user);
        } catch (error) {
            console.log('Failed to register', error);
        }
    };

    return (
        <div>
            <RegisterForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Register;