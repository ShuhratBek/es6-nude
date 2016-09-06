import NavBar from './components/navbar';
import Footer from './components/footer';

class BaseClass {
    constructor() {
        this.navBar = new NavBar();
        this.footer = new Footer();
        this.template = '';
    }

    render() {
        return `
        ${this.navBar.render()}
        ${this.template}
        ${this.footer.render()}`;
    }
}

export default BaseClass;