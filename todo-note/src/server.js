import express from "express";
import noteRoute from "./api/routes/NoteRoute";
import cors from "cors";

// import "dotenv/config";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

console.log(PORT);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//1. kết nối mongodb cloud và lưu
mongoose.connect(process.env.MONGO_URL);
console.log("Database connected!");

// routing
app.get("/", (req, res) => {
    res.json({ success: true, message: "Welcome to express" }).status(200);
});

app.use("/notes", noteRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
