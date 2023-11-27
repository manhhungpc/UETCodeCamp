import { Router } from "express";
import {
    getAllNotes,
    getNote,
    createNode,
    updateNote,
    deleteNote,
    searchNote,
    getUserNote,
} from "../controllers/NoteController";
import { checkToken } from "../middlewares/authMiddleware";

const noteRoute = Router();

// CRUD
//GET - READ - Query
noteRoute.get("/", getAllNotes);
noteRoute.get("/search", searchNote);
noteRoute.get("/:id", getNote);
noteRoute.get("/user/:name", checkToken, getUserNote);

//POST - CREATE - Body
noteRoute.post("/", createNode);

//PUT - UPDATE - Body
noteRoute.put("/:id", updateNote);

//DELETE - DELETE
noteRoute.delete("/:id", deleteNote);

export default noteRoute;
