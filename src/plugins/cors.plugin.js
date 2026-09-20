import fastifyCors from "@fastify/cors";

export default async function fastifyCorsPlugin(fastify) {
    fastify.register(fastifyCors, {
        credentials: true,
        origin: process.env.CORS_ORIGIN ?? "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]
    });
}