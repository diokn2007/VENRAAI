const config = {
  "name": "n4",
  "aliases": ["cayy"],
  "description": "",
  "usage": "",
  "cooldown": 3,
  "permissions": [2],
  "credits": "Dwen",
  "extra": {}
};

const list = [
  "tỉnh lẽ mặt xấu xài nút home cb của lũ thất bại :)))",
"chỉ biết seen và âm thầm đọc từg câu anh chửi kkk 😜 :)))",
"sủa chill cho mẹ mày siêu thoát nè 👈🤣🤣",
"báo chính quyền đá con thú này ra khỏi sever này lẹ =)))",
"con óc đú bot với hnam bị a bem lòi mẹ óc ra mà kkk :))",
"m gõ hăng lên ko t siết cổ con mẹ m lên cây thánh giá như chúa Jesus nè con đú :))",
"con mẹ m nghe tin m loạn luân vs bố m nên lấy dao cắt cổ tự tử r kìa con ngu :))",
"yêu cầu chính quyền sút dái con thú này ra khỏi trái đất mau cho t =)))",
"ah bá sàn này mà nào e hơn được anh v con đú 2023?",
"m tìm câu nào sát thương tí được k thằng nghịch tử đâm bố đụ mẹ :)) 🤣",
"bà nội m loạn luân vs bố m còn ông ngoại m loạn luân vs mẹ m mà thg não cún =)) 🤪",
"não cún chỉ biết âm thầm seen và ôm gối khóc mà huhuh 👈😜",
"m là con đĩ đầu đinh giết má để loạn luân với bố mà con khốn =))).",
"👈🤣🤣",
];

let index = 0;
let isStopped = false;

export function Running({ message }) {
  const args = message.body.split(" ").slice(1); 
  if (args[0] === "s") {
    isStopped = true; 
    message.send("𝐀𝐧𝐡 𝐛𝐚́ 𝐠𝐨̃ 𝐧𝐡𝐚̂𝐲 𝐦𝐚̀ 𝐥𝐮̃ 𝐚̆𝐧 𝐡𝐚̣𝐢 😜");
    return;
  }

  if (isStopped) {
    isStopped = false;
  }

  const sendText = () => {
    message.send(list[index]);
    index = (index + 1) % list.length;
    if (!isStopped) {
      setTimeout(sendText, 2000); 
    }
  };
  sendText();
}

export default {
  config,
 Running
};