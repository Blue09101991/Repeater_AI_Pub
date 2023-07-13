import React from 'react';
import IPageProps from '../interfaces/page';


import Navbar from './navbar';
import { colors } from '@mui/material';

const Chat: React.FunctionComponent<IPageProps> = props => {

    return (
        <>
            <Navbar />

            <div>
                <h1 style={{ color: "white" }}>Coming Soon!</h1>
            </div >
        </>

    );
}
export default Chat;