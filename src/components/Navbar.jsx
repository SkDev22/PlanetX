import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="w-full z-10 fixed h-16 flex justify-between items-center bg-gradient-to-r from-[#0D0C1D] via-[#0F1124] to-[#0D0C1D] px-20 ">
        <Link to="/">
          {" "}
          <h1 className="text-white text-3xl font-bold">PlanetX</h1>
        </Link>
        <ul className="text-white flex gap-10 items-center">
          <Link to="/">
            <li className=" cursor-pointer ">Home</li>
          </Link>
          <Link to="/about">
            {" "}
            <li className=" cursor-pointer ">About Us</li>
          </Link>
          <a href="https://rapidapi.com/newbAPIOfficial/api/planets-info-by-newbapi/">
            {" "}
            <li className=" cursor-pointer ">About API</li>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
