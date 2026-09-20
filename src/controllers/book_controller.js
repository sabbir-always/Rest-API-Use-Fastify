export const create = async (request, reply) => {
    try {

        return reply.code(200).send({
            success: true,
            message: "Book Created Success!"
        });
    } catch (error) {
        return reply.code(500).send({
            success: false,
            message: error.message ?? "Something went wrong!"
        });
    }
}

export const read = async (request, reply) => {
    try {

        return reply.code(200).send({
            success: true,
            message: "Book Fetched Success!"
        });
    } catch (error) {
        return reply.code(500).send({
            success: false,
            message: error.message ?? "Something went wrong!"
        });
    }
}

export const update = async (request, reply) => {
    try {

        return reply.code(200).send({
            success: true,
            message: "Book Updated Success!"
        });
    } catch (error) {
        return reply.code(500).send({
            success: false,
            message: error.message ?? "Something went wrong!"
        });
    }
}

export const remove = async (request, reply) => {
    try {

        return reply.code(200).send({
            success: true,
            message: "Book Deleted Success!"
        });
    } catch (error) {
        return reply.code(500).send({
            success: false,
            message: error.message ?? "Something went wrong!"
        });
    }
}


