import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next(); // only call next if token is valid
    } catch (err) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};

export { auth };