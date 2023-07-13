import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Box, FormGroup, Container, Input, Button, Card, TextField, CardContent, FormLabel } from '@mui/material';
import AuthContainer from '../../components/AuthContainer';
import ErrorText from '../../components/ErrorText';
import logging from '../../config/logging';
import IPageProps from '../../interfaces/page';
import { SignInWithSocialMedia } from './modules';
import firebase from 'firebase';
import { auth, Providers } from '../../config/firebase';
import "./auth.css"

const RegisterPage: React.FunctionComponent<IPageProps> = props => {
    const [authenticating, setAuthenticating] = useState<boolean>(false);
    const [registering, setRegistering] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirm, setConfirm] = useState<string>('');
    const [error, setError] = useState<string>('');

    const [formColor1, setFormColor1] = useState('');
    const [formColor2, setFormColor2] = useState('');
    const [formColor3, setFormColor3] = useState('');

    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);

        // Change the form color based on the input value condition
        if (event.target.value.length > 0) {
            setFormColor1('');
        } else {
            setFormColor1('');
        }
    };

    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);

        // Change the form color based on the input value condition
        if (event.target.value.length > 0) {
            setFormColor2('');
        } else {
            setFormColor2('');
        }
    };

    const handleChangeConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfirm(event.target.value);

        // Change the form color based on the input value condition
        if (event.target.value.length > 0) {
            setFormColor3('');
        } else {
            setFormColor3('');
        }
    };


    const history = useHistory();

    const signUpWithEmailAndPassword = () => {
        if (password !== confirm) {
            setError('Please make sure your passwords match.');
            return;
        }

        if (error !== '') setError('');

        setRegistering(true);

        auth.createUserWithEmailAndPassword(email, password)
            .then(result => {
                logging.info(result);
                history.push('/login');
            })
            .catch(error => {
                logging.error(error);

                if (error.code.includes('auth/weak-password')) {
                    setError('Please enter a stronger password.');
                }
                else if (error.code.includes('auth/email-already-in-use')) {
                    setError('Email already in use.');
                }
                else {
                    setError('Unable to register.  Please try again later.')
                }

                setRegistering(false);
            });
    }

    const signInWithSocialMedia = (provider: firebase.auth.AuthProvider) => {
        if (error !== '') setError('');

        setAuthenticating(true);

        SignInWithSocialMedia(provider)
            .then(result => {
                logging.info(result);
                history.push('/homepage');
                // window.location.href = 'http://localhost:5432/';
            })
            .catch(error => {
                logging.error(error);
                setAuthenticating(false);
                setError(error.message);
            });
    }

    return (
        // <AuthContainer header="Register">
        //     <FormGroup>
        //         <Input 
        //             type="email"
        //             name="email"
        //             id="email"
        //             placeholder="Email Address"
        //             onChange={event => setEmail(event.target.value)}
        //             value={email}
        //         />
        //     </FormGroup>
        //     <FormGroup>
        //         <Input 
        //             autoComplete="new-password"
        //             type="password"
        //             name="password"
        //             id="password"
        //             placeholder="Enter Password"
        //             onChange={event => setPassword(event.target.value)}
        //             value={password}
        //         />
        //     </FormGroup>
        //     <FormGroup>
        //         <Input 
        //             autoComplete="new-password"
        //             type="password"
        //             name="confirm"
        //             id="confirm"
        //             placeholder="Confirm Password"
        //             onChange={event => setConfirm(event.target.value)}
        //             value={confirm}
        //         />
        //     </FormGroup>
        //     <Button
        //         disabled={registering}
        //         color="success"
        //         block
        //         onClick={() => signUpWithEmailAndPassword()}
        //     >
        //         Sign Up
        //     </Button>
        //     <small>
        //         <p className='m-1 text-center'>Already have an account? <Link to="/login">Login.</Link></p>
        //     </small>
        //     <ErrorText error={error} />
        // </AuthContainer>
        <>
            {/* <AuthContainer header="Register"> */}
            <Box display="flex" justifyContent="center" py={7} alignItems="center" className="box-style">
                <Link to="/">
                    <img
                        src="/static/images/logo/title.png"
                        alt="Typescript"
                        width="100"
                        height="100"
                    />
                </Link>
                <br />
                <h1>SIGN UP</h1>
            </Box>
            <Container className='container-style text-style'>
                <Card className='card-style-signup' style={{ backgroundColor: '#111633', borderRadius: '80px' }}>
                    <Box sx={{ mb: 0, mt: '12%', ml: '23.4%', mr: '22.3%' }} alignItems="center">
                        <div className='div-style-confirm'>
                            <h6 className='text-style'>EMAIL</h6>
                            <TextField
                                type="email"
                                name="email"
                                id="email"
                                label="Email Address"
                                variant="standard"
                                autoComplete="current-email"
                                onChange={handleChangeEmail}
                                value={email}
                                style={{ width: '300px', backgroundColor: formColor1 }}
                                sx={{ input: { color: 'white' } }}
                                color='info'
                            />
                        </div>
                        <div className='div-style-confirm'>
                            <h6 className='text-style'>PASSWORD</h6>
                            <TextField
                                type="password"
                                name="password"
                                id="password"
                                label="Password"
                                variant="standard"
                                autoComplete="new-password"
                                onChange={handleChangePassword}
                                value={password}
                                style={{ width: '300px', backgroundColor: formColor2 }}
                                sx={{ input: { color: 'white' } }}
                                color='info'
                            />
                        </div>
                        <div className='div-style-confirm'>
                            <h6 className='text-style'>CONFIRM PASSWORD</h6>
                            <TextField
                                type="password"
                                name="confirm"
                                id="password"
                                label="Password"
                                variant="standard"
                                autoComplete="new-password"
                                onChange={handleChangeConfirmPassword}
                                value={confirm}
                                style={{ width: '300px', backgroundColor: formColor3 }}
                                sx={{ input: { color: 'white' } }}
                                color='info'
                            />
                        </div>
                        <div className='div-button-style'>
                            <Button
                                disabled={registering}
                                variant="contained"
                                color="success"
                                onClick={() => signUpWithEmailAndPassword()}
                                sx={{ mb: '20px', display: 'block', width: '300px' }}
                            >
                                Sign Up
                            </Button>
                            <small>
                                <p className='m-1 text-center'>Already have an account? <Link to="/login">Login.</Link></p>
                            </small>
                            <ErrorText error={error} />
                            <hr className="bg-info m-3" />
                            <Button
                                disabled={authenticating}
                                variant="contained"
                                color="success"
                                onClick={() => signInWithSocialMedia(Providers.google)}
                                sx={{ mb: '20px', display: 'block', width: '300px' }}
                                style={{ backgroundColor: '#ea4335', borderColor: '#ea4335' }}
                            >
                                <i className="fab fa-google mr-2"></i> Sign in with Google
                            </Button>
                        </div>
                    </Box>
                </Card>
            </Container>
            {/* </AuthContainer> */}
        </>
    );
}

export default RegisterPage;