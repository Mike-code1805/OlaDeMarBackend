import { Router } from "express";
import { userRequestValidation } from "../shared/validators/bodyRequestValidators";
import { createUser, getUsers, editUser, deleteUser, getUsersById, loginUser } from "./controllers";
import {  singInUserSchema, signUpUserSchema } from "./middlewares/userRequestValidation";

const router: Router = Router();

router.get('/users', getUsers);

router
    .route('/users/:id')
    .get(getUsersById)
    .delete(deleteUser)
    .put(editUser);

router
    .route('/auth/local/login')
    .post(userRequestValidation(singInUserSchema), loginUser)

router
    .route('/auth/local/singup')
    .post(userRequestValidation(signUpUserSchema), createUser)

export default router;