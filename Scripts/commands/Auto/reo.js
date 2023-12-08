import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const config = {
  name: "reo",
  description: "",
  usage: "",
  cooldown: 3,
  permissions: [2],
};

const path = join(global.assetsPath, 'reoten.json')

function onLoad() {
  if (!existsSync(path)) {
    writeFileSync(path, JSON.stringify({}), "utf-8");
  }
}

async function Running({ message, args }) {
  let content = args.join(" ");

  const { threadID } = message

  let data = JSON.parse(readFileSync(path, "utf-8"));
  if (!data[threadID]) data[threadID] = {
    enable: true,
    index: 0,
    content
  };
  if (content === "=))") {
    data[threadID].enable = false;
    content = "";
  } else {
    data[threadID].enable = true;
    data[threadID].index = 0;
    data[threadID].content = content;
  }

  writeFileSync(path, JSON.stringify(data, null, 4))

  message.send(`  ${(content == "off" ? " " : " ")}`);
}

export default {
  config,
  onLoad,
  Running,
};