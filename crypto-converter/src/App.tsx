import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(10),
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);


function App() {

    const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.root}>


            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <Paper className={classes.paper}>123123123</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>

            </Grid>

        </Container>

    );
}

export default App;
