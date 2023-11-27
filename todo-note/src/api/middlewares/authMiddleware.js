import jwt from "jsonwebtoken";
export const checkToken = (req, res, next) => {
    //token ok
    // Bearer eyj....
    console.log(req.headers);
    const header = req.headers["authorization"];

    const token = header.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, {}, (err, decode) => {
        if (err) {
            return res.status(400);
        }
        if (decode) {
            next();
        }
    });
};
