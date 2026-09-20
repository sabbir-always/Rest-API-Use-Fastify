import mongoose from "mongoose";
import chalk from "chalk";
import dns from "dns";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

export const databaseConnect = async () => {
    if (!process.env.MONGODB_URI) {
        throw new Error("MONGODB_URI is not defined in environment variables");
    }

    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, { serverSelectionTimeoutMS: 5000 });
        console.log(chalk.bgGreen.bold(`✓ MongoDB Connected: ${conn.connection.name}`));

    } catch (error) {
        console.error(chalk.bgRed.bold("✗ Database connection failed"));
        console.error(chalk.yellow(error.message));
    }
};