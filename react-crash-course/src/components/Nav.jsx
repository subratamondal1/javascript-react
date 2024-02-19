import { Link } from "react-router-dom"
function Nav ()
{
    return (
    <nav className="px-4 py-2 border-2 border-blue-600 rounded-md flex justify-evenly text-2xl font-bold m-8">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/users/messi">Messi</Link>
        <Link to="/users/ronaldo">Ronaldo</Link>
      </nav>
    )
}

export default Nav