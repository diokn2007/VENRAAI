const config = {
  name: "config",
  version: "1.0.0",
  aliases: ["cf"],
  description: "Chỉnh sửa cài đặt",
  premissions: [2],
  credits: ""
}
function truefalseconvertText(status) {
  const str_v = '✅';
  const str_x = '❌';
  if (status === true) {
    return str_v;
  } else {
    return str_x;
  }
}
async function Running( {
  args, message, eventData
}) {
  const str = `• Để chỉnh sửa prefix thì hãy dùng lệnh ${global.config.PREFIX}config prefix [prefix mới]\n• Để chỉnh sửa tên bot dùng lệnh này: ${global.config.PREFIX}config name [Tên mới của bot]\nMọi thắc mắc khi sử dụng bot vui lòng liên hệ admin theo thông tin bên dưới.\n👉 facebook: nguyên blue\n`;
  const select = args[0]?.toLowerCase();
  switch (select) {
    case 'prefix':
      try {
        if (args[1] === "noprefix") {
          global.config.PREFIX = " ";
          global.config.save();
          message.reply("Đã bật chế độ không dùng prefix");
        } else {
          global.config.PREFIX = args[1];
          global.config.save();
          message.reply(`thay đổi thành công\nPrefix mới của bạn là: ${args[1]}`);
        }
      }
      catch(e) {
        message.reply(`[CODE-140] Hệ thống gặp sự cố không xác định! Vui lòng liên hệ admin để biết thêm chi tiết`);
        console.log(`[CODE-140] Hệ thống gặp lỗi:${e}`);
      }
      break;
    case 'name':
      try {
        const newName = args.slice(1).join(' ');
        global.config.NAME = newName;
        global.config.save();
        message.reply(`Thay đổi tên mặc định của Bot thành công\nP/S: Khi thêm vào box mới bot sẽ update tên mới là: ${newName}`)
      }catch(e) {
        message.reply('[CODE-141] hệ Thống gặp sự cố không xác định!Vui lòng liên hệ admin để biết thêm chi tiết');
      }
      break;
    case 'message':
      const messageKey = args[1]?.toLowerCase();
      const newMessage = args.slice(2).join(" ");
      switch (messageKey) {
      case 'welecome':
        global.config.GBOTWAR_MESSAGE.notiWelecome = newMessage;
        global.config.save();
        message.reply('Tin nhắn chào khi mời bot vào box đã được đổi thành: '+newMessage);
        break;
      case 'approve':
        global.config.GBOTWAR_MESSAGE.notiApprove = newMessage;
        global.config.save();
        message.reply('Tin nhắn chào khi bot được phê duyệt đã được đổi thành: '+newMessage);
        break;
      case 'regbox':
        global.config.GBOTWAR_MESSAGE.notiAutoRegBox = newMessage;
        global.config.save();
        message.reply('Tin nhắn và tên box khi sử dụng auto regbox đã được đổi thành: '+newMessage);
        break;
      default:
        message.reply(` 1.[welecome] Tin nhắn khi thêm vào box: ${global.config.GBOTWAR_MESSAGE.notiWelecome}\n\n2. [approve] Tin nhắn khi được phê duyệt box: ${global.config.GBOTWAR_MESSAGE.notiApprove}\n\n3. [regbox] Tin nhắn và tên box khi sử dụng auto regbox: ${global.config.GBOTWAR_MESSAGE.notiAutoRegBox}\n\nP/S: Để thay đổi nội dung tin nhắn bạn sử dụng lệnh như sau ${global.config.PREFIX}config message [KEY TIN NHẮN] [Nội dung muốn thay đổi]\n\nVí dụ: "${global.config.PREFIX}config message welecome Bố tới tham chiến đây mấy con chó" thì khi bạn thêm bot vào box bất kì thì tin nhắn chào cũa bot là "Bố tới tham chiến đây mấy con chó"\n\nNếu có thắc mắc gì hãy liên hệ nguyên blue\n`);
        break;
      }
      break;
    case 'options':
      const str_options = ` Dưới đây là những thiết lập hệ thống hiện tại\n \n${
      truefalseconvertText(global.config.GBOTWAR_OPTIONS.LISTEN_CONSOLE)} 1. [LISTEN_CONSOLE] Hiển thị listen trên console\n\n${
      truefalseconvertText(global.config.GBOTWAR_OPTIONS.WEBVIEW)} [WEBVIEW] Sử dụng Webview để UPTIME\n\n${
      truefalseconvertText(global.config.GBOTWAR_OPTIONS.NOTIFICATION_DISPLAY)} 3.[NOTIFICATION_DISPLAY] Hiển thị thông báo từ admin`
      const options_select = args[1];
      switch (options_select) {
      case 'listen_console':
        if (args[2]?.toLowerCase() == 'on') {
          global.config.GBOTWAR_OPTIONS.LISTEN_CONSOLE = true;
          global.config.save();
        } else {
          global.config.GBOTWAR_OPTIONS.LISTEN_CONSOLE = false;
          global.config.save();
        }
        await message.reply('Thiết lập thành công ! Hệ thống đang khởi động lại...');
        global.restart();
        break;
      case 'notification_display':
        if (args[2].toLowerCase() == 'on') {
          global.config.GBOTWAR_OPTIONS.notification_display = true;
          global.config.save();
        } else {
          global.config.GBOTWAR_OPTIONS.NOTIFICATION_DISPLAY = false;
          global.config.save();
        }
        await message.reply('Thiết lập thành công ! Hệ thống đang khởi động lại...');
        global.restart();
        break;
      default:
        message.reply(str_options);
        break;
      }
      break;
    default:
      message.send(str)
      break;
  }
}
export default {
  config,
  Running
}