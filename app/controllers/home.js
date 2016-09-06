import BaseClass from '../base-class';

class HomeController extends BaseClass {
    constructor() {
        super();
        this.template = `
        <div class="container-fluid">
            <div class="jumbotron">
              <h1>Welcome to ES6-Nude!</h1>
              <p>SPA without framework</p>
              <p><a class="btn btn-primary btn-lg" href="#/stories/home" role="button">Stories</a></p>
            </div>
        </div>`;
    }
}

export default HomeController;