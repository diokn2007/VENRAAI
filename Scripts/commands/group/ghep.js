const config = {
    name: "ghep",
    aliases: ["ghepdoi", "ghép"],
    permissions: [0,1,2],
    description: "Ghép đôi với những người trong nhóm!",
    usage: "",
    credits: "BraSL"
}
import axios from 'axios';
import fs from 'fs';
async function Running({ message, args, data }) {
        const { Threads, Users } = global.controllers;
        var tile = Math.floor(Math.random() * 101);
       
        var name1 = (await Users.get(message.senderID)).info.name
   
        let loz = (await Threads.get(message.threadID)).info
        var emoji = loz.members;
        var ids = emoji[Math.floor(Math.random() * emoji.length)];
       var id = ids.userID
        
        var name = (await Users.get(id)).info.name

      
        var arraytag = [];
                arraytag.push({id: message.senderID, tag: name1});
                arraytag.push({id: id, tag: name});
        //Currencies.setData(message.senderID, options = {money: money - x$}) //thay số $ cần trừ vào x, xóa 2 gạch đầu dòng này để thực hiện trừ tiền
  
        let Avatar = (await axios.get( `https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( `${global.cachePath}` + "/avt.png", Buffer.from(Avatar, "utf-8") );
        let Avatar2 = (await axios.get( `https://graph.facebook.com/${message.senderID}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync(`${global.cachePath}` + "/avt2.png", Buffer.from(Avatar2, "utf-8") );
        var imglove = [];
              imglove.push(fs.createReadStream(`${global.cachePath}` + "/avt.png"));
              imglove.push(fs.createReadStream(`${global.cachePath}` + "/avt2.png"));
        var msg = {body: `⚡️Ghép đôi thành công!\n⚡️Tỉ lệ hợp đôi: ${tile}%\n`+name1+" "+"💓"+" "+name, mentions: arraytag, attachment: imglove}
        return message.reply(msg)
      
}

export default {
    config,
    Running
}