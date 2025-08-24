const express = require("express");
const userRouter = require("./routes/users.routes");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.use("/users/", userRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
