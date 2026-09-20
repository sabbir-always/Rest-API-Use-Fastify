import fastifyRateLimitPlugin from "./src/plugins/rate-limit.plugin.js";
import fastifyCompressPlugin from "./src/plugins/compress.plugin.js";
import { databaseConnect } from "./src/database/database.connect.js";
import fastifyHelmetPlugin from "./src/plugins/helmet.plugin.js";
import fastifyCorsPlugin from "./src/plugins/cors.plugin.js";
import { PinoLogger } from "./src/plugins/logger.plugin.js";
import { routes } from "./src/api/application_api.js";
import Fastify from "fastify";
import dotenv from "dotenv";
dotenv.config();

const fastify = Fastify({ loggerInstance: PinoLogger });

await fastify.register(fastifyHelmetPlugin);
await fastify.register(fastifyCorsPlugin);
await fastify.register(fastifyCompressPlugin);
await fastify.register(fastifyRateLimitPlugin);

await databaseConnect();
await fastify.register(routes, { prefix: "/api/v1" });

fastify.get("/", (request, reply) => {
    return reply.code(200).send({
        success: true,
        message: "Server Running Success!"
    });
});

// 404 Not Found Route Handler
fastify.setNotFoundHandler((request, reply) => {
    return reply.code(404).send({
        success: false,
        message: `Route ${request.method} ${request.url} Not Found!`,
    });
});

// Global Error Handler
fastify.setErrorHandler((error, request, reply) => {
    return reply.code(error.statusCode || 500).send({
        success: false,
        message: error.message ?? "Internal Server Error!"
    });
});

try {
    await fastify.listen({
        port: process.env.SERVER_PORT ?? 3000,
        host: process.env.SERVER_HOST ?? "0.0.0.0"
    });
    fastify.log.info(`Server Running on http://${process.env.SERVER_HOST ?? "0.0.0.0"}:${process.env.SERVER_PORT ?? 3000}`);
} catch (error) {
    fastify.log.error(error);
    process.exit(1);
}