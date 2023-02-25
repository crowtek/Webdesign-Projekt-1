import "./section-1.css";
import { Trennstrich } from "../components/trennstrich";

export function Section1() {
    return (
    <section className="section-1">
        <div className="title-container">
            <h1>Natural</h1>
            <Trennstrich width={40}/>
            <h2>Nature isinspiring, therapeutic and rejuvenating </h2>
        </div>
    </section>
    );
}
