const config = {
    name: "source",
    aliases: ["code", "about"],
    description: "Show source code of bot"
}

const langData = {
    "en_US": {
        "details": "A Bot Messenger running on NodeJS:\n{source}"
    },
    "vi_VN": {
        "details": "Bot Messenger chạy được trên các nền tảng:\n{source}"
    },
    "ar_SY": {
        "details": "روبوت ماسنجر يعمل على لغة NodeJS:\n{source}"
    }
}

const source = "cmd x termux x replit";
function Running({ message, getLang }) {
    message.reply(getLang("details", { source }));
}

export default {
    config,
    langData,
    Running
}
