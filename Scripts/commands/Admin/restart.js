const config = {
    name: "restart",
    aliases: ["rs", "rest", "reboot"],
    permissions: [2],
    isAbsolute: true
}

async function Running({ message, getLang }) {
    await message.reply("BOT VENRAAI đã nhận được lệnh off để đi sục khi nào xuất tinh sẽ on trở lại...");
    global.restart();
}

export default {
    config,
    Running
}
