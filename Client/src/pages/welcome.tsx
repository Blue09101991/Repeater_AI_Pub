import React, { useRef, useEffect } from 'react';
import IPageProps from '../interfaces/page';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Container, Grid, Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Helmet } from 'react-helmet-async';


const Welcome: React.FunctionComponent<IPageProps> = props => {
    const OverviewWrapper = styled(Box)(
        () => `
          overflow: auto;
          flex: 1;
          overflow-x: hidden;
          align-items: center;
      `
    );

    const cardStyle = {
        backgroundColor: '#111633', // Set the desired background color here
        padding: '100px',
        borderRadius: '150px',
    };

    return (
        <OverviewWrapper>
            <Container maxWidth="lg">
                <Box display="flex" justifyContent="center" py={4} alignItems="center">
                </Box>
                <div>
                    <Card sx={{ p: 10, mb: 5, borderRadius: 12 }} style={cardStyle}>
                        <Container maxWidth="lg" sx={{ textAlign: 'center' }} >

                            <Grid
                                spacing={{ xs: 6, mb: 10 }}
                                justifyContent="center"
                                alignItems="center"
                                container
                            >
                                <Grid item >
                                    {/* <LabelWrapper color="success">Version 2.0.0</LabelWrapper> */}
                                    <div>
                                        <img
                                            src="/static/images/logo/2.svg"
                                            alt="Typescript"
                                            width="800"
                                            height="600"
                                        />

                                    </div>
                                    <Button
                                        component={RouterLink}
                                        to="/homepage"
                                        size="large"
                                        variant="contained"
                                    >
                                        Try for Free
                                    </Button>
                                    <Button
                                        sx={{ ml: 3 }}
                                        // component="a"
                                        // target="_blank"
                                        rel="noopener"
                                        href="/status/coming-soon"
                                        // size="large"
                                        variant="text"
                                    >
                                        COMING SOON
                                    </Button>
                                </Grid>
                            </Grid>
                        </Container>
                    </Card>
                </div>
            </Container>
        </OverviewWrapper>
    );
}

export default Welcome;