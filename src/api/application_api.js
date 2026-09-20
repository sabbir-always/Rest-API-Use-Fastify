import * as books from "../controllers/book_controller.js";

export const routes = (fastify) => {
    fastify.get("/books/read", books.read);
    fastify.post("/books/create", books.create);
    fastify.put("/books/update/:id", books.update);
    fastify.delete("/books/remove/:id", books.remove);
};