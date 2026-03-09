import { Link, NavLink} from "react-router";

export const navLinks = <>
    <li><NavLink to="./" className={({ isActive }) => (isActive && "text-success")}>Home</NavLink></li>
    <li><NavLink to="/my-booking" className={({isActive})=> isActive && "text-success"}>My-Bookings</NavLink></li>
    <li><NavLink to="/blogs" className={({isActive})=> isActive && "text-success"}>Blogs</NavLink></li>
    <li><Link>Contact Us</Link></li>
</>;

