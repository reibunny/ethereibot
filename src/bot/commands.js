// This file will handle logic related to commands. It can read the commands from the commands.json file and send the appropriate response.
import commands from "../data/commands.json" with {type: "json"};
import { readJSON, writeJSON } from "../utils/jsonUtils.js";

const fs = require("fs");
const axios = require("axios");
const config = require("../../config.js");

const commandsFile = "./data/commands.json";


// Load commands from JSON
function loadCommands() {
    try {
        const data = fs.readFileSync(commandsFile, "utf8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error loading commands:", error);
        return { defaultCommands: {}, customCommands: {} };
    }
}

const commands = loadCommands();

async function getTwitchData(type) {
    const accessToken = config.OAUTH;
    const headers = {
            "Client-ID": config.CLIENT_ID,
            Authorization: `Bearer ${accessToken}`,
    };
}

function replaceTag(tagName, tags) {
	switch (tagName) {
		case "user":
			return `@${tags.username}`;
		case "badges":
			return tags.badges ? Object.keys(tags.badges).join(", ") : "";
		case "sub":
			return tags.subscriber ? "Subscriber" : "Non-Subscriber";
		default:
			return "";
	}
}

