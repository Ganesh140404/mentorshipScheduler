import jwt from "jsonwebtoken";

export const authMiddleware=async(req, res, next)=>{
    try {
        const cookies=req.cookies;
        const token=cookies['jwt'];
        if(!token){
            return res.status(403).json({
                message:"token is invalid"
            });
        }

        try {
            const decode=jwt.decode(token);
            req.user=decode;
            console.log("decode=",decode);
        } catch (error) {
            console.error("invalid token", error.message)
            return res.status(404).json({
                message:"Invalid Token",
            });
        }
        next()
    } catch (error) {
        return res.status(500).send(error.message);
    }
}