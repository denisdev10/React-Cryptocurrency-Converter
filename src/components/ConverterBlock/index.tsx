import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import React from "react";
import {TCoin} from "../../types";
import {inject, observer} from "mobx-react";
import CurrenciesStore from "../../stores/currenciesStore";


type IConverterBlock = {

    classes: any;
    currenciesStore?: CurrenciesStore;
}


const ConverterBlock: React.FC<IConverterBlock> = inject('currenciesStore')(
    observer(({classes, currenciesStore}) => {
        const coins: string[] = currenciesStore!.getItems.map(coin => coin.name);//отображение валют в селекторе
        return (


            <Paper className={classes.paper}>
                <div className={classes.cryptoInputBox}>
                    <FormControl className={classes.currencyInput}>
                        <TextField fullWidth label="Сумма"/>
                    </FormControl>

                    <FormControl className={classes.currencyType}>

                        <InputLabel id="demo-simple-select-helper-label">Валюта</InputLabel>

                        <Select id="demo-simple-select" value={coins[0]}>
                            {
                                coins.map(name => <MenuItem value={name}>{name}</MenuItem>)
                            }
                        </Select>

                    </FormControl>
                </div>

                <div className={classes.cryptoInputBox}>
                    <FormControl className={classes.currencyInput}>
                        <TextField fullWidth label="Сумма"/>
                    </FormControl>

                    <FormControl className={classes.currencyType}>

                        <InputLabel id="demo-simple-select-helper-label">Валюта</InputLabel>

                        <Select id="demo-simple-select" value={coins[0]}>
                            {
                                coins.map(name => <MenuItem value={name}>{name}</MenuItem>)
                            }
                        </Select>
                    </FormControl>
                </div>


            </Paper>


        )

    }))

export default ConverterBlock;