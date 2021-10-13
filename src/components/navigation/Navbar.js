import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {

    const [open, setOpen] = useState(false);



    return (
        <>
        <nav className={open ? "nav_container nav_active" : "nav_container"}>
                    <div className="logo_box">
                       <NavLink to="/" exact className={open ? "logo_link logo_active" : "logo_link"} onClick={() => setOpen(false)}><h1 className="logo">Luke Pugmire</h1></NavLink>
                    </div>
                    <ul className="navigation">
                        <li>
                            <NavLink to="/Contact" className={open ? "nav_link nav_link1 nav_link1_active" : "nav_link nav_link1"} onClick={() => setOpen(false)}>Contact</NavLink>
                        </li>
                    </ul>
                    <div className="social_media">
                        <a href="https://www.facebook.com/luke.pugmire" className={open ? "media_links media_links_active" : "media_links"}><i className="fab fa-facebook-square fa-lg"></i></a>
                        <a href="https://www.instagram.com/lukepugmire/?hl=en" className={open ? "media_links media_links_active" : "media_links"}><i className="fab fa-instagram-square fa-lg"></i></a>
                        <a href="https://www.linkedin.com/in/luke-pugmire-2970bb137/" className={open ? "media_links media_links_active" : "media_links"}><i className="fab fa-linkedin fa-lg"></i></a>
                        <a href="https://github.com/lukepugmire" className={open ? "media_links media_links_active" : "media_links"}><i className="fab fa-github-square fa-lg"></i></a>
                    </div>
                </nav>
        
        <div className="hamburger_menu" onClick={() => setOpen(!open)}>
            <div className={open ? "line line1_active" : "line line1"}></div>
            <div className={open ? "line line2_active" : "line line2"}></div>
            <div className={open ? "line line3_active" : "line line3"}></div>
        </div>
        </>
    )
}
