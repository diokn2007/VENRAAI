const config = {
    name: "rep",
    description: "",
    usage: "[content]/[off]",
    cooldown: 3,
    permissions: [2],
    credits: "WaifuCat",
};

if (!global.autoreply_173) {
    global.autoreply_173 = new Map();
}

async function Running({ message, args }) {
    const content = args.join(" ");
    if (!content) {
        throw new Error("Chưa điền nội dung!");
    }

    if (content === "off") {
        global.autoreply_173.delete(message.threadID);
        await message.reply("Đã dừng!");
    } else {
        global.autoreply_173.set(message.threadID, content);
        await message.reply("Đã chạy!");
    }
}

export default {
    config,
    Running
};