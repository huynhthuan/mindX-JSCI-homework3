// Title
const wareHouseName = document.querySelector('#warehouse-name');
const wareHouseLocation = document.querySelector('#warehouse-location');

// Table
const wareHouseBody = document.querySelector('#warehouse tbody');

// Form
const addCommodityForm = document.querySelector('#commodity-form');

// Button
const btnAddCommodity = document.querySelector('#btn-commodity');
const btnCheckRevenue = document.querySelector('#check-revenue');

// Input
const inputCommodityName = document.querySelector('#commodity-name');
const inputCommodityProducer = document.querySelector('#commodity-producer');
const inputCommodityPrice = document.querySelector('#commodity-price');
const inputCommoditySalePercent = document.querySelector('#commodity-sale-percent');
const inputCommodityDateAdded = document.querySelector('#commodity-date-added');
const inputCommodityType = document.querySelector('#commodity-type');
const inputCommodityStamina = document.querySelector('#commodity-stamina');
const inputCommodityOrigin = document.querySelector('#commodity-origin');
const inputCommodityMaterial = document.querySelector('#commodity-material');
const inputCommodityTaste = document.querySelector('#commodity-taste');

// Modal
let revenueModal = new bootstrap.Modal(document.getElementById('exampleModal'));

export {
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
};
