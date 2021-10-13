import { Link } from "react-scroll";

export default function HomeBanner() {

    return <div className="banner">
        <div className="banner_content">
            <h1 className="banner1">Hello</h1>
            <h2 className="banner2">I'm Luke Pugmire</h2>
            <h2 className="banner3">Welcome to my Website</h2>
            <p className="banner4">Front-End Developer&#47;Web Designer</p>
        </div>
        <div className="scroll_box">
        <Link className="anchor" to="smooth_scroll" smooth={true} duration={2000}>
        <h2 className="call_to_action">Find Out More</h2>
            <div className="scrolldown">
            <span></span>
            <span></span>
            <span></span>
        </div>
        </Link>
        </div>
        
    </div>
}
