import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Footer/Footer";

const MainLayouts = () => {
    return (
        <div className="w-full h-[1000px] mx-auto ">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;