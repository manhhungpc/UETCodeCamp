import { Router } from "express";
import { getAllNotes, getNote, createNode, updateNote, deleteNote, searchNote } from "../controllers/NoteController";

const noteRoute = Router();

// CRUD
//GET - READ - Query
noteRoute.get("/", getAllNotes);
noteRoute.get("/search", searchNote);
noteRoute.get("/:id", getNote);

//POST - CREATE - Body
noteRoute.post("/", createNode);

//PUT - UPDATE - Body
noteRoute.put("/:id", updateNote);

//DELETE - DELETE
noteRoute.delete("/:id", deleteNote);

export default noteRoute;
