class FeaturesSection {
    constructor() {
        let request = new Request('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=f0685eed837242f6842e7948796dcafa', {
                method: 'GET'
            }
        );
        fetch(request)
            .then(function(response) {
                this.features = response.json();
            });

    }

    renderFeatureRows() {
        return this.features.map(function(feature) {
            return `
            <div class="row text-center">
                <div class="col-sm-12">
                    <h4>${feature.section}</h4>
                    <p>${feature.description}</p>
                    <p>${feature.image}</p>
                </div>
            </div>
            `
        }).join('')
    }

    render()  {
        return `
        <section class="features-section">
            <h1 class="text-center">Features Section</h1>
            ${this.renderFeatureRows()}
        </section>
        <hr>
        `
    }
}

export default FeaturesSection;