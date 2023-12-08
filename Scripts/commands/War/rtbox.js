const config = {
  name: "rtbox",
  description: "",
  usage: "[tên]",
  cooldown: 3,
  permissions: [2],
  credits: "Kaiyo"
};

let isChanging = false;
let stopChange = false;

const randomNames = [  
 "con {name} ngu mà =)))",
"m dốt mà {name} nói jz :))))",
"thg {name} đú mà :)))",
"m bị ngu hả {name}",
"st tí đi con {name} :))",
"m kém v {name}",
"con già m bị t đụ mà {name} :)))",
"con đĩ {name} sồn mẹ mày đê",
"bắt quả tang con {name} sợ chạy cha nè",
"sao {name} câm như con chó v :)))",
"con mẹ mày nè {name} ngu mà xạo lồn",
"sao m ớt cha z {name} :)))",
"ê con {name} chạy kìa ae :))))",
"con {name} làm được gì không😤",
"con {name} chỉ biết phản kháng🤭=))",
"tk ngu {name} phản kháng di😏?",
"con mẹ m đang cầu xin t tha cho m kìa {name} 😏",
"thg ngu {name} ăn cứt của anh mà =)))",
"m đang cầu xin a tha mà dko {name} :)))",
"m bị a hành mà {name} cầu xin a tha đi thg dốt =))))",
"con {name} bị a chửi đến mức phải cầu cứu ae mà =))))",
"thg tật mồ côi {name} lmj có ba mẹ nè =))))",
"m có ba mẹ như t k {name} :))))",
"m lmj có dko {name} :)))))",
"m nhà cùng bà ngoại u70 mà dko {name} =))))",
"con {name} đc bả lấy dú 20cm cho bú :)))",
"tk lồn {name} ngậm đắng nuốt cay :))",
"ngôn m phèn dữ v {name} :)))))",
"tao chửi chư mắng mẹ m nằm suy ngẫm mà con {name}😎",
"con {name} bất lực mà :)))",
"anh nói v m còn phản kháng dc à {name} :))))",
"m bất hiếu v {name} :))))))",
"m đang làm trò hề ai xem v thg dốt {name} :))))",
"t đang xem m lm trò hề nè {name}",
"thg ngu {name} đang cùng đồng bọn của nó làm trò hề cho t xem kìa clm :)))))",
"mấy con chó sủa lẹ đi {name}",
"sủa mẹ mày lên đi {name}",
"{name} cay rồi",
"học ăn học nói học đâu ra cái thứ chảnh lồn v {name}",
"tk ngu {name} mặt cặc mà đòi sủa",
"tk ngu {name} làm set đi",
"tk {name} não bò",
"con {name} là đĩ đú của fb mà 🤣🤣",
"mày treo rồi à  {name}",
"con {name} cay quá nên treo mẹ rồi",
"nhất quyết muốn win bọn bố à {name}",
"lũ {name} ăn hại mxh thì lm ra trò j",
"con gái mẹ  mày die vì tức mày mà {name}",
"tk culi {name} sủa hăng cho bố",
"làm set đê tk {name} ngu",
"con {name} culi cay òi :((",
"con chó {name} cay quá tí đột tử giờ :))",
"chịu khó học hỏi và thành tâm với anh đi {name}",
"mày sợ tao đến die đi sống lại à {name}",
"tk culi {name} dồn anh đi :))",
"lũ béo {name} dùng ngôn quốc dân chửi anh à",
"ở mxh này tag ai làm anh sợ đi  {name}  :)))",
"mày phế nhất mxh mà đk {name}",
"cay boài anh rồi à {name}",
"sao nhai ngôn liên tục vậy {name}",
"tk ngu {name} cầu cứu rồi à",
"con bede {name} cay anh rồi",
"anh bá hơn m mà {name}",
"anh Bá Vãi Mà {name}",
"mày học hỏi theo anh à {name}",
"tk buồi {name} cay anh cmnr",
"dậy mà phản kháng đi {name}",
"con {name} dại dột đụ bà già mày nát bấy mà :)))",
"con {name} ngu tứ chi phát triển phản kháng bố đi :))",
"ăn bố nổi ko tk ngu {name}",
"mày sợ bố mà {name}",
"lên hăng hái và dồn bố đi {name}",
"tk ngu {name} dùng mấy ngôn bị anh cưỡng chế à",
"tk ngu boài {name} chửi bố đi 🤣🤣",
"con {name} sợ mẹ nó rồi 👉🤣🤣",
"tk culi {name} bị bọn anh chửi à",
"tk {name} phế mxh lên lẹ đi",
"sợ rồi à {name}",
"con chó {name} cay anh",
"chó {name} ơi sủa lẹ đi em",
"mày mồ côi mà xạo à {name}",
"yếu kém vậy {name}",
"đuối rồi à {name}",
"mày đang đi cầu cứu à {name}",
"lẹ lẹ đi con nhãi {name}",
"mày đg đi cầu cứu rồi hả  {name}",
"lũ chó {name} cầu cứu đi",
"anh biết nay ngày tàn của mày mò {name}",
"con {name} mồ côi",
"sao dám so sánh với anh v {name}",
"con chó {name} ngu ngục ơi",
"sủa đi con {name} đàn bà",
"nay gia đình mày bị anh chửi hết mà {name}",
"có học thức mà đi ảo mxh à {name}",
"cay lắm đk {name}",
"nãy h anh chửi cay ko {name}",
"con ngu {name}",
"con {name} cayy à {name}",
"có cần anh lập lại chửi die mẹ mày k {name}",
"con đĩ mẹ mày {name}",
"nhanh nhẹn cái tay lên {name}",
"sao giờ yếu vậy {name}",
"chửi bố đê tk cặc ngu {name}",
"mũi tao nghe đc mùi thúi của mày ở dưới đáy xh kìa {name} :))",
"ba mẹ mày bị tử hình mà {name}",
"bị tử hình nhìn mà thấy tội giúp con {name}  🤣🤣",
"con gái mẹ mày {name}",
"sủa đi con ngu {name}",
"anh bá mò {name}",
"tk ngu {name} núp giường nhà anh à",
"làm osin à {name}",
"hihi con chó ngu {name}",
"tk boài {name}",
"culi mẹ rồi {name}",
"dám phản kháng chó đâu {name}",
"tật nguyền à  {name}",
"dại dột là die con đĩ mẹ mày nè {name}",
"culi {name} ơi sủa đi:3",
"sợ rồi à {name}",
"hehe {name}",
"sồn cho bố {name}",
"dùng ngôn nhìn phế vậy {name}",
"tk tật {name} vô danh êyy",
"miếng sát thương được không {name}",
"sao ko có j hết vậy {name}",
"cay  bố à {name}",
"sao chưa j đã cay rồi {name}",
"tk ngu {name}  ơi",
"dựng tóc đứng hết rồi à {name}",
"tk culi nhát v {name}",
"sồn như bà bầu đi {name}",
"sao dạ câm như con chó v {name}",
"con mẹ mày nè sao đó {name}",
"cay à {name}",
"sủa đi chứ tr {name}",
"tk mồ côi {name}",
"tk béo {name} cầu cứu mẹ rồi",
"sợ nên mới cầu cứu à {name}",
"má ơi mày sợ anh à {name}",
"sợ đến phát khóc rồi à {name}",
"con {name}cay cmnr",
"anh cuti mồ {name}",
"đú đởn à {name}",
"sợ à bé {name}",
"sao vậy {name}",
"rồi rồi con{name}",
"chạy rồi {name}",
"hmm sao v con {name}",
"tức à {name}",
"sồn tí đi {name}",
"sao chạy như {name}",
"con gái mẹ mày {name}",
"nhìn m ngáo chó ghê á {name} 🤣🤣🤣",
"tk ngu {name} chửi bố đi",
"con bồ mày bị tao chịch tét lồn nè {name}",
"hăng hái cái mẹ đi {name}  😏",
"con chó {name} sủa ngôn quốc dân phế quá",
"cmm bede {name} cay lắm r",
"{name} chết thảm mà",
"{name} phế vãi chó 🤣🤣",
"{name} treo rồi à",
"cần cay v ko thế {name} 🤔🤣",
"cầu cứu đi {name}",
"m tag tk làm bố sợ đi {name}",
"sao z {name}",
"sủa và gáy lẹ lên {name} 🤣🤣",
"mày đg đi cầu cứu rồi hả {name}  🤣",
"sủa đi nè {name}",
"hăng hái cái đi đc ko dậy {name}",
"mày bịa giỏi quá vậy {name} 🤣",
"chậm quá v {name}",
"con {name} ăn cức bố mà xạo ke",
"tk ngu {name}",
"tk culi {name} cay boài bởi anh à :))",
"tk ngu {name} cay boài chửi bố đi",
"làm set với bố đê tk ngu {name}",
"mày bất ổn rồi à {name}"
  // Thêm ngôn ở đây
];

function setTitle(title, threadID) {
  return new Promise(resolve => {
    global.api.setTitle(title, threadID, err => {
      if (err) {
        console.error(err);
        return resolve(null);
      }
      resolve(true);
    });
  });
}

function replaceNamePlaceholder(name, newName) {
  return name.replace(/\{name\}/g, newName);
}

async function changeThreadName(message, title) {
  isChanging = true;
  stopChange = false;

  const threadID = message.threadID;

  while (!stopChange) {
    await sleep(1500); //thay thời gian ở đây
    if (!stopChange) {
      const randomIndex = Math.floor(Math.random() * randomNames.length);
      const randomTitle = randomNames[randomIndex].replace(/\{name\}/g, title);
      await setTitle(randomTitle, threadID);
    }
  }

  isChanging = false;
}

async function Running({ message, args }) {
  if (message.isGroup) {
    if (args[0] === "stop") {
      stopChange = true;
      return message.reply("Dừng reo tên thành công.");
    }

    if (isChanging) {
      return message.reply("Đang reo đây thk óc:))");
    }

    const title = args.join(" ");
    if (!title) {
      return message.reply("Nhập tên vào thk culi!");
    }

    changeThreadName(message, title);

    return message.reply(`${title} ngu đã rơi vào tầm ngắm chuẩn bị đi thằng Culi😏`);
  } else {
    return message.reply("Chỉ có thể dùng ở box thôi thk đần.");
  }
}

export {
  config,
  Running
};

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
