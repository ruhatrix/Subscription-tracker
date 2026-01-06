import {Router} from "express";

const authRouter =Router();
authRouter.post('/', (req,res)=>res.send({title:"sign up"}))
authRouter.post('/',(req,res)=>res.send({title:"sign in"}))
authRouter.post('/',(req,res)=>res.send({title:"sign out"}));


export default authRouter;
