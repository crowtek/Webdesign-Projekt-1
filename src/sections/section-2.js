import { Trennstrich } from "../components/trennstrich";
import "./section-2.css";

export function Section2() {
    return (
        <div style={{ height: '100vh'}}>
            <section className="section-2">
                <div className="text-container">
                    <h1>OUR VALUES</h1>
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
            </section>
        </div>
    );
}