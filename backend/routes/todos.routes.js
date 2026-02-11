import express from "express";

import { authenticateJWT } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/upload.middleware.js";
import { validateTodo } from "../middleware/validate.middleware.js";
import { verifyTodoOwner } from "../middleware/ownership.middleware.js";
import { addTodo, updateTodo, deleteTodo, searchTodos, getAllTodos } from "../controllers/todos.controller.js";

const router = express.Router();

//add authenticateJWT back for the add route;
router.post("/add", upload.single("image"), validateTodo, addTodo);
//add verifyTodoOwner and authenticateJWT back for the delete route;
router.delete("/delete/:id", deleteTodo);
//add verifyTodoOwner and authenticateJWT back for the update route;
router.patch("/update/:id", upload.single("image"), updateTodo);
router.get("/search", authenticateJWT, searchTodos);
// add authenticateJWT back for the get all route;
router.get("/all", getAllTodos);

export default router;