import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const config = {
    name: "sp3",
    description: "",
    usage: "",
    cooldown: 3,
    permissions: [2],
};

const path = join(global.assetsPath, 'spam.json');

function onLoad() {
    if(!existsSync(path)) {
        writeFileSync(path, JSON.stringify({}), "utf-8");
    }
}

async function Running({ message, args }) {
    if(!message.isGroup) return;

    const { threadID } = message;
    
    let data = JSON.parse(readFileSync(path, "utf-8"));
    if(!data[threadID]) data[threadID] = {
        enable: true,
        index: 0
    };
    let input = args.join(" ");
    if(input == "off") {
        data[threadID].enable = false;
    } else {
        data[threadID].enable = true;
    }
      data[threadID].index = 0;
    writeFileSync(path, JSON.stringify(data, null, 4), "utf-8");
    
    message.send(`Đã ${(input == "off" ? "tắt" : "bật")}`);
}

export {
    config,
    onLoad,
    Running
}