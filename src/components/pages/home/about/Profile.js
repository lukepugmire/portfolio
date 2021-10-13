import {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Profile() {

    useEffect(() => {
        Aos.init({duration: 3000})
    },[]);

    return (
        <div className="profile">
            <div className="profile_image" data-aos="fade-up">
            </div>
            <div className="about_me" data-aos="fade-up">
            <h2>About Me</h2>
                        <p>Born in 1994, I am originally from New Zealand. I grew up in the small rural 
                            community of Marton that boasted a population inching only slightly above 5000 people.</p>
                        <p>Near the end of 2014, A few years after finishing highschool, I made my way across the 
                            globe to Norway and spent my time working as a bartender and travelling both within Norway and abroad.</p>
                        <p>In 2019 I made my move into learning front-end development through Noroff University. I found myself 
                            attracted to the creative and problem solving components that are so inherent within the subject.
                            The more compelling alure however is the seemingly endless potential for improvement. 
                            Put simply, I like coding and I would like to keep getting better at it.  
                        </p>
            </div>
        </div>
    )
}
