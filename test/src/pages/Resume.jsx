import Header from "../components/Header.jsx";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import resumeFile from '../assets/Resume.png.pdf';

export default function Resume() {
    return (
        <>
            <Header></Header>
            <Nav></Nav>
            <p>
                <a href={resumeFile} target="_blank" rel="noopener noreferrer" download>Download Resume</a>
            </p>
            <Footer></Footer>
        </>
    );
}