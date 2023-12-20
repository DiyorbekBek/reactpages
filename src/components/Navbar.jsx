import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="max_container flex items-center justify-between my-7 border-b-2 pb-2">
        <Link to="/" className="font-antonio text-3xl text-white">
          THE PLANETS
        </Link>
        <nav className="flex gap-3">
          <Link
            className="uppercase font-spartan text-white text-base opacity-80 hover:text-white hover:opacity-100"
            to="/"
          >
            mercury
          </Link>
          <Link
            className="uppercase font-spartan text-white text-base opacity-80 hover:text-orange-400"
            to="/venus"
          >
            venus
          </Link>
          <Link
            className="uppercase font-spartan text-white text-base opacity-80 hover:text-blue-700"
            to="/earth"
          >
            earth
          </Link>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
