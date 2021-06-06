import Commodity from './Commodity.js';

class Fruit extends Commodity {
    constructor(name, price, producer, salePercent, date_added, is_sold) {
        super(name, price, producer, salePercent, date_added, is_sold);
    }
}

export default Fruit;
