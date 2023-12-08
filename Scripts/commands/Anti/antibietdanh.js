const config = {
  name: "atbd",
  aliases: ["atbd"],
  description: "Chống đổi biệt danh nhóm",
  usage: "on|off",
  cooldown: 3,
  isAbsolute:true,
  permissions: [2],
  credits: ""
};

const langData = {
  "vi_VN": {
     "notGroup": "Lệnh này chỉ có thể được sử dụng trong nhóm!",
    "success": "Bố thách chúng mày đổi biệt danh đó",
    "alreadyOn": "Súc vật đang bất lực kìa",
    "alreadyOff": "Đang tắt mà em. On lên 🤣",
    "invalidCommand": "Óc chó sài lệnh kiểu: "
  }
};

async function Running( {
  message, getLang, data
}) {
  if (!data?.thread?.info || !data.thread.info.isGroup) return message.reply(getLang("notGroup"));

  const [input] = message.body.split(" ").slice(1);
  if (!['on', 'off'].includes(input)) return message.reply(getLang("invalidCommand"));

  const _THREAD_DATA_ANTI_SETTINGS = {
    ...(data.thread.data?.antiSettings || {})
  };

  switch (input) {
    case 'on':
      if (_THREAD_DATA_ANTI_SETTINGS.antiChangeNickname) return message.reply(getLang("alreadyOn"));
      _THREAD_DATA_ANTI_SETTINGS.antiChangeNickname = true;
      await global.controllers.Threads.updateData(message.threadID, {
        antiSettings: _THREAD_DATA_ANTI_SETTINGS
      });
      return message.reply(getLang("success"));
    case 'off':
      if (!_THREAD_DATA_ANTI_SETTINGS.antiChangeNickname) return message.reply(getLang("alreadyOff"));
      _THREAD_DATA_ANTI_SETTINGS.antiChangeNickname = false;
      await global.controllers.Threads.updateData(message.threadID, {
        antiSettings: _THREAD_DATA_ANTI_SETTINGS
      });
      return message.reply(`Mệt rồi bố đi ngủ bye mấy con đĩ nứng lồn tinh trùng khuyết tật`);
    default:
      return message.reply(getLang("invalidCommand"));
  }
}

export default {
  config,
  langData,
  Running
};