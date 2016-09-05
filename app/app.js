import HomeController from "./controllers/home";
import StoriesController from "./controllers/stories";
import AboutController from "./controllers/about";
const API_URL = `https://api.nytimes.com/svc/topstories/v2/`;
const API_KEY = 'f0685eed837242f6842e7948796dcafa';

var routes = {
    '/': () => {
        let homePage = new HomeController();
        document.body.innerHTML = homePage.render();
    },
    '/stories': {
        '/:section': {
            on: (section) => {
                let request = new Request(`${API_URL}${section}.json?api-key=${API_KEY}`, {
                        method: 'GET'
                    }
                );
                fetch(request)
                    .then((response) => {
                        if (response.status >= 200 && response.status < 300) {
                            return Promise.resolve(response);
                        } else {
                            return Promise.reject(new Error(response.statusText));
                        }
                    })
                    .then((response) => {
                            return response.json();
                    })
                    .then((data) => {
                        let storiesPage = new StoriesController(data);
                        document.body.innerHTML = storiesPage.render();
                    }).catch(function(err) {
                            // Error :(
                    });
            }
        }
    },
    '/about': () => {
        let aboutPage = new AboutController();
        document.body.innerHTML = aboutPage.render();
    }
};

var router = Router(routes);
router.init();
router.setRoute('/');