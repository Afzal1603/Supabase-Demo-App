import { Route, Routes } from "react-router-dom";
import CreateUser from "./Page/CreateUser";
import UpdateUser from "./Page/UpdateUser";
import Home from "./Page/Home";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/adduser" element={<CreateUser></CreateUser>}></Route>
        <Route
          path="/updateuser/:id"
          element={<UpdateUser></UpdateUser>}
        ></Route>
      </Routes>
      <Toaster position="top-right" reverseOrder={false}></Toaster>
    </>
  );
};

export default App;
