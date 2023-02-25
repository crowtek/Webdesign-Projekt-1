import "./section-1.css";
import { Trennstrich } from "../components/trennstrich";
// import useSmoothScroll from '../useScroll';

export function Section1() {
    return (
        <section className="section-1">
            <div className="title-container">
                <h1>Natural</h1>
                <Trennstrich width={40}/>
                <h2>Nature isinspiring, therapeutic and rejuvenating </h2>
                {/* <a href="#section5" onClick={(event) => handleClick(event, 'section5')}>Scroll to Section 5</a> */}
            </div>
        </section>
    );
}
