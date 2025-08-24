import Navbar from "../component/Navbar";
import Card from "../component/Card";
import { useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/users");
        setData(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-950 text-emerald-400">
      <Navbar></Navbar>
      <div className=" max-w-7xl mx-auto px-4 flex gap-4 flex-wrap items-center">
        {data.length == 0 ? (
          <h1 className="text-2xl font-semibold text-center">Loding...</h1>
        ) : (
          data.map((item) => (
            <Card
              key={item.id}
              item={item}
              onDelete={(id) => setData(data.filter((u) => u.id !== id))}
            ></Card>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
