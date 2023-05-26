import { Router } from "express";
import { getAllNotes } from "../controllers/NoteController";

const noteRoute = Router();

noteRoute.get("/", getAllNotes);

export default noteRoute;
