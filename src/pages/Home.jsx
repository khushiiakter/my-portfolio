import About2 from "../components/About2";
import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";


const Home = () => {
    return (
        <div>
            <div className="container mx-auto">
                <Navbar></Navbar>
            </div>
            <Banner></Banner>
            {/* <div className="container mx-auto py-6">
                <AboutMe></AboutMe>
            </div> */}
            <div className="container mx-auto py-6">
               <About2></About2>
            </div>
            <div className="container  mx-auto py-6">
                <Skills></Skills>
            </div>
            <div className="container mx-auto py-6">
                <Projects></Projects>
            </div>
            <div className="container  mx-auto py-10">
               <Contact></Contact>
            </div>
            
            
        </div>
    );
};

export default Home;