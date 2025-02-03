import { readJSON } from "../utils/jsonUtils.js";

const commands = readJSON("./src/data/commands.json");

export async function handleCommand(client, channel, tags, message) {
    const args = message.slice(1).split(" ");
    const command = args.shift().toLowerCase();

    if (commands.defaultCommands[command]) {
        const response = commands.defaultCommands[command].response
            .replace("{username}", tags.username)
            .replace("{message}", args.join(" "));

        client.say(channel, response); // Mock this in tests
    }
}
