const config = {
  name: "duyettv",
  aliases: ["duyet"],
  permissions: [1, 2],
  description: "Duyệt người trong danh sách phê duyệt",
  usage: "<script>",
  credits: "BraSL",
};

async function chooseRequester({ message, data, eventData }) {
  const { threadID, senderID, args } = message;
  const { Threads, Users } = global.controllers;
  const { listID, author } = eventData;
  const { ABSOLUTES } = global.config;
  var info = (await Threads.get(threadID)).info;
  var listqtv = [],
    listAdd = [],
    done = 0;
  for (const i of info.adminIDs) {
    listqtv.push(i.id);
  }
  if (author !== senderID)
    return message.reply("Bạn không phải là người dùng lệnh nên ko thể reply!");
  if (!listqtv.includes(author)) return message.reply("Bạn không phải qtv!");

  if(args[0] === 'all'){
    for (const add of listID) {
    global.api.addUserToGroup(add, threadID, async function (err) {
      if (err) {
        return 
      }
    });
    
    done++;
  }
    message.reply("Đã thêm thành công " + done + " người");
  }
  
  for (let i = 0; i < args.length; i++) {
    listAdd.push(listID[args[i] - 1]);
  }
  for (const add of listAdd) {
    global.api.addUserToGroup(add, threadID, async function (err) {
      if (err) {
        return
      }
    });
    
    done++;
  }
  message.reply("Đã thêm thành công " + done + " người");
}

async function Running({ message, args, data }) {
  const { threadID, senderID } = message;
  const { Threads, Users } = global.controllers;
  const infoT = (await Threads.get(threadID)).info;
  const approvalQueue = infoT.approvalQueue;
  if (approvalQueue.length === 0) {
    return message.reply(
      "Không tìm thấy user trong danh sách yêu cầu phê duyệt!"
    );
  }
  var msg = "";
  var num = 0;
  const listID = [];
  for (const data of approvalQueue) {
    num++;
    listID.push(data.requesterID);
    const name = (await Users.getInfo(data.requesterID))?.name;
    msg += `[${num}].${name}\n\n`;
  }

  msg += "Reply tin nhắn 'all' để phê duyệt toàn bộ or nhập theo số thứ tự (ví dụ: 1 2 3)";

  const messageReply = await message.reply(msg);
  messageReply.addReplyEvent({
    listID,
    author: senderID,
    callback: chooseRequester,
  });
}

export default {
  config,
  Running,
};
