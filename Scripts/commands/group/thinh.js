const config = {
    name: "thinh",
    aliases: ["thathinh"],
    description: "Những câu thả thín hay",
    usage: "",
    credits: "BraSl"
}
import { join } from 'path';
import fs from 'fs'
 const dataPath = join(global.assetsPath, '..','..',"/handlers/cache/thinh.json")
function Running({ message, args }) {
 let poem = JSON.parse(fs.readFileSync(dataPath));
  var tho = poem[Math.floor(Math.random() * poem.length)].trim();
  message.reply(tho)
}

export default {
    config,
    Running
}
