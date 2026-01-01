import express from "express";
import {PORT} from "./config/env.js";


const app = express();

app.get('/',(req,res) => {
  res.send("welcome this fantastic world");
});

app.listen(PORT,()=>{
  console.log(`http://localhost:${PORT}`);
})

export default app;