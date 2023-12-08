const config = {
  name: "snb",
  version: "0.0",
  description: "",
  permissions: [2],
  cooldown: 5
}

function onLoad() {
  if (!global.snb888) {
    global.snb888 = new Array();
  }
}

async function Running({ message, args }) {
  if (!message.isGroup) return;
  const { threadID } = message
  const input = args.join(" ");

  if (input == "off") {
    global.snb888.splice(global.snb888.findIndex(e => e.threadID == message.threadID), 1);
  } else {
    global.snb888.push(threadID)
  }

  message.send(`Đã ${input == "off" ? "tắt" : "bật"}`);
}

export {
  config,
  Running,
  onLoad
}