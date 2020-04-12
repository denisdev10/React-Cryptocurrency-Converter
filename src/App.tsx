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
import {TCoin} from './types'
import {CryptoTable, ConverterBlock} from './components'
import useStyles from './styles'


// сначало

// Tcoin - типы свойст
//чтобы показывало ошибки, в массиве не может быть другого объекта кроме этого


function App() {

    const classes: any = useStyles(); //<> - какого типа будут ответы typescript
    //allcoins должен быть только массивом  tcoin или null
    //как только компонент отрендерется 1 раз будет выполнятся функция. Если ни 1 переменная не обновится то не будет выполнения функции
    // React.useEffect(() => {
    //
    //     // axios
    //     //     .get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
    //     //     .then(({data}) => {
    //     //         const coins: TCoin[] = data.Data.map((coin: any) => {
    //     //
    //     //             const obj: TCoin = {
    //     //                 name: coin.CoinInfo.Name,
    //     //                 fullName: coin.CoinInfo.FullName,
    //     //                 imageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
    //     //                 price: coin.RAW.USD.PRICE.toFixed(3),
    //     //                 volume24Hour: parseInt(coin.RAW.USD.VOLUMEDAY),
    //     //
    //     //             }; //преобразовываем все объекты
    //     //             return obj;
    //     //
    //     //
    //     //         });
    //     //         setAllCoins(coins); //как только компанент отрендерется ты должен отправить гет запрос и вытащить инфу из ответа, из всего ответа вытащить DAta и передаем в coins, далее сохраняем коинс в переменной allcoins что все приложение знало какие данные мы получили потом производим ререндер
    //     //         console.log(coins);
    //     //
    //     //     })
    // }, [classes]);


    return (
        <Container maxWidth="lg" className={classes.root}>


            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <CryptoTable classes={classes} />

                </Grid>
                <Grid item xs={4}>
                    <ConverterBlock classes={classes}/>
                </Grid>

            </Grid>

        </Container>

    );
}

export default App;
