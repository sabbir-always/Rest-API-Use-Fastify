import pino from "pino";
import PinoPretty from "pino-pretty";

export const PinoLogger = pino(
    { level: process.env.LOG_LEVEL ?? "info" },
    PinoPretty({
        colorize: true,
        translateTime: "SYS:yyyy-mm-dd h:MM:ss TT",
        ignore: "pid,hostname"
    })
);