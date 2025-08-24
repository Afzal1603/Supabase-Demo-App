import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-950 text-emerald-400 h-10">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-full">
        <h1 className="text-2xl font-semibold ">
          <Link to={"/"}>Supabase Connect</Link>
        </h1>
        <ul className="flex gap-4">
          <li className="bg-emerald-400 text-gray-950 font-semibold px-1 rounded">
            <Link to={"/adduser"}>Add User</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
