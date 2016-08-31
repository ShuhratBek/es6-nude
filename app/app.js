import HomePageController from "./home";
import AboutPageController from "./about";

var routes = {
    '/': function() {
        let homePage = new HomePageController()
        document.body.innerHTML = homePage.render()
    },
    '/about': function() {
        let aboutPage = new AboutPageController()
        document.body.innerHTML = aboutPage.render()
    }
};

var router = Router(routes);
router.init();
router.setRoute('/');