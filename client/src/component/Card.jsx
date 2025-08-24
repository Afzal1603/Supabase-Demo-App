import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
const Card = ({ item, onDelete }) => {
  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      await axios.delete(`http://localhost:3000/users/${item.id}`);
      toast.success("User deleted successfully");
      onDelete(item.id);
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };
  return (
    <div className="bg-slate-800 w-50  mt-10 p-4 rounded">
      <h1 className="text-xl font-bold">{item.name}</h1>
      <h1 className="text-sm text-gray-400 pl-2">{item.email}</h1>
      <div className="flex justify-end  gap-4 mt-2">
        <Link
          className="bg-blue-400 hover:cursor-pointer text-gray-950 px-1 rounded text-sm font-semibold"
          to={`/updateuser/${item.id}`}
        >
          Update
        </Link>

        <button
          onClick={handleDelete}
          className="bg-red-400 hover:cursor-pointer text-gray-950 px-1 rounded text-sm font-semibold"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
