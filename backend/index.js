import 'dotenv/config'
import express from "express";
import path from "path";
import todosRoutes from "./routes/todos.routes.js";
import authenticateUserRoutes from "./routes/auth.routes.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static("uploads"));
app.use("/todos", todosRoutes);
app.use("/auth", authenticateUserRoutes);

app.get("/", (req, res) => {
    res.sendFile(path.join(process.cwd(), "../frontend/public/views/index.html"));
});

// app.get("/home", (req, res) => {
//     //create bearer token and then store in localstorage;

//     res.sendFile(path.join(process.cwd(), "../frontend/public/index.html"));
// });

app.use(express.static(path.join(process.cwd(), "../frontend/public")));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));