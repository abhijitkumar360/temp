import express from 'express';
 import { createUser, getUserByID} from '../../library/controllers/users.js';
import {getUsers} from '../controllers/users.js'
// import { getUserByID } from '../../library1/controllers/users';
const router =express.Router();

router.get("/",getUsers)
router.get("/:id",getUserByID)
 router.post("/",createUser)
// router.delete("/id",deleteUserById)
// router.patch("/id",deleteUserById)

export default router
