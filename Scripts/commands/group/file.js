const config = {
    name: "file",
    aliases: ["delfile"],
    permissions: [2],
    description: "xem item trong folder, xóa, xem file",
    usage: "<>",
    credits: "BraSL",
    isAbsolute: true
}
import { readdirSync, statSync, unlinkSync, rmdirSync,  createReadStream ,copyFile} from 'fs';
import { join } from 'path'
const PATH = join(global.pluginsPath)

async function replyFile({ message, eventData }) {
    const { threadID, senderID, args ,reply} = message;
    const { data, author } = eventData;
    var count = 0;
    try {
    if (author != senderID) return;
      switch (message.args[0].toLowerCase()) {
        case 'open': openFolder(message, message, data[message.args[1]-1].dest);
            break;
        case 'del': {
            var arrFile = [],
            fo,
            fi;
            for (const i of message.args.splice(1)) {
                const {
                    dest,
                    info
                } = data[i-1];
                const ext = dest.split('/').pop();
                if (info.isFile()) unlinkSync(dest),
                arrFile.push(ext),
                fi = 'file'; else if (info.isDirectory()) rmdirSync(dest, {
                    recursive: true
                }),
                arrFile.push(ext),
                fo = 'folder';
            };
            reply(`Đã xóa những ${!!fo && !!fi ? `${fo}, ${fi}`: !!fo?fo: !!fi?fi: null}:\n\n${arrFile.join(', ')}`);
        };
            break;
        case 'view': { 
          copyFile(data[message.args[1]-1].dest, data[message.args[1]-1].dest.replace(".js",".txt"));
          reply({
            attachment: createReadStream(data[message.args[1]-1].dest.replace(".js",".txt"))});
            break;
                     }
        default: reply(`Reply [Open|del|view] + STT.`);
        };
    } catch (e) {
        console.error(e || "WTFFF");
        message.reply(getLang("error"));
    }
}

function convertBytes(size) {
        const file = size/1024;
        var x = file >= 1024 ? file*0.0009765625: file;
        x = x.toFixed(2);
        return file >= 1024 ? x+'MB': x+'KB';

    };

    function openFolder(a, b, c) {
      const read = readdirSync(c);
      
        var txt = '',
        count = 0;
        var array = [];
        for (const i of read) {
            const dest = `${c}/${i}`,
            info = statSync(dest);
            txt += `${++count}. ${info.isFile() ? '📄': info.isDirectory() ? '📁': undefined} - ${i} (${convertBytes(info.size)})\n`;
            array.push({
                dest, info
            });
        };
      
        txt += `\n--> Reply [Open|Del|View] + STT.`
        return a.reply(txt).then(ab => ab.addReplyEvent({ data: array, author: a.senderID, callback: replyFile }))
    };


function Running({ message, args, data }) {
    openFolder(message, message, PATH)
}

export default {
    config,
    Running
}
