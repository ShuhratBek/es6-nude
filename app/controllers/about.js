import NavBar from '../components/navbar';

class AboutController {
    constructor() {
        this.navBar = new NavBar();
    }

    render()  {
        return `
        ${this.navBar.render()}
        <h1 class="text-center">About Us</h1>
        `
    };
}

export default AboutController;