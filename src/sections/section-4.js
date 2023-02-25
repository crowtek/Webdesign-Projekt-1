import { Palette } from "../components/palette";
import "./section-4.css";

export function Section4() {
    return (
        <section className="section-4">
            <div className="section-4-title">
                <h1>Palette</h1>
                <p>All the used Colors in this Palette</p>
            </div>
            <div className="section-4-paletten-container">
                <Palette color="#add8e6"/>
                <Palette color="#90ee90"/>
                <Palette color="#ffdab9"/>
                <Palette color="#d3d3d3"/>
            </div>
        </section>
    );
}
