import { Trennstrich } from "../components/trennstrich";
import "./section-7.css";

export function Section7() {
    return (
        <section className="section-7">
            <div className="section-7-textContainer">
                <h1>OUR MISSION</h1>
                <Trennstrich width={20}/>
                <ul>
                    <li>
                        A company that advocates for the protection of nature 
                        demonstrates responsibility and takes into account the impact of 
                        its actions on the environment.
                    </li>
                    <li>
                        A company that is committed to nature emphasizes 
                        environmentally friendly practices and strives to minimize its 
                        impact on the environment.
                    </li>
                    <li>
                        A company that advocates for the protection 
                        of nature has an understanding of the importance of nature and works 
                        to raise awareness of the environment among others.
                    </li>
                </ul>
            </div>
            <div className="section-7-imageContainer"></div>
        </section>
    );
}