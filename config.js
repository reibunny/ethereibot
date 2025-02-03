require("dotenv").config({ path: ".env" });

module.exports = {
    USERNAME: process.env.TWITCH_USERNAME,
    OAUTH: process.env.TWITCH_OAUTH,
    SECRET: process.env.TWITCH_SECRET,
    CLIENT_ID: process.env.TWITCH_CLIENT,
    CHANNEL: process.env.TWITCH_CHANNEL,
    PORT: process.env.PORT,
    API: process.env.API_PORT,
};
