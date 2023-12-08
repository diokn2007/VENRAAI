const COOLDOWN = 1000 * 5; 

if (!global.autoreply_173_cd) global.autoreply_173_cd = new Map();

export function Running(params) {
    const { message } = params;

    if (!global.autoreply_173 || message.senderID === global.botID) return;

    const content = global.autoreply_173.get(message.threadID);

    if (!content) return;

    const cooldown = global.autoreply_173_cd.get(message.threadID) || 0;

    if (Date.now() - cooldown < COOLDOWN) return;

    global.autoreply_173_cd.set(message.threadID, Date.now());
    message.send(content);
}
