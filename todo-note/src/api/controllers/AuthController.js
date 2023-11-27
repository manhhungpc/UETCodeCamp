import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const user = [
    {
        name: "UET",
        password: "123456",
    },
    {
        name: "Code camp",
        password: "987654",
    },
];

export const login = async (req, res) => {
    // giong register()
    const hashPassword = user[0].password;
    const checkPassword = await bcrypt.compare(req.body.password, hashPassword);
    if (!checkPassword) {
        return res.status(400).json({ err: "" });
    }
};

export const register = async (req, res) => {
    if (!req.body.name || !req.body.password) {
        return res.status(400).json({ err: "Missing username or password" });
    }

    const hashPass = await bcrypt.hash(req.body.password, 10);
    console.log("🚀 ~ file: AuthController.js:21 ~ hashPass:", hashPass);

    user.push({ name: req.body.name, password: hashPass });
    jwt.sign({ name: req.body.name }, process.env.JWT_SECRET, { expiresIn: "7d" }, (err, token) => {
        if (err) {
            return res.status(500).json({ err: "Internal server error" });
        }
        const responseData = {
            name: req.body.name,
            token: token,
        };
        return res.status(200).json(responseData);
    });
};
