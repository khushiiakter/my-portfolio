import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";


const MainLayouts = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;