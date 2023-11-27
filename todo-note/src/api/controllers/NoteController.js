import { v4 as uuidv4 } from "uuid";

let notes = [
    {
        id: 1,
        name: "Hoc bai",
        user: "UET",
    },
    {
        id: 2,
        name: "Rua bat",
        user: "UET",
    },
    {
        id: 3,
        name: "Da bong",
        user: "Code camp",
    },
];

export const getAllNotes = (req, res) => {
    res.json(notes).status(200);
};

export const getNote = (req, res) => {
    const { id } = req.params;

    if (!id) return res.json({ message: "Id is required" }).status(400);

    const note = notes.find((note) => note.id == id);

    return res.json({ note }).status(200);
};

export const getUserNote = (req, res) => {
    const name = req.params.name;

    // tim tat ca note co user=UET
    const data = notes.find((note) => note.user === name);
    return res.status(200).json({ notes: data });
};

export const createNode = (req, res) => {
    const { name } = req.body;
    console.log(name, req.body);

    if (!name) return res.json({ message: "Name is required" }).status(400);

    const newNote = {
        id: uuidv4(),
        name,
    };

    notes.push(newNote);

    return res.json({ notes }).status(201);
};

export const updateNote = (req, res) => {
    const { name } = req.body;
    const { id } = req.params;

    if (!name) return res.json({ message: "Name is required" }).status(400);
    if (!id) return res.json({ message: "Id is required" }).status(400);

    const note = notes.find((note) => note.id == id);
    note.name = name;

    return res.json({ note }).status(200);
};

export const deleteNote = (req, res) => {
    const { id } = req.params;

    if (!id) return res.json({ message: "Id is required" }).status(400);

    notes = notes.filter((note) => note.id != id);

    return res.json({ notes }).status(200);
};

export const searchNote = (req, res) => {
    const { name } = req.query;

    const note = notes.filter((note) => note.name.toLowerCase().includes(name.toLowerCase()));

    return res.json({ note }).status(200);
};
