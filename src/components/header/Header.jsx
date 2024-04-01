import { Outlet } from "react-router-dom";
import Navber from "./navbar/Navbar";

const Header = () => {
    return (
        <div>
            <Navber><Outlet /></Navber>
        </div>
    );
};

export default Header;