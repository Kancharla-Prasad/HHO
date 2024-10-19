import { Request, Response } from "express";
import offUserModel from "../models/off_users";
import jwt from "jsonwebtoken";
import { OffUserDocument } from "../types/offUserType";
import dotenv from  'dotenv';
dotenv.config()

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY as string;
console.log(JWT_SECRET_KEY)

interface IPayload {
  user: {
    id: string;
    role: string;
  };
}

export const offUserLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Validate input fields
    if (!email || !password) {
      res.status(400).json({ Error: "True", Message: "All fields are required." });
      return;
    }
    
    // Check if the user exists
    const userExist = await offUserModel.findOne({ email }) as OffUserDocument;
    if (!userExist) {
        res.status(401).json({ Error: "True", Message: "Invalid email or password." });
        return;
    }

    // Validate password (you may want to hash and compare passwords in real-world scenarios)
    if (password !== userExist.password) {
       res.status(401).json({ Error: "True", Message: "Invalid email or password." });
       return;
    }

    // Create a JWT payload
    const payload: IPayload = {
      user: {
        id: String(userExist._id),
        role: userExist.role,
      },
    };

    // Generate JWT token
    jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: "100d" }, (err, token) => {
      if (err || !token) {
        console.error("Token generation error:", err?.message);
         res.status(500).json({ Error: "True", Message: "Token could not be generated." });
         return;
      }

      // Send token in response
       res.status(200).json({ token });
    });

  } catch (error: unknown) {
    // Handle unexpected errors
    if (error instanceof Error) {
       res.status(500).json({ Error: "True", Message: error.message });
    } else {
        res.status(500).json({ Error: "True", Message: "Something went wrong." });
    }
  }
};
