import React, { useState } from 'react';
import { Box, FormGroup, Container, Input, Button, Card, TextField, FormControl, InputLabel, FormHelperText } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
// import { Button } from 'reactstrap';
import AuthContainer from '../../components/AuthContainer';
import ErrorText from '../../components/ErrorText';
import { auth, Providers } from '../../config/firebase';
import logging from '../../config/logging';
import IPageProps from '../../interfaces/page';
import firebase from 'firebase';
import { SignInWithSocialMedia } from './modules';
import { styled } from '@mui/material/styles';
import "./auth.css"

const LoginPage: React.FunctionComponent<IPageProps> = props => {
    const [authenticating, setAuthenticating] = useState<boolean>(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [formColor1, setFormColor1] = useState('');
    const [formColor2, setFormColor2] = useState('');

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


    const history = useHistory();

    const signInWithEmailAndPassword = () => {
        if (error !== '') setError('');


        setAuthenticating(true);

        auth.signInWithEmailAndPassword(email, password)
            .then(result => {
                logging.info(result);
                history.push('/homepage');
                // window.location.href = '/homepage';
            })
            .catch(error => {
                logging.error(error);
                setAuthenticating(false);
                setError(error.message);
            });
    }

    const signInWithSocialMedia = (provider: firebase.auth.AuthProvider) => {
        if (error !== '') setError('');

        setAuthenticating(true);

        SignInWithSocialMedia(provider)
            .then(result => {
                logging.info(result);
                history.push('/homepage');
                // window.location.href = '/homepage';
            })
            .catch(error => {
                logging.error(error);
                setAuthenticating(false);
                setError(error.message);
            });
    }

    return (
        <div>
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
                <h1>SIGN IN</h1>
            </Box>
            <Container className='container-style text-style'>
                <Card className='card-style' style={{ backgroundColor: '#111633', borderRadius: '80px' }}>
                    <Box sx={{ mb: 0, mt: '12%', ml: '23.4%', mr: '22.3%' }} alignItems="center">
                        <div className='div-style'>
                            <h6 className='text-style'>EMAIL</h6>
                            <TextField
                                type="email"
                                name="email"
                                id="email"
                                label="Please enter your Email"
                                variant="standard"
                                autoComplete="current-email"
                                onChange={handleChangeEmail}
                                value={email}
                                style={{ width: '300px', backgroundColor: formColor1 }}
                                sx={{ input: { color: 'white' } }}
                                color='info'
                            />

                        </div>
                        <div className='div-style'>
                            <h6 className='text-style'>PASSWORD</h6>
                            <TextField
                                type="password"
                                name="password"
                                id="password"
                                label="Please enter your password"
                                variant="standard"
                                autoComplete="current-password"
                                onChange={handleChangePassword}
                                value={password}
                                style={{ width: '300px', backgroundColor: formColor2 }}
                                sx={{ input: { color: 'white' } }}
                                color='info'
                            />
                        </div>
                        <div className='div-button-style'>
                            <Button
                                disabled={authenticating}
                                variant="contained"
                                color="success"
                                onClick={() => signInWithEmailAndPassword()}
                                sx={{ mb: '20px', display: 'block', width: '300px' }}
                            >
                                Login
                            </Button>
                            <small >
                                <p className='m-1 text-center text-style'>Don't have an account? <Link to="/register">Register here.</Link></p>
                                <p className='m-1 text-center text-style'><Link to="/forget">Forget your password?</Link></p>
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
        </div>
    );
}

export default LoginPage;

