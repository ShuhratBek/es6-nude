import BaseClass from '../base-class';
import SectionBar from '../components/section-bar';

class StoriesController extends BaseClass {
    constructor(stories) {
        super();
        this.sectionBar = new SectionBar(stories.section);
        this.stories = stories;
        this.template = `
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        ${this.sectionBar.render()}
                    </div>
                    <div class="col-md-9">
                        <h1 class="text-uppercase">${this.stories.section} <span class="badge badge-default">${this.stories.num_results}</span></h1>
                            <div class="masonry-row">
                                ${this.renderStories()}
                            </div>
                    </div>
                </div>
            </div>`;
    }

    getThumbnail(media) {
        if(media.length > 0) {
            let image = media.find(x => x.format === 'superJumbo');
            return `<img src="${image.url}" alt="${image.caption}" class="img-responsive">`;
        }
        return '';
    }

    renderStories() {
        return this.stories.results.map((story) => {
            return `
            <div class="item">
                <div class="wrapper thumbnail">
                    ${this.getThumbnail(story.multimedia)}
                    <div class="caption">
                        <h4>${story.title}</h4>
                        <em class="text-muted">${story.byline}</em>
                        <p>${story.abstract}</p>
                        <a href="${story.url}" target="_blank" class="btn btn-primary btn-block" role="button">Read more...</a>
                    </div>
                </div>
            </div>`;
        }).join('');
    }
}

export default StoriesController;