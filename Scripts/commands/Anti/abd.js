const config = {
  name: "abd",
  description: "",
  usage: "",
  cooldown: 3,
  permissions: [2],
};

function onLoad() {
  if (!global.abd_888) {
    global.abd_888 = new Map();
  }
}

async function Running({ message, args }) {
  if (!message.isGroup) return;

  let input = args.join(" ").split("|");

  if (input[0] == 'off' && input.length == 1) {
    global.abd_888.delete(message.threadID);
  } else {
    global.abd_888.set(message.threadID, { input, index: 0 });
  }

  return message.send(`Đã ${(input[0] == 'off' && input.length == 1) ? "tắt!" : "bật!"}`);
}

export {
  config,
  onLoad,
  Running
}