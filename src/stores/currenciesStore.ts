import axios from 'axios';
import {observable, computed, action} from 'mobx'
import {TCoin} from "../types";


type TCoinDiff = { [key: string]: string };


class CurrenciesStore {

    @observable private items: TCoin[] = [];
    @observable private diffObj: TCoinDiff = {};


    @computed
    get getItems() {
        return this.items;

    };


    @action
    setItems = (items: TCoin[]): void => {
        this.items = items;
        // если не нашел то предаю Tcoin из нового объекта и пусть новый объект сравнивается с собой и следовательно изменений не произошло (доп проверка)
        this.diffObj = this.diffCurrencies(this.items, items).reduce((initObj: TCoinDiff, newObj: TCoin) => {
                const oldObj: TCoin = this.items.find(itemobj => itemobj.name === newObj.name) || newObj;
                const color: string = newObj.price === oldObj.price ? '' : newObj.price > oldObj.price ? 'green' : 'red'; //если новый объект больше старого то зеленая если иначе то красная
                initObj[newObj.name] = color;
                return initObj;
                //получили массив разниц
            },
            {},
        );
    };  //получаем массив TCoin и эта функция ничего не возращает
    @action
    fetchCoins = () => {

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
                this.items = coins; //как только компанент отрендерется ты должен отправить гет запрос и вытащить инфу из ответа, из всего ответа вытащить DAta и передаем в coins, далее сохраняем коинс в переменной allcoins что все приложение знало какие данные мы получили потом производим ререндер
                console.log(coins);

            });

    }

    //функция для изменения цветов
    diffCurrencies(arr1: TCoin[], arr2: TCoin[]) {
        return arr1.filter((obj, index) => {
            if (obj.price !== arr2[index].price) {
                return true;
            }
            return false;
        })
    }
}

export default CurrenciesStore;