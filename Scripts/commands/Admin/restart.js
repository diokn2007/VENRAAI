const config = {
    name: "restart",
    aliases: ["rs", "rest", "reboot"],
    permissions: [2],
    isAbsolute: true
}

async function Running({ message, getLang }) {
    await message.reply("GOOD BYE, BOT ĐI NGỦ ĐÂY, TÍ NỮA SẼ THỨC DẬY 😪");
    global.restart();
}

export default {
    config,
    Running
}
