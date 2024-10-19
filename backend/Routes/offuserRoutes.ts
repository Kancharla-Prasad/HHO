import express from "express";
const router = express.Router();
<<<<<<< HEAD
// import {offUserLogin} from "../Controllers/offUserController";
import { offUserLogin } from "../Controllers/offUserController";

router.post("/login", offUserLogin)
=======
import offUserController from "../Controllers/offUserController";
>>>>>>> 6373848414249c3ca4738d334761c5864bf36cbc

router.post("/login", offUserController.login)

export default router