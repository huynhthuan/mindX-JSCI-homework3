import { getDateNow } from './helpers.js';

class Employee {
    constructor(name, image, created_at = getDateNow()) {
        this._id = String(Date.now());
        this._name = name;
        this._image = image;
        this._created_at = created_at;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get image() {
        return this._image;
    }

    update(data) {
        this._name = data.name ? data.name : this._name;
        this._image = data.image ? data.image : this._image;
    }

    show() {
        return `<tr>
                    <td class="text-center" width="20%">${this._id}</td>
                    <td class="text-center" width="30%"><img src="${this._image}" class="img-ava"/></td>
                    <td class="text-center" width="20%">${this._name}</td>
                    <td class="text-center" width="10%">${this._created_at}</td>
                    <td class="text-center" width="20%"><button class="btn btn-warning me-2" data-employee='${JSON.stringify(
                        this
                    )}' data-bs-toggle="modal" data-bs-dismiss="modal" data-bs-target="#exampleModal2"><i class="fas fa-user-edit"></i></button><button data-id="${
            this._id
        }" class="btn btn-danger remove"><i class="fas fa-user-minus"></i></button></td>
                </tr>`;
    }
}

export default Employee;
