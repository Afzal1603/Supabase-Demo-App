import { useState } from "react";
import Navbar from "../component/Navbar";
import axios from "axios";
import toast from "react-hot-toast";
const CreateUser = () => {
  const [data, setData] = useState({ name: "", email: "" });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/users", data);
      toast.success(res.data.message);
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }

    setData({ name: "", email: "" });
  };
  return (
    <div className="h-screen bg-gray-950 text-emerald-400 flex flex-col">
      <Navbar />
      <div className="flex-1 flex justify-center items-start mt-40">
        <form className="flex flex-col gap-4 p-6 outline-1 w-80 rounded-xl shadow-lg">
          <h1 className="text-2xl font-semibold text-center">Add New User</h1>

          <input
            onChange={handleChange}
            name="name"
            value={data.name}
            placeholder="Name"
            className="text-gray-950 bg-emerald-400 h-10 px-3 rounded"
            type="text"
          />
          <input
            onChange={handleChange}
            name="email"
            type="text"
            value={data.email}
            placeholder="Email"
            className="text-gray-950 bg-emerald-400 h-10 px-3 rounded"
          />
          <button
            onClick={handleSubmit}
            className="hover:bg-emerald-400 hover:text-gray-950 h-10 rounded border-2 border-emerald-400 transition"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
