class CardChampion extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({
            mode: 'open',
        });
    }

    static get observedAttributes() {
        return ['image, nameChampion, title, hp, mp, attackdamage, attackspeed'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'nameChampion':
                console.log(newValue);
                break;
        }
    }

    connectedCallback() {
        let template = `
         <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
        <link rel="stylesheet" href="../../css/ex2/champion.css"/>
        <div class="champion-card">
                            <div class="btn-remove">
                                <i class="fas fa-times"></i>
                            </div>
                            <div class="champion-content">
                                <div class="champion-img">
                                    <img src="${this.image}"
                                        alt="champion-img" class="img-fluid">
                                </div>
                                <div class="champion-meta">
                                    <div class="champion-name">
                                        ${this.nameChampion}
                                        <span class="title">${this.title}</span>
                                    </div>
                                    <div class="champion-stat">
                                        <div class="stat-item">
                                            <div class="stat-label">HP</div>
                                            <div class="stat-value">
                                                <div class="stat-bar">
                                                    <div class="stat-bar-value" style="width: ${(this.hp / 625.64) * 100}%"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="stat-item">
                                            <div class="stat-label">MP</div>
                                            <div class="stat-value">
                                                <div class="stat-bar">
                                                    <div class="stat-bar-value" style="width: ${(this.mp / 500) * 100}%"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="stat-item">
                                            <div class="stat-label">AD</div>
                                            <div class="stat-value">
                                                <div class="stat-bar">
                                                    <div class="stat-bar-value" style="width: ${(this.attackdamage / 70) * 100}%"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="stat-item">
                                            <div class="stat-label">AS</div>
                                            <div class="stat-value">
                                                <div class="stat-bar">
                                                    <div class="stat-bar-value" style="width: ${(this.attackspeed / 0.8) * 100}%" ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`;
        this.shadow.innerHTML = template;

        const btnRemove = this.shadow.querySelector('.btn-remove');

        btnRemove.onclick = () => {
            let existChampions = getAllData();
            const indexChampion = existChampions.findIndex((champion) => champion.name === this.nameChampion);
            existChampions.splice(indexChampion, 1);
            cacheData(existChampions);
            loadingToggle();
            this.remove();
        };
    }

    get nameChampion() {
        return this.getAttribute('nameChampion');
    }

    get title() {
        return this.getAttribute('title');
    }

    get image() {
        return this.getAttribute('image');
    }

    get hp() {
        return this.getAttribute('hp');
    }

    get mp() {
        return this.getAttribute('mp');
    }

    get attackdamage() {
        return this.getAttribute('attackdamage');
    }

    get attackspeed() {
        return this.getAttribute('attackspeed');
    }

    set nameChampion(val) {
        this.setAttribute('_nameChampion', val);
    }
}
// export module
window.customElements.define('card-champion', CardChampion);
