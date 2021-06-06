import Commodity from './Commodity.js';

class Food extends Commodity {
    constructor(name, price, producer, salePercent, date_added, taste, is_sold) {
        super(name, price, producer, salePercent, date_added, is_sold);
        this._taste = taste;
    }
}

export default Food;
