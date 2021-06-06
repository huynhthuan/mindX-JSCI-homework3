let championContainer = document.querySelector('.champion-list .row');
let addPanel = new bootstrap.Offcanvas(document.querySelector('#offcanvasRight'));
let btnOpenAddPanel = document.querySelector('.btn-add');
let btnRecache = document.querySelector('.btn-recache');
let loading = document.querySelector('.loading');

let inputChampionName = document.querySelector('#champion-name');
let inputChampionTitle = document.querySelector('#champion-title');
let inputChampionHp = document.querySelector('#champion-hp');
let inputChampionMp = document.querySelector('#champion-mp');
let inputChampionAd = document.querySelector('#champion-ad');
let inputChampionAs = document.querySelector('#champion-as');
let inputChampionImg = document.querySelector('#champion-img');

let btnSaveAddChampion = document.querySelector('.btn-save-add');

// Loading hander

let loadingToggle = () => {
    loading.classList.toggle('active');

    setTimeout(() => {
        loading.classList.remove('active');
    }, 2000);
};

// Cache data to localStorage
let cacheData = (data) => {
    localStorage.removeItem('champions');
    localStorage.setItem('champions', JSON.stringify(data));
};

// Cache data for first time
if (!localStorage.getItem('champions')) {
    cacheData(champions);
}

// Get data from localStorage
let getAllData = () => {
    return JSON.parse(localStorage.getItem('champions'));
};

// Render data

let renderData = (data, containerEL) => {
    let html = data
        .map((item) => {
            return `<card-champion class="col-md-3" nameChampion="${item.name}" title="${item.title}" image ="${item.img}" hp="${item.stats.hp}" mp="${item.stats.mp}" attackdamage="${item.stats.attackdamage}" attackspeed="${item.stats.attackspeed}"></card-champion>`;
        })
        .join('');

    containerEL.innerHTML = html;
};

renderData(getAllData(), championContainer);

// Add new data
let addNewChampion = (data) => {
    let existChampions = getAllData();
    let newChampions = [data, ...existChampions];
    cacheData(newChampions);
    loadingToggle();
    championContainer.insertAdjacentHTML(
        'afterbegin',
        `<card-champion class="col-md-3" nameChampion="${data.name}" title="${data.title}" image ="${data.img}" hp="${data.stats.hp}" mp="${data.stats.mp}" attackdamage="${data.stats.attackdamage}" attackspeed="${data.stats.attackspeed}"></card-champion>`
    );
};

// Reset all input add form
let resetInputAddForm = () => {
    let allInput = document.querySelectorAll('.offcanvas-body input');
    allInput.forEach((input) => {
        input.value = '';
    });
};

// Open add panel when click btn
btnOpenAddPanel.onclick = () => {
    addPanel.show();
};

// Recache data
btnRecache.onclick = () => {
    cacheData(champions);
    loadingToggle();
    renderData(getAllData(), championContainer);
};

btnSaveAddChampion.onclick = () => {
    let name = inputChampionName.value ? inputChampionName.value : '####';
    let title = inputChampionTitle.value ? inputChampionTitle.value : '########';
    let hp = inputChampionHp.value ? inputChampionHp.value : 0;
    let mp = inputChampionMp.value ? inputChampionMp.value : 0;
    let attackdamage = inputChampionAd.value ? inputChampionAd.value : 0;
    let attackspeed = inputChampionAs.value ? inputChampionAs.value : 0;
    let img = inputChampionImg.value ? inputChampionImg.value : 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg';

    let newChampion = {
        img,
        name,
        title,
        stats: {
            hp,
            mp,
            attackdamage,
            attackspeed,
        },
    };

    addNewChampion(newChampion);

    resetInputAddForm();
    addPanel.hide();
};
