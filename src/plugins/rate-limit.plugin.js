import fastifyRateLimit from "@fastify/rate-limit";

export default async function fastifyRateLimitPlugin(fastify) {
    fastify.register(fastifyRateLimit, {
        max: 100,
        timeWindow: 60000, // 1 minute
        errorResponseBuilder: (request, context) => ({
            success: false,
            message: "Too Many Requests. Please Try Again Later.",
            tryAgainAfter: context.ttl
        })
    });
}