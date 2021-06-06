let table = document.querySelector('.table');
let tableContainer = table.querySelector('tbody');
let inputCol = document.querySelector('#tableCol');
let inputRow = document.querySelector('#tableRow');
let btnEdit = document.querySelector('#btn-edit-block');
let btnEditDetail = document.querySelector('#btn-edit-detail-block');
let editForm = document.querySelector('#editBlockModal');
let editDetailForm = document.querySelector('#editBlockModalDetail');
let modalSearchBlock = new bootstrap.Modal(document.getElementById('editBlockModal'));
let modalEditBlock = new bootstrap.Modal(document.getElementById('editBlockModalDetail'));
let blockSelect;
let newDataInput = document.querySelector('#newData');

// Render data table
let renderDataTable = (parentEl, data) => {
    let html = data
        .map((champion, index) => {
            return `<tr data-key="${champion.key}"><th scope="row" class="bg-light">${index + 2}</th><td class="disabled"><div class="champion-meta"><div class="champion-img"><img src="${
                champion.icon
            }"/></div> ${champion.name}</div></td><td id="b${index + 2}" data-bs-toggle="tooltip" data-bs-placement="right" title="B : ${index + 2}">${champion.stats.hp}</td><td id="c${
                index + 2
            }" data-bs-toggle="tooltip" data-bs-placement="right" title="C : ${index + 2}">${champion.stats.mp}</td><td id="d${
                index + 2
            }"  data-bs-toggle="tooltip" data-bs-placement="right" title="D : ${index + 2}">${champion.stats.attackdamage}</td><td id="e${
                index + 2
            }" data-bs-toggle="tooltip" data-bs-placement="right" title="E : ${index + 2}">${champion.stats.attackspeed}</td><td id="f${
                index + 2
            }" data-bs-toggle="tooltip" data-bs-placement="right" title="F : ${index + 2}">${champion.stats.attackrange}</td></tr>`;
        })
        .join('');

    parentEl.innerHTML += html;
};

// Get all col name of table
let getTableTheadNames = (tableEl) => {
    let arrThead = Array.from(tableEl.querySelectorAll('thead tr th'));
    arrThead.shift();
    return arrThead.map((thead) => thead.innerText.toLowerCase());
};

// Check col name exits in table
let isValidColName = (colName, tableEl) => {
    return getTableTheadNames(tableEl).includes(colName.toLowerCase()) && colName.toLowerCase() !== 'a';
};

// Check row value exits in table
let isValidRowValue = (rowValue, tableContainerEl) => {
    return Number(rowValue) >= 2 && Number(rowValue) <= tableContainerEl.childElementCount;
};

// Reset input

let resetInput = (formEL) => {
    formEL.querySelectorAll('input').forEach((element) => {
        element.value = '';
    });
};

// Show error
let showError = (errText, formEL) => {
    formEL.querySelector('.edit-error').classList.remove('d-none');
    formEL.querySelector('.text-error').innerText = errText;
};

// Clear error
let clearError = (formEL) => {
    formEL.querySelector('.edit-error').classList.add('d-none');
};

// Render data
renderDataTable(tableContainer, champions);

// Enable tooltip
let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Reset td active
let resetTdActive = () => {
    let tdValid = tableContainer.querySelectorAll('td:not(.disabled)');

    tdValid.forEach((element) => {
        element.classList.remove('active');
    });
};

// Btn edit onclick

btnEdit.onclick = () => {
    if (isValidColName(inputCol.value, table) && isValidRowValue(inputRow.value, tableContainer)) {
        blockSelect = document.querySelector('#' + inputCol.value.toLowerCase() + inputRow.value);
        clearError(editForm);
        modalSearchBlock.hide();
        modalEditBlock.show();
        editDetailForm.querySelector('.modal-title').innerText = `Sửa dữ liệu ô [${inputCol.value.toUpperCase()}:${inputRow.value}] - ${blockSelect.innerText}`;
    } else {
        showError('Vị trí ô dữ liệu không hợp lệ!', editForm);
    }
};

btnEditDetail.onclick = () => {
    if (!newDataInput.value) {
        showError('Dữ liệu mới không hợp lệ!', editDetailForm);
    } else {
        clearError(editDetailForm);
        blockSelect.innerText = newDataInput.value;
        modalEditBlock.hide();
        resetTdActive();
        blockSelect.classList.add('active');
    }
};

// Reset modal when close
editForm.addEventListener('hidden.bs.modal', function (event) {
    clearError(editForm);
    resetInput(editForm);
});

editDetailForm.addEventListener('hidden.bs.modal', function (event) {
    clearError(editForm);
    resetInput(editDetailForm);
});
