import { Trennstrich } from "../components/trennstrich";
import "./section-3.css";

export function Section3() {
    return (
        <section className="section-3">
            <div className="text-container">
                <h1>BRAND GUIDLINES</h1>
                <Trennstrich width={20}/>
                <p>
                    Our nature-themed firm's website brand guidelines 
                    aim to create a strong and recognizable brand that 
                    embodies the beauty and importance of the natural world. 
                    We use a simple and memorable logo, a clean and easy-to-read font, 
                    an earthy color palette, and high-quality nature imagery to communicate 
                    our message. Our messaging is focused on promoting the importance of preserving 
                    the environment for future generations, using clear, concise, and inclusive language.
                </p>
            </div>
        </section>
    );
}
