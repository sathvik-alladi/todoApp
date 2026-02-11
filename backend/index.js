import 'dotenv/config'
import express from "express";
import path from "path";
import todosRoutes from "./routes/todos.routes.js";
import authenticateUserRoutes from "./routes/auth.routes.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static(path.join(process.cwd(), "../frontend/public")));

const __dirname = path.resolve();

app.use("/components", express.static(path.join(__dirname, "../frontend/components")));
app.use("/services", express.static(path.join(__dirname, "../frontend/services")));
app.use(express.static(path.join(__dirname, "../frontend/public")));


app.use("/uploads", express.static("uploads"));
app.use("/todos", todosRoutes);
app.use("/auth", authenticateUserRoutes);

app.get("/", (req, res) => {
    res.sendFile(path.join(process.cwd(), "../frontend/public/index.html"));
});

// app.get("/home", (req, res) => {
//     //create bearer token and then store in localstorage;

//     res.sendFile(path.join(process.cwd(), "../frontend/public/index.html"));
// });

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));