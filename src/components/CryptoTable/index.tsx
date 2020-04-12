import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Grid from "@material-ui/core/Grid";
import React from "react";
import {observer, inject} from 'mobx-react'
import {TCoin, TCoinDiff} from '../../types'
import CurrenciesStore from "../../stores/currenciesStore";

type ICryptoTable = {

        classes:any;
    currenciesStore?: CurrenciesStore;
};




const colors:{[key:string]: string} ={

    red: '#d8ffc4',
    green: '#d8ff4',
};





// копанент инжектит саму стору подключает ее и обсервер получает пропс
const CryptoTable =  inject('currenciesStore')(
    observer(({classes, currenciesStore}:ICryptoTable) => {
            const items: TCoin[] = currenciesStore!.getItems || [];
            const diffObj: TCoinDiff=currenciesStore!.getDiffObj;

            currenciesStore?.setItems();


            console.log(JSON.stringify(items))


            React.useEffect(() => {

               if(currenciesStore){
                   currenciesStore.fetchCoins();
               }

            }, []);


//подключаем компонент к хранилищу
            return (
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
                            {!items.length
                                ? 'Загрузка...'
                                : items.map((coin) => (
                                    <TableRow key={coin.name}>
                                        <TableCell><img className={classes.currencyIcon} src={coin.imageUrl}
                                                        alt="Coin icon"/></TableCell>
                                        <TableCell align="left">{coin.name}</TableCell>
                                        <TableCell align="left">{coin.fullName}</TableCell>
                                        <TableCell className={diffObj[coin.name]} align="left">$ {coin.price}</TableCell>
                                        <TableCell align="left">${coin.volume24Hour}</TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )
        }
    )
);


export default CryptoTable;