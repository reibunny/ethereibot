import { describe, it, expect, vi } from "vitest";
import { readJSON, writeJSON } from "./src/utils/jsonUtils";

import mock from "./test/__mocks__/commands.json" with { type: "json" };

const path = "./test/__mocks__/commands.json";


describe("JSON Utilities Files", () => {

    it('should read a .json file', () => {
        expect(readJSON(path)).toStrictEqual(mock);
    });
    
})