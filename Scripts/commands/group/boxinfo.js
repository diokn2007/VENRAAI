const config = {
    name: "boxinfo",
    aliases: ["infobox"],
    permissions: [0, 1, 2],
    description: "info box",
    usage: "<>",
    credits: "BraSL"
}
import { join } from 'path'
import fs from 'fs'

async function streamURL(url) {
  try {
    const dest = join(`${global.cachePath}/1.png`);
    if (isURL(url)) {
      await downloadFile(dest, url);
    } else {
      await saveFromBase64(dest, url);
    }
    setTimeout(j => fs.unlinkSync(j), 60 * 1000, dest);
    return fs.createReadStream(dest);
  } catch (e) {
    return;
  }
}

async function Running({ message, data }) {
  const { threadID } = message;
  const { Threads, Users } = global.controllers;
  var info = (await Threads.get(threadID)).info;
  var listad = '';
  var gendernam = [];
  var gendernu = [];
  for (let i = 0; i < info.members.length; i++) {
    var gioitinhone = (await Users.get(info.members[i].userID)).info.gender;
    if (gioitinhone == "MALE") { gendernam.push(i + gioitinhone) }
    else if (gioitinhone == "FEMALE") { gendernu.push(gioitinhone) }
  }
  for (let i = 0; i < info.adminIDs.length; i++) {
    const name = (await Users.getName(info.adminIDs[i].id));
    listad += '' + `•` + name + '\n';
  }
  var prefix = data?.thread?.data?.prefix || global.config.PREFIX;
  message.reply({
    body: `
    Name box: ${info.name}
    Số thành viên: ${info.members.length}
    Số tv nam: ${gendernam.length}
    Số tv nữ: ${gendernu.length}
    Số qtv: ${info.adminIDs.length}
    \nTổng số tin nhắn: ${info.messageCount}`
  });
}

export default {
    config,
    Running
}