import express from "express";
import UserController from "../controllers/UserController.js";
import validate from "../middlewares/validate.js";
import * as schemas from "../validations/UserValidation.js";
import { authenticate } from "../middlewares/authenticate.js";

const router = express.Router();

router.get("/", UserController.getAll);
router.route("/").post(validate(schemas.createValidation), UserController.create);
router.route("/login").post(validate(schemas.loginValidation), UserController.login);
router.route("/:id").patch(authenticate,validate(schemas.updateValidation), UserController.update);
router.route("/:id").delete(UserController.delete);

export default router;
