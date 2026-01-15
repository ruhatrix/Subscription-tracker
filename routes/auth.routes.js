import {Router} from "express";
import {signUp, signOut, signIn} from "../controllers/auth.controllers.js";


const authRouter =Router();
//path:/api/v1/auth/sign-up(post)
authRouter.post('/sign-up', signUp);
//path:/api/v1/auth/sign-in(post)

authRouter.post('/sign-in', signIn);
//path:/api/v1/auth/sign-out(post)

authRouter.post('/sign-out',signOut);


export default authRouter;
