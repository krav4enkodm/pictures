export class Picture extends HTMLElement {
    constructor() {
        super();
        console.log(this);
    }

    connectedCallback() {
        console.log('connected')
    }
}
