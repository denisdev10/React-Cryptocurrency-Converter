
import axios from  'axios';
import {observable, computed, action} from 'mobx'
import {TCoin} from "../types";

class CurrenciesStore{

    @observable private items: TCoin[] = [];


    @computed
    get getItems(){
        return this.items;

    }


    @action
    setItems =(items: TCoin[]): void =>{
        this.items = items;
    };  //получаем массив TCoin и эта функция ничего не возращает
@action
    fetchCoins =()=>{

        axios
                .get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
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
                    this.items =  coins; //как только компанент отрендерется ты должен отправить гет запрос и вытащить инфу из ответа, из всего ответа вытащить DAta и передаем в coins, далее сохраняем коинс в переменной allcoins что все приложение знало какие данные мы получили потом производим ререндер
                    console.log(coins);

                });


}
}

export default CurrenciesStore;