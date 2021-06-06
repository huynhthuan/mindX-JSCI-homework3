import Commodity from './Commodity.js';

class Clothes extends Commodity {
    constructor(name, price, producer, salePercent, date_added, origin, material, is_sold) {
        super(name, price, producer, salePercent, date_added, is_sold);
        this._origin = origin;
        this._material = material;
    }
}

export default Clothes;
