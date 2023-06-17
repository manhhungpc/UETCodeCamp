import express from "express";
import noteRoute from "./api/routes/NoteRoute";

import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3000;

console.log(PORT);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routing
app.get("/", (req, res) => {
  res.json({ success: true, message: "Welcome to express" }).status(200);
});

app.use("/notes", noteRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
