import { clearInputForm } from './helpers.js';

import Employee from './Employee.js';
import EmployeeCollection from './EmployeeCollection.js';

// Variable
let currentCollection = '';
let currentEmployeeId = '';
let listEmployeeCollection = [];

// Table
const employeeCollectionTableBody = document.querySelector('#employee-collection-table tbody');
const employeeTableBody = document.querySelector('#employee-table tbody');

// Form
const employeeCollectionForm = document.querySelector('#employee-collection-form');
const employeeForm = document.querySelector('#employee-form');

// Button
const btnAddEmployeeCollection = document.querySelector('#btn-collection');
const btnAddEmployee = document.querySelector('#btn-employee');
const btnEditEmployee = document.querySelector('#btn-edit-employee');

// Input
const inputEmployeeCollectionName = document.querySelector('#collection-name');
const inputEmployeeCollectionCreaterName = document.querySelector('#collection-creater-name');

const inputEmployeeName = document.querySelector('#employee-name');
const inputEmployeeImage = document.querySelector('#employee-image');

const inputEditEmployeeName = document.querySelector('#edit-employee-name');
const inputEditEmployeeImage = document.querySelector('#edit-employee-image');

// Panel
const viewEmployeePanel = document.getElementById('exampleModal');
const editEmployeePanel = document.getElementById('exampleModal2');
const addEmployeePanel = document.getElementById('offcanvasExample2');
const addEmployeeCollectionPanel = document.getElementById('offcanvasExample');

const bsOffcanvasEmployeeCollection = new bootstrap.Offcanvas(addEmployeeCollectionPanel);
const bsOffcanvasEmployeen = new bootstrap.Offcanvas(addEmployeePanel);
const bsModalEditEmployee = new bootstrap.Modal(editEmployeePanel);
const bsModalViewEmployee = new bootstrap.Modal(viewEmployeePanel);

// Bind event set id employee collection
const bindEventSetIdEmployeeCollection = () => {
    const btnOpenPanelEmployee = document.querySelectorAll('.open-employee');

    btnOpenPanelEmployee.forEach((btn) => {
        btn.onclick = () => {
            let employeeCollectionId = btn.dataset.id;
            btnAddEmployee.dataset.id = employeeCollectionId;
        };
    });
};

const bindEventRemoveEmployee = () => {
    const btnRemoveEmployee = document.querySelectorAll('.remove');

    // Remove employee from employee collection
    btnRemoveEmployee.forEach((btn) => {
        btn.onclick = () => {
            let employeeId = btn.dataset.id;

            listEmployeeCollection.map((collection) => {
                if (collection._id === currentCollection) {
                    collection.delete(employeeId);
                }
            });

            btn.parentElement.parentElement.remove();
        };
    });
};

// Add employee collection
btnAddEmployeeCollection.onclick = () => {
    const newEmployeeCollection = new EmployeeCollection(inputEmployeeCollectionName.value, inputEmployeeCollectionCreaterName.value);

    listEmployeeCollection.push(newEmployeeCollection);
    employeeCollectionTableBody.innerHTML += newEmployeeCollection.show();
    bindEventSetIdEmployeeCollection();
    clearInputForm(employeeCollectionForm);
    bsOffcanvasEmployeeCollection.hide();
};

// Add employee to employee collection
btnAddEmployee.onclick = (event) => {
    currentCollection = event.target.dataset.id;

    const newEmployee = new Employee(inputEmployeeName.value, inputEmployeeImage.value);

    listEmployeeCollection.map((collection) => {
        if (collection.id === currentCollection) {
            collection.add(newEmployee);
        }
    });

    clearInputForm(employeeForm);
    bsOffcanvasEmployeen.hide();
};

// Show all employee of employee collection

viewEmployeePanel.addEventListener('show.bs.modal', function (event) {
    console.log(event.relatedTarget, currentCollection);
    let button = event.relatedTarget;
    if (button) {
        currentCollection = button.dataset.id;
    }

    let collection = listEmployeeCollection.filter((collection) => collection.id === currentCollection)[0];

    if (collection.employees.length > 0) {
        employeeTableBody.innerHTML = collection.employees
            .map((employee) => {
                return employee.show();
            })
            .join('');
        bindEventRemoveEmployee();
    } else {
        employeeTableBody.innerHTML = '<tr><td colspan="5" class="text-center">Chưa có nhân viên.</td></tr>';
    }
});

// Bind data when open modal edit employee
editEmployeePanel.addEventListener('show.bs.modal', function (event) {
    const btn = event.relatedTarget;
    const employeeName = editEmployeePanel.querySelector('#edit-employee-name');
    const employeeImage = editEmployeePanel.querySelector('#edit-employee-image');

    let employee = JSON.parse(btn.dataset.employee);
    currentEmployeeId = employee._id;

    employeeName.value = employee._name;
    employeeImage.value = employee._image;

    btnEditEmployee.dataset.id = currentCollection;
});

// Edit Employee
btnEditEmployee.onclick = () => {
    listEmployeeCollection.map((collection) => {
        if (collection.id === currentCollection) {
            collection.update(currentEmployeeId, {
                name: inputEditEmployeeName.value,
                image: inputEditEmployeeImage.value,
            });
        }
    });

    bsModalEditEmployee.hide();
    bsModalViewEmployee.show();
};
