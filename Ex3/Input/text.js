class CustomInput extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({
            mode: 'open',
        });
    }

    static get observedAttributes() {}

    attributeChangedCallback(name, oldValue, newValue) {}

    connectedCallback() {
        let style = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">`;

        var template = `
        ${style}
        <div class="mb-3">
            <label for="${this.label_for}" class="form-label">${this.label}</label>
            <input type="${this.type}" id="${this.input_id}" name="${this.name}" class="form-control" placeholder="${this.placeholder}">
        </div>`;

        this.shadow.innerHTML = template;
    }

    get label() {
        return this.getAttribute('label');
    }

    set label(val) {
        this.setAttribute('label', val);
    }

    get label_for() {
        return this.getAttribute('label-for');
    }

    set label_for(val) {
        this.setAttribute('label-for', val);
    }

    get input_id() {
        return this.getAttribute('input-id');
    }

    set input_id(val) {
        this.setAttribute('input-id', val);
    }

    get name() {
        return this.getAttribute('name');
    }

    set name(val) {
        this.setAttribute('name', val);
    }

    get placeholder() {
        return this.getAttribute('placeholder');
    }

    set placeholder(val) {
        this.setAttribute('placeholder', val);
    }

    get type() {
        return this.getAttribute('type');
    }

    set type(val) {
        this.setAttribute('type', val);
    }
}
// export module
window.customElements.define('custom-input', CustomInput);
