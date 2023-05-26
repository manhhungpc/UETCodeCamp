import express from "express";
import noteRoute from "./api/routes/NoteRoute";

const app = express();
const PORT = 5000;

// routing
app.get("/", (req, res) => {
    res.json({ success: true, message: "Welcome to express" }).status(200);
});

app.use("/notes", noteRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
