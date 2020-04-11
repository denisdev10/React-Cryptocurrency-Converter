import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';



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
        cryptoInputBox: {
            marginBottom: 20,
            marginTop: 20,
        },

        currencyInput: {

            minWidth: 'calc(70%-10px)',
            marginRight: 10,
        },
        currencyType: {
            minWidth: '30%',
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
                    <Paper className={classes.paper}>
                        <div className={classes.cryptoInputBox}>
                            <FormControl className={classes.currencyInput}>
                                <TextField fullWidth label="Сумма"/>
                            </FormControl>

                            <FormControl className={classes.currencyType}>

                                <InputLabel id="demo-simple-select-helper-label">Валюта</InputLabel>
                                <Select id="demo-simple-select" value={10}>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div className={classes.cryptoInputBox}>
                            <FormControl className={classes.currencyInput}>
                                <TextField fullWidth label="Сумма"/>
                            </FormControl>

                            <FormControl className={classes.currencyType}>

                                <InputLabel id="demo-simple-select-helper-label">Валюта</InputLabel>
                                <Select id="demo-simple-select" value={10}>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>


                        <Typography variant="h5" component="h5">
                            73,79 Российский рубль
                        </Typography>


                    </Paper>
                </Grid>

            </Grid>

        </Container>

    );
}

export default App;
