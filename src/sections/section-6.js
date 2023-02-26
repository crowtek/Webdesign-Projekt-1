import "./section-6.css"

export function Section6(){
    return (
        <section className="section-6">
            <div className="section-6-ImageContainer">
                <h1>THE BRAND</h1>
                <img src="forest.jpg" alt="Forest"></img>
                <div className="section-6-strich"></div>
            </div>

            <div className="section-6-textContainer">
                <h2>Brand Vibes & Echos</h2>
                <p>
                    A brand is an intangible marketing or business concept that helps people 
                    identify a company, product, or individual.
                    People often confuse brands with things like logos, slogans, or other recognizable 
                    marks, which are marketing tools that help promote goods and services.
                    Brands are considered to be among a company's most important and valuable assets.
                </p>
            </div>
        </section>
    );
}