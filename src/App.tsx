import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


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
        table: {
            minWidth: 650,
        },
        currencyIcon:{
            width:18,
            height:18,
            borderRadius:30,
        }
    }),
);


// сначало
type TCoin = {
    name: string;
    fullName: string;
    imageUrl: string;
    price: number;
    volume24Hour: number;


}
// Tcoin - типы свойст
//чтобы показывало ошибки, в массиве не может быть другого объекта кроме этого


function App() {

    const classes = useStyles(); //<> - какого типа будут ответы typescript
    const [allCoins, setAllCoins] = React.useState<TCoin[]>([]); //allcoins должен быть только массивом  tcoin или null
    //как только компонент отрендерется 1 раз будет выполнятся функция. Если ни 1 переменная не обновится то не будет выполнения функции
    React.useEffect(() => {

        axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
            .then(({data}) => {
                const coins: TCoin[] = data.Data.map((coin: any) => {

                    const obj: TCoin = {
                        name: coin.CoinInfo.Name,
                        fullName: coin.CoinInfo.FullName,
                        imageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
                        price: coin.RAW.USD.PRICE.toFixed(3),
                        volume24Hour: parseInt(coin.RAW.USD.VOLUMEDAY),

                    }; //преобразовываем все объекты
                    return obj;


                });
                setAllCoins(coins); //как только компанент отрендерется ты должен отправить гет запрос и вытащить инфу из ответа, из всего ответа вытащить DAta и передаем в coins, далее сохраняем коинс в переменной allcoins что все приложение знало какие данные мы получили потом производим ререндер
                console.log(coins);

            })
    }, [classes]);


    return (
        <Container maxWidth="lg" className={classes.root}>


            <Grid container spacing={3}>
                <Grid item xs={8}>

                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell align="left">Name</TableCell>
                                    <TableCell align="left">Fullname</TableCell>
                                    <TableCell align="left">Price</TableCell>
                                    <TableCell align="left">Volume day</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {allCoins.map((coin) => (
                                    <TableRow key={coin.name}>
                                        <TableCell><img className={classes.currencyIcon} src={coin.imageUrl} alt="Coin icon"/></TableCell>
                                        <TableCell align="left">{coin.name}</TableCell>
                                        <TableCell align="left">{coin.fullName}</TableCell>
                                        <TableCell align="left">$ {coin.price}</TableCell>
                                        <TableCell align="left">${coin.volume24Hour}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
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
