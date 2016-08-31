import NavBar from './navbar';
import MainSection from './main';
import FeaturesSection from './features';
import NewsletterSection from './newsletter';

class HomePageController {
    constructor() {
        this.navBar = new NavBar();
        this.mainSection = new MainSection();
        this.featuresSection = new FeaturesSection();
        this.newsletterSection = new NewsletterSection();
    }

    render()  {
        return `
        ${this.navBar.render()}
        <hr>
        ${this.mainSection.render()}
        ${this.featuresSection.render()}
        ${this.newsletterSection.render()}
        `;
    }
}

export default HomePageController;