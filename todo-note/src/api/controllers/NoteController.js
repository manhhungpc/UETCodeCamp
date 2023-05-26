export const getAllNotes = (req, res) => {
    const notes = [
        {
            name: "Hoc bai",
        },
        {
            name: "Rua bat",
        },
    ];
    const football = { name: "football" };
    if (!football) {
        res.json({ err: "No football" }).status(404);
    }

    res.json(notes).status(200);
};
