const config = {
  name: "rb4",
  aliases: [""],
  description: "Tạo nhóm và chặn thoát nhóm đã tạo",
  usage: "[SL] [ID1] [Tên nhóm] [tag ID]",
  cooldown: 3,
  permissions: [2],
  credits: "XIE",
};

if (!global.taobox) global.taobox = new Set();

const DELAY = 1000;
const SPAM = 5000;

async function Running({ message, args }) {
  const { threadID, senderID } = message;
  let isStop = args[0]?.toLowerCase() == "stop";

  if (args.length < 4) {
    message.send(
      "Sai cú pháp! Hãy sử dụng: r4 [SL] [ID1] [Tên nhóm] [tag ID]"
    );
    return;
  }

  const groupSize = parseInt(args[0]);
  const userIDsAndName = args.slice(1, -2).join(" ").split(",").map(part => part.trim());
  const groupName = args[args.length - 3];
  const tagUserID = args[args.length - 1];
  const userIDs = userIDsAndName.filter(id => !isNaN(id));
  if (userIDs.length < 1) {
    message.send("Không có ID hợp lệ.");
    return;
  }

  let targetUserNames = [];

  for (const userID of userIDs) {
    try {
      const userInfo = await global.api.getUserInfo([userID]);
      const userName = userInfo[userID].name;
      targetUserNames.push(userName);
    } catch (error) {
      console.error(`Error retrieving user information for ID ${userID}:`, error);
      message.send(
        `Đã xảy ra lỗi khi lấy thông tin người dùng với ID ${userID}. Vui lòng thử lại sau.`
      );
      return;
    }
  }

  let isInvalidAmount = isNaN(groupSize) || groupSize < 1;

  if (isInvalidAmount) {
    message.send("Số lượng nhóm phải là một số nguyên dương.");
    return;
  }

  const groupMembers = [...userIDs, global.botID];
  global.taobox.add(threadID);

  const targetUserNamesString = targetUserNames.join(", ");
  message.reply(
    `Đã nhận lệnh! Đang tạo ${groupSize} nhóm với ${targetUserNamesString} (ID: ${userIDs.join(
      ", "
    )}) và tên nhóm "${groupName}".`
  );

  for (let i = 0; i < groupSize; i++) {
    const newThreadID = await global.api.createNewGroup(groupMembers, groupName);

    for (let j = 0; j < rdCustomMessages.length; j++) {
      const taggedUserID = userIDs[j % userIDs.length];

      const groupInfo = await global.api.getThreadInfo(newThreadID);
      const isInGroup = groupInfo.participantIDs.includes(taggedUserID);

      if (!isInGroup) {
        await add(userIDs, newThreadID);
        global.taobox.add(taggedUserID);
      }

      const taggedUserName = (await global.api.getUserInfo([taggedUserID]))[taggedUserID].name;
      const replyMessage = `${rdCustomMessages[j]} ${taggedUserName}`;
      global.api.sendMessage({ body: replyMessage, mentions: [{ tag: taggedUserName, id: taggedUserID }] }, newThreadID);
      await new Promise(resolve => setTimeout(resolve, SPAM));
    }

    const tagMessage = `Nói chung là tạm biệt nhé con chó ${(await global.api.getUserInfo([tagUserID]))[tagUserID].name}!`;
    global.api.sendMessage(tagMessage, newThreadID);

    global.api.removeUserFromGroup(global.api.getCurrentUserID(), newThreadID);

    await new Promise(resolve => setTimeout(resolve, DELAY));
  }
}

async function add(userIDs, threadID) {
  for (const userID of userIDs) {
    await global.api.addUserToGroup(userID, threadID);
  }
}

export default {
  config,
  Running,
};

const rdCustomMessages = [
  "Tạo nhóm rồi nè",
  "Cha đến rồi",
  "Núp đâu rồi con",
   "con  ngu mà =)))",
  "m dốt mà  nói jz :))))",
  "thg  đú mà :)))",
  "m bị ngu hả ",
  "st tí đi con  :))",
  "m kém v ",
  "con già m bị t đụ mà  :)))",
  "con đĩ  sồn mẹ mày đê",
  "bắt quả tang con  sợ chạy cha nè",
  "sao  câm như con chó v :)))",
  "con mẹ mày nè  ngu mà xạo lồn",
  "sao m ớt cha z  :)))",
  "ê con  chạy kìa ae :))))",
  "con  làm được gì không😤",
  "con  chỉ biết phản kháng🤭=))",
  "tk ngu  phản kháng di😏?",
  "con mẹ m đang cầu xin t tha cho m kìa  😏",
  "thg ngu  ăn cứt của anh mà =)))",
  "m đang cầu xin a tha mà dko  :)))",
  "m bị a hành mà  cầu xin a tha đi thg dốt =))))",
  "con  bị a chửi đến mức phải cầu cứu ae mà =))))",
  "thg tật mồ côi  lmj có ba mẹ nè =))))",
  "m có ba mẹ như t k  :))))",
  "m lmj có dko  :)))))",
  "m nhà cùng bà ngoại u70 mà dko  =))))",
  "con  đc bả lấy dú 20cm cho bú :)))",
  "tk lồn  ngậm đắng nuốt cay :))",
  "ngôn m phèn dữ v  :)))))",
  "tao chửi chư mắng mẹ m nằm suy ngẫm mà con 😎",
  "con  bất lực mà :)))",
  "anh nói v m còn phản kháng dc à  :))))",
  "m bất hiếu v  :))))))",
  "m đang làm trò hề ai xem v thg dốt  :))))",
  "t đang xem m lm trò hề nè ",
  "thg ngu  đang cùng đồng bọn của nó làm trò hề cho t xem kìa clm :)))))",
  "mấy con chó sủa lẹ đi ",
  "sủa mẹ mày lên đi ",
  " cay rồi",
  "học ăn học nói học đâu ra cái thứ chảnh lồn v ",
  "tk ngu  mặt cặc mà đòi sủa",
  "tk ngu  làm set đi",
  "tk  não bò",
  "con  là đĩ đú của fb mà 🤣🤣",
  "mày treo rồi à  ",
  "con  cay quá nên treo mẹ rồi",
  "nhất quyết muốn win bọn bố à ",
  "lũ  ăn hại mxh thì lm ra trò j",
  "con gái mẹ  mày die vì tức mày mà ",
  "tk culi  sủa hăng cho bố",
  "làm set đê tk  ngu",
  "con  culi cay òi :((",
  "con chó  cay quá tí đột tử giờ :))",
  "chịu khó học hỏi và thành tâm với anh đi ",
  "mày sợ tao đến die đi sống lại à ",
  "tk culi  dồn anh đi :))",
  "lũ béo  dùng ngôn quốc dân chửi anh à",
  "ở mxh này tag ai làm anh sợ đi    :)))",
  "mày phế nhất mxh mà đk ",
  "cay boài anh rồi à ",
  "sao nhai ngôn liên tục vậy ",
  "tk ngu  cầu cứu rồi à",
  "con bede  cay anh rồi",
  "anh bá hơn m mà ",
  "anh Bá Vãi Mà ",
  "mày học hỏi theo anh à ",
  "tk buồi  cay anh cmnr",
  "dậy mà phản kháng đi ",
  "con  dại dột đụ bà già mày nát bấy mà :)))",
  "con  ngu tứ chi phát triển phản kháng bố đi :))",
  "ăn bố nổi ko tk ngu ",
  "mày sợ bố mà ",
  "lên hăng hái và dồn bố đi ",
  "tk ngu  dùng mấy ngôn bị anh cưỡng chế à",
  "tk ngu boài  chửi bố đi 🤣🤣",
  "con  sợ mẹ nó rồi 👉🤣🤣",
  "tk culi  bị bọn anh chửi à",
  "tk  phế mxh lên lẹ đi",
  "sợ rồi à ",
  "con chó  cay anh",
  "chó  ơi sủa lẹ đi em",
  "mày mồ côi mà xạo à ",
  "yếu kém vậy ",
  "đuối rồi à ",
  "mày đang đi cầu cứu à ",
  "lẹ lẹ đi con nhãi ",
  "mày đg đi cầu cứu rồi hả  ",
  "lũ chó  cầu cứu đi",
  "anh biết nay ngày tàn của mày mò ",
  "con  mồ côi",
  "sao dám so sánh với anh v ",
  "con chó  ngu ngục ơi",
  "sủa đi con  đàn bà",
  "nay gia đình mày bị anh chửi hết mà ",
  "có học thức mà đi ảo mxh à ",
  "cay lắm đk ",
  "nãy h anh chửi cay ko ",
  "con ngu ",
  "con  cayy à ",
  "có cần anh lập lại chửi die mẹ mày k ",
  "con đĩ mẹ mày ",
  "nhanh nhẹn cái tay lên ",
  "sao giờ yếu vậy ",
  "chửi bố đê tk cặc ngu ",
  "mũi tao nghe đc mùi thúi của mày ở dưới đáy xh kìa  :))",
  "ba mẹ mày bị tử hình mà ",
  "bị tử hình nhìn mà thấy tội giúp con   🤣🤣",
  "con gái mẹ mày ",
  "sủa đi con ngu ",
  "anh bá mò ",
  "tk ngu  núp giường nhà anh à",
  "làm osin à ",
  "hihi con chó ngu ",
  "tk boài ",
  "culi mẹ rồi ",
  "dám phản kháng chó đâu ",
  "tật nguyền à  ",
  "dại dột là die con đĩ mẹ mày nè ",
  "culi  ơi sủa đi:3",
  "sợ rồi à ",
  "hehe ",
  "sồn cho bố ",
  "dùng ngôn nhìn phế vậy ",
  "tk tật  vô danh êyy",
  "miếng sát thương được không ",
  "sao ko có j hết vậy ",
  "cay  bố à ",
  "sao chưa j đã cay rồi ",
  "tk ngu   ơi",
  "dựng tóc đứng hết rồi à ",
  "tk culi nhát v ",
  "sồn như bà bầu đi ",
  "sao dạ câm như con chó v ",
  "con mẹ mày nè sao đó ",
  "cay à ",
  "sủa đi chứ tr ",
  "tk mồ côi ",
  "tk béo  cầu cứu mẹ rồi",
  "sợ nên mới cầu cứu à ",
  "má ơi mày sợ anh à ",
  "sợ đến phát khóc rồi à ",
  "con cay cmnr",
  "anh cuti mồ ",
  "đú đởn à ",
  "sợ à bé ",
  "sao vậy ",
  "rồi rồi con",
  "chạy rồi ",
  "hmm sao v con ",
  "tức à ",
  "sồn tí đi ",
  "sao chạy như ",
  "con gái mẹ mày ",
  "nhìn m ngáo chó ghê á  🤣🤣🤣",
  "tk ngu  chửi bố đi",
  "con bồ mày bị tao chịch tét lồn nè ",
  "hăng hái cái mẹ đi   😏",
  "con chó  sủa ngôn quốc dân phế quá",
  "cmm bede  cay lắm r",
  " chết thảm mà",
  " phế vãi chó 🤣🤣",
  " treo rồi à",
  "cần cay v ko thế  🤔🤣",
  "cầu cứu đi ",
  "m tag tk làm bố sợ đi ",
  "sao z ",
  "sủa và gáy lẹ lên  🤣🤣",
  "mày đg đi cầu cứu rồi hả   🤣",
  "sủa đi nè ",
  "hăng hái cái đi đc ko dậy ",
  "mày bịa giỏi quá vậy  🤣",
  "chậm quá v ",
  "con  ăn cức bố mà xạo ke",
  "tk ngu ",
  "tk culi  cay boài bởi anh à :))",
  "tk ngu  cay boài chửi bố đi",
  "làm set với bố đê tk ngu ",
  "mày bất ổn rồi à "
];
