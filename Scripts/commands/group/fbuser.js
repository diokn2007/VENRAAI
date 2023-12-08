const config = {
    name: "fbuser",
    aliases: ["fbu"],
    permissions: [1,2],
    description: "lọc mem die",
    usage: "<>",
    credits: "BraSL"
}

async function Running({ message, args, data }) {
  const { threadID ,senderID } = message;
   var { userInfo, adminIDs } = await global.api.getThreadInfo(threadID);    
    var success = 0, fail = 0;
    var arr = [];
    for (const e of userInfo) {
        if (e.gender == undefined) {
            arr.push(e.id);
        }
    };

    adminIDs = adminIDs.map(e => e.id).some(e => e == global.botID);
    if (arr.length == 0) {
        return message.reply("Trong nhóm bạn không tồn tại 'Người dùng Facebook'.");
    }
    else {
        message.reply("Nhóm bạn hiện có " + arr.length + " 'Người dùng Facebook'.") 
            if (!adminIDs) {
                message.reply("Nhưng bot không phải là quản trị viên nên không thể lọc được.");
            } 
                        else {
                message.reply("Bắt đầu lọc..") 
                    for (const e of arr) {
                        try {
                            await new Promise(resolve => setTimeout(resolve, 1000));
                            await api.removeUserFromGroup(parseInt(e),threadID);   
                            success++;
                        }
                        catch {
                            fail++;
                        }
                    }
                  
                    message.reply("Đã lọc thành công " + success + " người.")
                        if (fail != 0) return message.reply("Lọc thất bại " + fail + " người.");
                    
                
            }
       
    }
}

export default {
    config,
    Running
}
