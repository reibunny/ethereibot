import fs from "fs";

export const readJSON = (path) => {
    const data = fs.readFileSync(path, "utf8");
    return JSON.parse(data);
};

export const writeJSON = (path, data) => {
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
};
