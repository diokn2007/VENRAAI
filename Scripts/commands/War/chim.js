const config = {
  "name": "s2",
  "aliases": ["dcm","dcmm"],
  "description": "",
  "usage": "",
  "cooldown": 3,
  "permissions": [2],
  "credits": "WaifuCat",
  "extra": {}
};

const list = [
"lũ béo bọn anh đấng mà 🤪 ",
"lũ ngu cha Win Mà 🤣",
"Trời Trời Nhìn Nó Sồn Rồi Kìa Ae 💢 ",
"Con bede sồn rồi nóng rồi à cay mẹ rồi😋 ",
"Mồ Côi Sồn Nhìn Hài Ghê 👉🤣",
  "Mẹ Đẻ Của Mày Chết Sớm Mà 🤪 ",
  "con bede phá thai kìa 👉🤣",
  "sồn như gái mẹ mày đi em 🤪🤪",
  "các đấng giết mày mà 🤣🤣",
  "rồi rồi nhìn hw tự xưng sồn kìa 💢",
  "tk cặc nghèo kìa ae 👉🤣",
  "mày bú dú bà già mày sống à 🤤🤤",
  "bồ mày bị tao địt die mà 😏 ",
  "bồ mày kêu tao tha mà ☻ ",
  "seen chùa kìa ơ ơ 🤣 ",
  "con này seen chùa mẹ rồi 🤣 ",
  "con bede mẹ mày cay đột tử mà 💢🤪 ",
  "tr tr nhìn nó kìa",
"sợ rồi à",
  "chuẩn bị nó chạy nè ae",
  "con ngu tếu vcl",
  "diễn hề ai xem vậy em",
  "con chó ngu joke khốn khổ",
  "m phế nhất mxh r ",
  "anh ước phế 🤪🤪",
  "con gái mẹ mày die dưới tay bọn anh kìa",
  "rồi xong chạy mẹ r ",
  "giải tán à ",
  "con chó đú mày sồn anh xem",
  "tk ngu thik dồn các đấng à",
  "sợ rồi chứ gì",
  "còn gì khác không con béo 😋",
  "mẹ mày bị bọn anh chửi mà",
  "tk vô danh ko phản kháng nổi à",
  "rồi luôn chạy rồi",
  "con béo này nhìn hài",
  "chắc lên code die luôn quá",
  "mày hài v em",
  "con bede ko dám phản đối à",
  "con bất hiếu này 👉🤣🤣",
  "mày bất hiếu vậy",
  "ngu mà xạo cặc nè 🤣🤣",
  "sồn như gái mẹ mày anh xem",
  "clm con chúa hề 🤣",
  "con bede câm à",
  "rồi xong nó chạy mẹ rồi ae",
  "ko dám phản đối à",
  "nó chạy rồi anh em ạ",
  "con bede bị tố cáo giết bome nè",
  "mày bị tao địt chết mà đk em gái",
  "con lồn này bú cu tao giỏi lắm ae",
  "m sồn như ban đầu ko nổi nữa à",
  "câm r kìa",
  "con bede ngu ngục",
  "cản chở bọn bố mẹ rồi",
  "con bede này hơi bị ngu nha",
  "nào m lớn v 🤣🤣",
  "con chó ngu ngục câm vs anh à",
  "con đú xưng hw ngu vl",
  " hot ỉa mẹ r",
  "cầu cứu rồi à",
  "nhìn mày giống mấy con đĩ đú 2023 ghê",
  "r xong",
  "mới có tí mà die rồi",
  "ae đừng dame acc nó nhé",
  "nó sợ đấy",
  "con pikachu fake ơi",
  "vạch lồn ra anh liếm đi 🤪",
  "mày sợ tao như sợ j mà",
  "r r ko dám r",
  "m thèm cu mà em",
  "sợ chạy r ư",
  "cha dập bọn đú thành công rồi",
  "con phế mxh này 👉🤣🤣",
  "chậm chạp thế",
  "con mồ côi này tự vẫn à",
  "sồn như ban đầu đi ơ",
  "chạy mẹ rồi",
  "rồi lun sợ rồi à",
  "ơ ơ con bede chạy kìa",
  "bố cho chạy chưa 😂😂",
  "chạy thoát bố à",
  "mày hoảng nên chạy à",
  "con bede hoảng mẹ rồi😂",
  "cha bá mà ",
  "mấy con đĩ đửa kìa 😏",
  "bị các đấng dập die à",
  "mày treo rồi à em 😏😏",
  "cha bá rõ mà con đĩ phế vật",
];

let index = 0;
let isStopped = false;

export function Running({ message }) {
  const args = message.body.split(" ").slice(1); 
  if (args[0] === "stop") {
    isStopped = true; 
    message.send("con đĩ mày ngu vãi😂");
    return;
  }
  
  if (isStopped) {
    isStopped = false;
  }
  
  const sendText = () => {
    message.send(list[index]);
    index = (index + 1) % list.length;
    if (!isStopped) {
      setTimeout(sendText, 3000); 
    }
  };
  sendText();
}

export default {
  config,
  Running
};