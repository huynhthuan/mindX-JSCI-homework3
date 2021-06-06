import Commodity from './Commodity.js';

class Houseware extends Commodity {
    constructor(name, price, producer, salePercent, date_added, stamina, is_sold) {
        super(name, price, producer, salePercent, date_added, is_sold);
        this._stamina = stamina;
    }
}

export default Houseware;
