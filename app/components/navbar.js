class NavBar {
    constructor() {

    }

    render() {
        return `
            <nav class="navbar navbar-inverse navbar-fixed-top">
              <div class="container-fluid">
                <div class="navbar-header">
                  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" 
                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                  <a class="navbar-brand" href="#">ES6-Nude</a>
                </div>
            
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul class="nav navbar-nav navbar-right">
                    <li><a href="#/">Home</a></li>
                    <li><a href="#/stories/home">Stories</a></li>
                    <li><a href="#/about">About</a></li>
                  </ul>
                </div>
              </div>
            </nav>
        `;
    }
}

export default NavBar;