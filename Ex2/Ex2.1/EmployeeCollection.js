import Employee from './Employee.js';

class EmployeeCollection {
    constructor(name, owner, employees = []) {
        this._id = String(Date.now());
        this._name = name;
        this._owner = owner;
        this._employees = employees;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get owner() {
        return this._owner;
    }

    get employees() {
        return this._employees;
    }

    add(employee) {
        if (!employee instanceof Employee) {
            return 'Data is not instance of Employee';
        }

        this._employees.push(employee);
    }

    update(id, data) {
        // Get index affected employee
        let index = this._employees.findIndex((employee) => employee.id === id);
        // Update employee
        this._employees[index].update(data);
    }

    delete(id) {
        // Get index affected employee
        let index = this._employees.findIndex((employee) => employee.id === id);

        // Delete employee
        this._employees.splice(index, 1);
    }

    show() {
        return `<tr>
                    <td class="text-center" width="20%">${this._id}</td>
                    <td class="text-center" width="30%">${this._name}</td>
                    <td class="text-center" width="30%">${this._owner}</td>
                    <td class="text-center" width="20%"><button class="btn btn-success me-1 open-employee" data-id="${this._id}" title="Thêm nhân viên" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample2"
                aria-controls="offcanvasExample"><i class="fas fa-user-plus"></i></button><button class="btn btn-warning" title="Danh sách nhân viên" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${this._id}"><i class="fas fa-eye"></i></button></td>
                </tr>`;
    }
}

export default EmployeeCollection;
