import {observable, computed, action} from 'mobx'
import {TCoin} from "../types";

class CurrenciesStore{

    @observable public items: TCoin[] = [];

}

export default CurrenciesStore;