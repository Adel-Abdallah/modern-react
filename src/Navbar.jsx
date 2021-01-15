import { Link } from 'react-router-dom'
const Navbar = () => {
    return (

        <nav className="navbar">
            <h1>The Blog</h1>
            <Link to="/">Home</Link>
            <Link to="/create">New blog</Link>
        </nav>
    );
}

export default Navbar;