import mongoose from 'mongoose';
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET, JWT_EXPIRES_IN } from "../config/env.js";

export const signUp = async(req, res, next )=>{
  const session = await mongoose.startSession();
  session.startTransaction();



  try{
    //create new user
    const {name, email,password } = req.body;
    //check if a user already exists
    const exitingUser=await User.findOne({email});
    if(exitingUser){
      const error = new Error("User already exists");
      error.statusCode=409;
      throw error;

    }

  //hasg password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const newUsers=await User.create([{name,email,password:hashPassword}], {session});

  const token=jwt.sign({userID:newUsers[0]._id},JWT_SECRET,{expiresIn:JWT_EXPIRES_IN});


    await session.commitTransaction();
    session.endSession();

    res.status(201).json({
      success:true,
      message:"user created successfully",
      data:{
        token,
        user:newUsers[0]

      }
    })
  } catch(error){
    await session.abortTransaction();
    session.endSession();
    next(error);
  }




}
export const signIn = async(req,res,next)=>{}
export const signOut = async(req,res,next)=>{}
