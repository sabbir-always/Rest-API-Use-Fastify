import fastifyCompress from "@fastify/compress";

export default async function fastifyCompressPlugin(fastify) {
    fastify.register(fastifyCompress, {
        global: true,
        encodings: ["gzip", "deflate", "br"]
    });
}