import dotenv from "dotenv";

dotenv.config();

export const USERNAME = process.env.TWITCH_USERNAME;
export const OAUTH = `oauth:${process.env.TWITCH_OAUTH}`;
export const SECRET = process.env.TWITCH_SECRET;
export const CLIENT_ID = process.env.TWITCH_CLIENT;
export const CHANNEL = process.env.TWITCH_CHANNEL;
export const PORT = process.env.PORT;
export const API = process.env.API_PORT;
