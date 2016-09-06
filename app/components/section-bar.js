class SectionBar {
    constructor(section) {
        this.sections = [
            'home',
            'opinion',
            'world',
            'national',
            'politics',
            'upshot',
            'nyregion',
            'business',
            'technology',
            'science',
            'health',
            'sports',
            'arts',
            'books',
            'movies',
            'theater',
            'sundayreview',
            'fashion',
            'tmagazine',
            'food',
            'travel'
        ];
        this.section = section;
    }

    renderSection() {
        return this.sections.map((section) => {
            return `<a href="#/stories/${section}" class="list-group-item text-capitalize${section === this.section ? ' active' : ''}">${section}</a>`;
        }).join('');
    }

    render() {
        return `
            <div class="list-group">
              ${this.renderSection()}
            </div>`;
    }
}

export default SectionBar;