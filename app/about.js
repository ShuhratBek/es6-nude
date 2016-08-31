import { NavBar } from './navbar';

class AboutPageController {
    constructor() {
        this.navBar = new NavBar();
    }

    render()  {
        return `
        ${this.navBar.render()}
        <hr>
        <h1 class="text-center">About Us</h1>
        `
    };
}

export default AboutPageController;