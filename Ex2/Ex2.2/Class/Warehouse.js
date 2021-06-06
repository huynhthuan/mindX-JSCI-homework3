class Warehouse {
    constructor(name, location, items = []) {
        this._name = name;
        this._location = location;
        this._items = items;
    }

    set name(value) {
        this._name = value;
    }

    set location(value) {
        this._location = value;
    }

    set items(value) {
        this._items = value;
    }

    get name() {
        return this._name;
    }

    get location() {
        return this._location;
    }

    get items() {
        return this._items;
    }

    addCommodity(item) {
        this._items.push(item);
    }

    saleCommodity(id) {
        // Get index affected employee
        let index = this._items.findIndex((item) => item.id === id);

        // Update status sold employee
        this._items[index].is_sold = true;
    }

    showInfor(title_el, location_el) {
        title_el.innerText = this._name;
        location_el.innerText = this._location;
    }

    showItems(target_el) {
        let html = this._items
            .map((item) => {
                return `<tr>
                        <td class="text-center" width="10%">${item.id}</td>
                        <td class="text-center" width="20%">${item.name}</td>
                        <td class="text-center" width="20%">${item.producer}</td>
                        <td class="text-center" width="10%">${item.price}</td>
                        <td class="text-center" width="10%">${item.salePercent}</td>
                        <td class="text-center" width="20%">${item.date_added}</td>
                       <td class="text-center" width="10%"><button class="btn btn-danger me-1" title="Bán"><i class="fas fa-hand-holding-usd"></i></button></td>
                    </tr>`;
            })
            .join('');

        target_el.innerHTML = html ? html : '<tr><td colspan="7" class="text-center">Chưa có mặt hàng nào</td></tr>';
    }

    checkRevenue() {
        let soldItems = this._items.filter((item) => item.is_sold);
        let totalRevenue = 0;
        soldItems.map((item) => {
            totalRevenue += Number(item.price) - Number(item.price / 100) * Number(item.salePercent);
        });

        return totalRevenue;
    }
}

export default Warehouse;
