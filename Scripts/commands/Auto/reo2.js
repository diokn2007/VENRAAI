const config = {
  name: "reo2",
  description: "",
  usage: "",
  cooldown: 3,
  permissions: [2],
};

let arr = [
    "úi cn đĩ {name} ",
    "lẹ lên",
    "sủa đi {name}",
    "câm à con {name}",
    "alo",
    "úi cái con {name} óc lồn",
    "con đĩ {name} sợ t à",
    "đĩ ngu nhại à",
    "con đĩ {name} ngu rõ",
  "lô con đĩ",
  "{name} sao mày chậm dọ",
  "{name} ớt à",
"{name} chó ngu ơi",
"m nhanh đi",
"m sợ cha à",
"kh tiếp à",
"lẹ lên em",
"m bị tật à {name}",
"đĩ {name} bị tật kìa",
"m non mà",
"chối à",
"ớt anh lắm rồi",
"{name} đang cảm nhận nổi đauu",
"{name} ngu sủa mau đi ơ",
"{name} ôi mày bị cha xúc phạm kìa",
"{name} óc ko cha ko mẹ bị khinh thường",
"mày cay tao mà {name}",
"đĩ ngu bị cha chửi mà con {name}",
"mày run sợ trước tao mà {name}",
"con {name} bẻm sợ t mà",
"nhìn mày đơ vậy {name}",
"nhìn {name} gà ỉa chảy",
"{name} bị chửi t mà sợ t mày",
"{name} câm hận tao lắm",
"đừng cay tao nữa nha {name}",
"{name} con chó bú cứt",
"bị tao xúc phạm ko biết nhục à {name}",
"oan ức ko {name}",
"thù ghét tao à {name}",
"con chó làm mẫu sủa cha mày coi tí đi {name}",
"con {name} dái bộng",
"bị tao chửi rung cặc mà đk {name}",
"con chó ỉa cứt chảy mà {name}",
"nào mày ăn dc tao thế {name}",
"sử dụng ngôn từ gây sát thương đi mò {name}",
"có sát thương chí mạng ko {name}",
"đĩ {name} ngu quá đừng hóa ớt nha",
"tội con đĩ {name} ghê",
"cay lắm rồi à {name}",
"cạn ngôn rồi kìa {name}",
"còn đc không vậy con đĩ {name}",
"lẹ lên em {name}",
"sủa lên vài từ nữa đi nà",
"mày bị t chửi chỉ biết nghe thôi hả {name}",
"yếu kém đòi va tao vậy {name}",
"coi nó đỏ mặt vì cay đắng {name}",
"thấy tội mà ghê",
"phèn thì né xa t ra đi {name}",
"mày vs lũ bạn mày ăn dc t ko đó {name}",
"1 lũ phèn v {name}",
"hạ đẳng thế làm j có tuổi với anh vậy {name}",
"ngu ra oai xong bị t sút bại quê ko {name}",
"con chó bú cứt tao mà {name}",
"{name} hửi đít t khen thơm tho",
"{name} ngu rõ mà chối à",
"tao nói con {name} nó gà mà sủa lắm",
"tao chuyên trị mấy đứa như mày mà",
"{name} chó vạn kiếp ko ăn dc tao",
"thằng óc chó {name} bị t chửi đến mét mẹ",
"cay tao à {name} bú dái",
"m tính lên ăn hôi à {name}",
"ức chế tao lắm rồi mà con chó {name}",
"{name} boài sủa chill đi",
"con heo mập {name} cấm m ăn cứt",
"{name} phèn thì câm nha ai cho m lên tiếng vậy",
"{name} óc chó cay cha lắm dk",
"lên đê {name} ăn cứt chó",
"{name} m bị tao chửi đến off mxh luôn r hả",
"sao m có tuổi ăn tao đó {name}",
"t ra hiệu lệnh m mới dc chạy nha con ngu óc cứt {name}",
"bị tao bón hành ngập mồm mà {name}",
"{name} ngu đối diện vs nghịch cảnh",
"m câm = t win đó {name}",
"đĩ ngu còn gì không",
"sủa nốt xem nào",
"úi úi con đĩ {name}",
"lẹ lên đi em",
"đừng câm nhé",
"m gà mà",
"sự thật mà",
"chối à",
"ớt rồi à",
"còn gì Không",
"m ổn không",
"đĩ {name} tiếp tục nào",
"đừng câm sớm quá nhé {name}",
"con thú"
  ]
  
setInterval(() => {
    for (let [key, value] of global.reoten_999) {
      if (value.index == arr.length) value.index = 0;
      api.sendMessage(arr[value.index].replace(/{name}/g, value.content), key, () => {
        value.index++;
      });
    }
  }, 5000);

if (!global.reoten_999) {
  global.reoten_999 = new Map();
}

async function Running({ message, args }) {
  let content = args.join(" ");

  if (content === "=))") {
    global.reoten_999.delete(message.threadID);
    return await message.reply();
  }

  global.reoten_999.set(message.threadID, { content, index: 0 });
  await message.reply(" ");
}

export default {
  config,
  Running,
};