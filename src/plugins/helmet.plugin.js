import fastifyHelmet from "@fastify/helmet";

export default async function fastifyHelmetPlugin(fastify) {
    fastify.register(fastifyHelmet, {
        contentSecurityPolicy: false
    });
}