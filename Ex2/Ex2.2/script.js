import Warehouse from './Class/Warehouse.js';
import Clothes from './Class/Clothes.js';
import Fruit from './Class/Fruit.js';
import Food from './Class/Food.js';
import Houseware from './Class/Houseware.js';
import resetForm from './Helpers/form.js';
import {
    wareHouseName,
    wareHouseLocation,
    wareHouseBody,
    addCommodityForm,
    btnAddCommodity,
    btnCheckRevenue,
    inputCommodityName,
    inputCommodityProducer,
    inputCommodityPrice,
    inputCommoditySalePercent,
    inputCommodityDateAdded,
    inputCommodityType,
    inputCommodityStamina,
    inputCommodityOrigin,
    inputCommodityMaterial,
    inputCommodityTaste,
    revenueModal,
} from './element.js';

import bindSaleComodity from './Helpers/bindEvent.js';

// Start
let myWareHouse = new Warehouse('Tạp Hóa 007', 'Hà Nội', []);

myWareHouse.showItems(wareHouseBody);

myWareHouse.showInfor(wareHouseName, wareHouseLocation);

// Add new commodity
btnAddCommodity.onclick = () => {
    let newCommodity;

    switch (inputCommodityType.value) {
        case 'houseware':
            newCommodity = new Houseware(
                inputCommodityName.value,
                inputCommodityPrice.value,
                inputCommodityProducer.value,
                inputCommoditySalePercent.value,
                inputCommodityDateAdded.value,
                inputCommodityStamina.value
            );
            break;
        case 'clothes':
            newCommodity = new Clothes(
                inputCommodityName.value,
                inputCommodityPrice.value,
                inputCommodityProducer.value,
                inputCommoditySalePercent.value,
                inputCommodityDateAdded.value,
                inputCommodityOrigin.value,
                inputCommodityMaterial.value
            );
            break;
        case 'food':
            newCommodity = new Food(
                inputCommodityName.value,
                inputCommodityPrice.value,
                inputCommodityProducer.value,
                inputCommoditySalePercent.value,
                inputCommodityDateAdded.value,
                inputCommodityTaste.value
            );
            break;
        default:
            newCommodity = new Fruit(inputCommodityName.value, inputCommodityPrice.value, inputCommodityProducer.value, inputCommoditySalePercent.value, inputCommodityDateAdded.value);
    }

    if (myWareHouse.items.length > 0) {
        wareHouseBody.innerHTML += `<tr>
                        <td class="text-center" width="10%">${newCommodity.id}</td>
                        <td class="text-center" width="20%">${newCommodity.name}</td>
                        <td class="text-center" width="20%">${newCommodity.producer}</td>
                        <td class="text-center" width="10%">${newCommodity.price}</td>
                        <td class="text-center" width="10%">${newCommodity.salePercent}</td>
                        <td class="text-center" width="20%">${newCommodity.date_added}</td>
                        <td class="text-center" width="10%"><button class="btn btn-danger btn-sale me-1" data-id="${newCommodity.id}" title="Bán"><i class="fas fa-hand-holding-usd"></i></button></td>
                    </tr>`;
    } else {
        wareHouseBody.innerHTML = `<tr>
                        <td class="text-center" width="10%">${newCommodity.id}</td>
                        <td class="text-center" width="20%">${newCommodity.name}</td>
                        <td class="text-center" width="20%">${newCommodity.producer}</td>
                        <td class="text-center" width="10%">${newCommodity.price}</td>
                        <td class="text-center" width="10%">${newCommodity.salePercent}</td>
                        <td class="text-center" width="20%">${newCommodity.date_added}</td>
                        <td class="text-center" width="10%"><button class="btn btn-danger btn-sale me-1" data-id="${newCommodity.id}" title="Bán"><i class="fas fa-hand-holding-usd"></i></button></td>
                    </tr>`;
    }
    bindSaleComodity(myWareHouse);
    myWareHouse.addCommodity(newCommodity);
    resetForm(addCommodityForm);
};

// Check Revenue
btnCheckRevenue.onclick = () => {
    let totalRevenue = document.querySelector('#total-revenue');
    totalRevenue.innerText = myWareHouse.checkRevenue();
    revenueModal.show();
};
