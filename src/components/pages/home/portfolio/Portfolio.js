import {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Accordion from "./Projects";

export default function Portfolio() {

    useEffect(() => {
        Aos.init({duration: 3000})
    },[]);

    return (
        <div className="portfolio_container">
            <h2 data-aos="fade-up">Portfolio</h2>
            <div className="portfolio_wrapper">
            <Accordion title="Morten Seglem Fotograf" content="<p>Morten Seglem Fotograf was made with react app. It is my first work for a real world client, who was in need of a simple elegant website to advertise his photography and allow potential customers to contact him for further information and hiring.</p><a href='https://mortenseglemfotografv2.netlify.app/'>Go to website</a>"/>
            <Accordion title="Solar" content="<p>Solar, is a bootstrap project. It was a school project the purpose of which was to familiarise my self with working with bootstrap. It also includes a Nasa api but beyond that It is a simple site</p><a href='http://pictomime.com/frameworksca/index.html'>Go to website</a>"/>
            <Accordion title="SpaceX Mission Tracker" content="<p>SpaceX Mission Tracker was a first year assignment with the purpose of working with API's to retrieve and display information . specifically the spaceX api to display ship and launch data for upcoming mission as well as completed missions.</p><a href='http://pictomime.com'>Go to website</a>"/>
            <Accordion title="Letha" content="<p>Letha was an early HTML and CSS based school project in my first year</p><a href='http://pictomime.com/newpages/letha/home/html/index.html'>Go to website</a>"/>
            <Accordion title="World of science" content="<p>World of science was an early HTML and CSS based school project in my first year</p><a href='http://pictomime.com/newpages/musuem/homepage/html/homepage.html'>Go to website</a>"/>
            <Accordion title="Re-cycle" content="<p>Re-cycle was an early HTML and CSS based school project in my first year</p><a href='http://pictomime.com/newpages/recycle/home/html/home.html'>Go to website</a>"/>  
            </div>
            
        </div>
    )
}
