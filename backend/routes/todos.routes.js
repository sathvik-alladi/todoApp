import express from "express";

import { authenticateJWT } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/upload.middleware.js";
import { validateTodo } from "../middleware/validate.middleware.js";
import { verifyTodoOwner } from "../middleware/ownership.middleware.js";
import { addTodo, updateTodo, deleteTodo, searchTodos, getAllTodos } from "../controllers/todos.controller.js";

const router = express.Router();

router.post("/add", authenticateJWT, upload.single("image"), validateTodo, addTodo);
//add verifyTodoOwner and authenticateJWT back for the delete route; removed it for time being:
router.delete("/delete/:id", deleteTodo);
router.patch("/update/:id", authenticateJWT, verifyTodoOwner, upload.single("image"), updateTodo);
router.get("/search", authenticateJWT, searchTodos);
// add authenticateJWT back for the get all route; removed it for time being:
router.get("/all", getAllTodos);

export default router;