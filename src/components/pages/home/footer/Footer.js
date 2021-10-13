import { Link } from "react-router-dom";
export default function Footer() {
    return <div className="foot_container"> 
    <p>Created by Luke Pugmire</p>
    <p>Built with Create React App</p>
    <Link className="footer_link" to="/contact">Contact Me</Link>
    <div className="find_me">
    <a href="https://www.facebook.com/luke.pugmire"><i className="fab fa-facebook-square fa-lg"></i></a>
                        <a href="https://www.instagram.com/lukepugmire/?hl=en" ><i className="fab fa-instagram-square fa-lg"></i></a>
                        <a href="https://www.linkedin.com/in/luke-pugmire-2970bb137/" ><i className="fab fa-linkedin fa-lg"></i></a>
                        <a href="https://github.com/lukepugmire"><i className="fab fa-github-square fa-lg"></i></a>
    </div>
    </div>

}
