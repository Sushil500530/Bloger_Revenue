import { Outlet } from "react-router-dom";
import Navber from "./navber/Navber";

const Header = () => {
    return (
        <div className="bg-[#f9fafc] w-full min-h-screen">
            <Navber><Outlet /></Navber>
        </div>
    );
};

export default Header;