// Bind event sale commodity
let bindSaleComodity = (myWareHouse) => {
    let btnSale = document.querySelectorAll('.btn-sale');

    btnSale.forEach((btn) => {
        let commodityId = btn.dataset.id;
        btn.onclick = () => {
            myWareHouse.saleCommodity(commodityId);
            btn.parentElement.parentElement.remove();
        };
    });
};

export default bindSaleComodity;
