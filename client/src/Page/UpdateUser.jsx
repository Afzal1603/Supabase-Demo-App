import { useEffect } from "react";
import Navbar from "../component/Navbar";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
const UpdateUser = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });
  const { id } = useParams();
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`http://localhost:3000/users/${id}`);
      setData(res.data);
      console.log(res.data);
    };
    fetchUser();
  }, []);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:3000/users/${id}`, data);
      console.log(res);
      toast.success("User updated successfully");
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };
  return (
    <div className="h-screen bg-gray-950 text-emerald-400 flex flex-col">
      <Navbar />
      <div className="flex-1 flex justify-center items-start mt-40">
        <form className="flex flex-col gap-4 p-6 outline-1 w-80 rounded-xl shadow-lg">
          <h1 className="text-2xl font-semibold text-center">Update User</h1>

          <input
            name="name"
            onChange={handleChange}
            placeholder="Name"
            className="text-gray-950 bg-emerald-400 h-10 px-3 rounded"
            type="text"
            value={data.name}
          />
          <input
            onChange={handleChange}
            name="email"
            type="text"
            placeholder="Email"
            className="text-gray-950 bg-emerald-400 h-10 px-3 rounded"
            value={data.email}
          />
          <button
            onClick={handleSubmit}
            className="hover:bg-emerald-400 hover:text-gray-950 h-10 rounded border-2 border-emerald-400 transition"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
