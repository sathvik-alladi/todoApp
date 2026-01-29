export const validateTodo = (req, res, next) => {
    const { title, description } = req.body;
  
    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }
  
    if (typeof title !== "string" || typeof description !== "string") {
      return res.status(400).json({ error: "Invalid payload format" });
    }
  
    next();
};