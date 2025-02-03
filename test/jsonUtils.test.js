import { readJSON, writeJSON } from "./src/utils/jsonUtils";
import * as vi from "vitest";

import mock from "./test/__mocks__/commands.json" with { type: "json" };

const path = "./test/__mocks__/commands.json";

// Unit testing integrity of readJSON() function from jsonUtils.js
vi.test("reads json file", () => {
    const result = readJSON(path);

    vi.expect(result).toStrictEqual(mock);
})
