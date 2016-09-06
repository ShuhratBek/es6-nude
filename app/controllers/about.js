import BaseClass from '../base-class';

class AboutController extends BaseClass {
    constructor() {
        super();
        this.template = `
            <h1 class="text-center">About Us</h1>
        `;
    }
}

export default AboutController;