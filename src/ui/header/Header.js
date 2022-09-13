import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {

    const cartList = useSelector(state => state.cartList);

    return (
        <>
            <header>
                <nav className="header-navigation">
                    <NavLink to='/home' className="nav-link">Home</NavLink>
                    <NavLink to='/about' className="nav-link">About</NavLink>
                    <NavLink to='/cart' className="nav-link ml-auto">Cart : {cartList.length}</NavLink>
                </nav>
            </header>
        </>
    );
}