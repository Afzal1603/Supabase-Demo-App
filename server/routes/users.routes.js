const userRouter = require("express").Router();
const supabase = require("../lib/db");

userRouter.get("/", async (req, res) => {
  const { data, error } = await supabase.from("users").select("*");
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.json(data);
});
userRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.json(data);
});

userRouter.post("/", async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ msg: "Name and email are required" });
  }
  const { error, status } = await supabase
    .from("users")
    .insert([{ name, email }]);
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(status).json({ message: "inserted successfully" });
});

userRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ msg: "Name and email are required" });
  }
  const data = await supabase
    .from("users")
    .update({ name, email })
    .eq("id", id);
  if (data.error) {
    return res.status(500).json({ message: data.error.message });
  }
  res.status(data.status).json({ message: "updated successfully" });
});

userRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase.from("users").delete().eq("id", id);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  res.json({ message: "User deleted successfully", deleted: data });
});

module.exports = userRouter;
