import {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Stats() {

    useEffect(() => {
        Aos.init({duration: 3000})
    },[]);

    return <div className="about" id="smooth_scroll">
        <div className="stats" data-aos="fade-up">
            <h3>HTML</h3>
            <i className="fab fa-html5 fa-4x"></i>
            <div className="loading"><div className="load_html">Loading...</div></div>
        </div>
        <div className="stats" data-aos="fade-up">
            <h3>Css</h3>
            <i className="fab fa-css3-alt fa-4x"></i>
            <div className="loading"><div className="load_css">Loading...</div></div>
        </div>
        <div className="stats" data-aos="fade-up">
            <h3>Javascript</h3>
            <i className="fab fa-js fa-4x"></i>
            <div className="loading"><div className="load_script">Loading...</div></div>
        </div>
        <div className="stats" data-aos="fade-up">
            <h3>React</h3>
            <i className="fab fa-react fa-4x"></i>
            <div className="loading"><div className="load_react">Loading...</div></div>
        </div>
    </div>
}
