import { describe, it, expect, vi } from "vitest";

const { handleCommand } = require("../src/bot/commands.js");

describe("Twitch Bot Commands", () => {
    // Mock Twitch client with a fake say() function
    const mockClient = {
        say: vi.fn(),
    };

    const mockChannel = "#testchannel";
    const mockTags = { username: "testuser" };

    it("should respond to !hello command", async () => {
        await handleCommand(mockClient, mockChannel, mockTags, "!hello");

        expect(mockClient.say).toHaveBeenCalledWith(
            mockChannel,
            "Hello, testuser!"
        );
    });

    it("should respond to !echo command with user message", async () => {
        await handleCommand(
            mockClient,
            mockChannel,
            mockTags,
            "!echo Testing 123"
        );

        expect(mockClient.say).toHaveBeenCalledWith(
            mockChannel,
            "testuser, you said: Testing 123."
        );
    });
});
