import HomeBackground from "./HomeBackground";
import HomeBanner from "./HomeBanner";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import Footer from "./footer/Footer";

export default function Home() {
    return <>
    <HomeBackground />
        <HomeBanner />
        <About />
        <Portfolio />
        <Footer />
    </>
}
