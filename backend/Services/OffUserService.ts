import offUserModel from "../models/off_users";
import { OffUserDocument } from "../types/offUserType";
import jwt, { Jwt } from "jsonwebtoken";

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY as string;

interface IPayload {
    user: {
      id: string;
      name: string;
      role: string;
    };
}

class OffUserService{
    async login(userData: Partial<OffUserDocument>):Promise<String>{

        try {
            const { email, password } = userData;
        
            if (!email || !password) {
            //    res.json({ Error: "True", Message: "All Fields Required..." });
                throw new Error("Ensure to enter every field");
            }
        
            const userExist = await offUserModel.findOne({ email }) as OffUserDocument;
        
            if (!userExist) {
                throw new Error("User not found, Enter valid credentials");
            }
        
            if (password !== userExist.password) {
                throw new Error("Password is not matched, Re-enter");
            }
            const payload: IPayload = {
                user: {
                  id: String(userExist._id),
                  name: userExist.name,
                  role: userExist.role,
                },
              };

              console.log("JWT_SECRET_KEY:", process.env.JWT_SECRET_KEY);
              if (!JWT_SECRET_KEY) {
                throw new Error("JWT_SECRET_KEY is not defined in environment variables");
              }
        
            // jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: "100d" }, (err, token) => {
            //   if (err) {
            //     console.log(err.message);
            //     throw new Error("Token is not generated");
            //   }
            //    return token;
            // });

              // Generate JWT token synchronously
            const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: "100d" });
            return token;
            
          } catch (error) {
            console.error("Login error:", error);
            throw error;  // Pass the error to the controller to handle
          }
    }
}

export default new OffUserService();