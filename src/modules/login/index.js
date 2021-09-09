import React from 'react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { classNames } from 'primereact/utils';
import http from "src/services/http";
import { useHistory } from "react-router-dom";
import './index.css';

const loginService = ({ email, password }) => {
    return http.post("/a/hash-login", { email, password });
};

export const LoginPage = () => {
    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            email: 'user_test_asset@mailinator.com',
            password: 'VW1Gb1lYTnBZVEl3TUNFclFsSnVjbTlaUVVSemF5RT0rWUFEc2shIQ==',
        },
        validate: (data) => {
            let errors = {};
            if (!data.email) {
                errors.email = 'Email is required.';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
                errors.email = 'Invalid email address. E.g. example@email.com';
            }
            if (!data.password) {
                errors.password = 'Password is required.';
            }
            return errors;
        },
        onSubmit: (data) => {
            window.setShowLoader(true);
            loginService(data).then(res => {
                // console.log(res);
                history.push('/');
                window.setShowLoader(false);
            }).catch((error) => {
                // console.log(error);
                window.setShowLoader(false);
            });
    
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    return (
        <div className="login-page">
            <div className="p-d-flex p-jc-center">
                <div className="card">
                    <h1 className="p-text-center">AssetData.io</h1>
                    <form onSubmit={formik.handleSubmit} className="p-fluid">
                        <div className="p-field">
                            <span>
                                <label
                                    htmlFor="email"
                                    className={classNames({ 'p-error': isFormFieldValid('email') })}
                                >
                                    Email*
                                </label>
                                <InputText
                                    id="email"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    className={classNames({ 'p-invalid': isFormFieldValid('email') })}
                                />
                            </span>
                            {getFormErrorMessage('email')}
                        </div>
                        <div className="p-field">
                            <span>
                                <label
                                    htmlFor="password"
                                    className={classNames({ 'p-error': isFormFieldValid('password') })}
                                >
                                    Password*
                                </label>
                                <Password
                                    id="password"
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    toggleMask
                                    className={classNames({ 'p-invalid': isFormFieldValid('password') })}
                                    feedback={false}
                                />
                            </span>
                            {getFormErrorMessage('password')}
                        </div>
                        <Button type="submit" label="Signin" className="p-mt-2" />
                    </form>
                    <div className="forgot-password-wrapper">
                        <Button label="FORGOT PASSWORD" className="p-button-link" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;

