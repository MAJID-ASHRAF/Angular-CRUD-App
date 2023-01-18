import express from "express";

import { getUsers,createUser,loginUser,updateUser ,deleteUser,findUser } from "../controllers/userControls.js"

const router =express.Router();


router.get("/", getUsers);
  
router.post("/userRegistraion",createUser);
 
router.post("/userLogin",loginUser);
  
router.put("/updateUser/:email",updateUser);

router.delete("/deleteUser/:email", deleteUser);
  
router.get("/findUser/:email",findUser);

export default router;``