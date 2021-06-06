class Commodity {
    constructor(name, price, producer, salePercent, date_added, is_sold = false) {
        this._id = String(Date.now());
        this._name = name;
        this._price = price;
        this._producer = producer;
        this._salePercent = salePercent;
        this._date_added = date_added;
        this._is_sold = is_sold;
    }

    set name(value) {
        this._name = value;
    }

    set price(value) {
        this._price = value;
    }

    set producer(value) {
        this._producer = value;
    }

    set salePercent(value) {
        this._salePercent = value;
    }

    set date_added(value) {
        this._date_added = value;
    }

    set is_sold(value) {
        this._is_sold = value;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get price() {
        return this._price;
    }

    get producer() {
        return this._producer;
    }

    get salePercent() {
        return this._salePercent;
    }

    get date_added() {
        return this._date_added;
    }

    get is_sold() {
        return this._is_sold;
    }
}

export default Commodity;
