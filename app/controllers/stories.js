import NavBar from '../components/navbar';
import SectionBar from '../components/section-bar';

class StoriesController {
    constructor(stories) {
        this.navBar = new NavBar();
        this.sectionBar = new SectionBar();
        this.stories = stories;
    }

    renderStories() {
        return this.stories.results.map((story) => {
            return `<h3>${story.title}</h3>`;
        }).join('');
    }

    render() {
        return `
        ${this.navBar.render()}
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3">
                    ${this.sectionBar.render()}
                </div>
                <div class="col-md-9">
                    <h1 class="text-uppercase">${this.stories.section}</h1>
                    ${this.renderStories()}
                </div>
            </div>
        </div>
        `;
    }
}

export default StoriesController;