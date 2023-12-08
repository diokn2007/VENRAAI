import { existsSync, readFileSync, writeFileSync, createReadStream } from "node:fs";
import { join } from "node:path"

const path = join(global.assetsPath, 'rep4.json');

function onLoad() {
  if (!existsSync(path)) {
    writeFileSync(path, JSON.stringify({}));
  }
  if (!global.rep4_888_cd) global.rep4_888_cd = new Map();
}

let rep4 = [
  "sủa lẹ đi {name}",
  "úi cn {name} bướm khắm:))))",
  "cn già mày đập đt mày à {name} eyy:))) ",
  "úi coi cn bẻm {name} nó bị chà đạp kìa:)))",
  "{name} khắm chui dô bướm con đĩ già nó chặn keo núp trỏng à:))))",
  "câm à con {name} ngu:)))",
  "{name} eyyy:))",
  "úi cái con {name} hôi:)))",
  "chết cn già mày à {name}:)))",
  "địt con {name} cụ mày phọt khí bướm:)))",
  "úi {name} cha bị úp:))) {name} con trốn đâu r ae:)))",
  "{name} ơi sao m ngu vậy {name}",
  "{name} M là con chó dưới chân t phải k? {name}",
  "êi culi {name}",
  "nào mày mới bằng được cái móng chân tao á {name}",
  "con mẹ mày ngu à {name}",
  "con chó {name} m sủa lẹ t coi",
  "m ngu mà phải không {name}",
  "{name} bede sủa lẹ đi",
  "thằng {name} đầu đinh đâu rồi",
  "sồn lên với tao đi nè thằng boài {name}",
  "thằng như mày xứng đáng ăn cứt tao á {name}",
  "cố gắng mà để win tao nhe {name}",
  "tao bất bại mà thằng ngu {name}",
  "ẳng hăng vào đi chứ mày ẳng gì mà nhạt nhẽo thế {name}",
  "mạnh mẽ lên xem nào {name}",
  "kém cỏi thế thằng mồ côi {name}",
  "phản kháng êi sao đứng yên chịu trận vậy {name}",
  "bất hiếu à {name}",
  "thằng đú {name} m sủa đi nào",
  "mẹ mày bị tao đầu độc tới chết mà {name}",
  "tao trùm mẹ rồi còn gì mà cãi nữa {name}",
  "kiki sủa đi nè {name}",
  "đàn ông hay đàn bà mà yếu đuối vậy {name}",
  "mau đi nè em êi {name}",
  "chậm chạp vậy {name}",
  "thằng bất tài vô dụng sủa mạnh lên đi {name}",
  "bà già mày bị tao treo cổ lên trên trần nhà mà {name}",
  "mày còn gì mới nữa không đó em {name}",
  "thằng đầu đinh cay cú tao à :))) {name}",
  "tao bá đạo vcl 🤣 {name}",
  "êi thằng nghèo sao câm rồi {name}",
  "mày xứng đáng ăn cứt tao :)) {name}",
  "thằng vô sinh cay cú tao à {name}",
  "mày cố gắng để được như tao đi {name}",
  "bắt chước tao à thằng ngu {name}",
  "quỳ lạy van xin tao đi nè {name}",
  "con hai néo như mày đang diễn hài cho tao cười đấy à {name}",
  "bị tao chửi tới hóa dại luôn rồi à {name}",
  "vô sinh mà đòi đẻ con à thằng boài {name}",
  "con cặc chưa mở mắt mà đòi đụ ai {name}",
  "mày sợ tao rồi hả {name}",
  "khắc tinh đời mày là tao nè {name}",
  "sủa hăng vào cho tao có hứng êi {name}",
  "thằng chó đẻ dân tộc miên hay sao mà đen thế {name}",
  "cố lên đi nè em êi {name}",
  "sắp win được rồi á {name}",
  "có cửa để win tao không {name}",
  "mày đang nằm mơ hay sao á {name}",
  "tao bất bại cmnr {name}",
  "tao là bá chủ thiên hạ đấy {name}",
  "tới sáng không {name}",
  "mày sửa nữa đi sao mà im re rồi {name}",
  "tao cho mày câm chưa mà mày câm thế {name}",
  "đấu tranh đê thằng nhu nhược {name}",
  "hăng hái lên đê em êi {name}",
  "đàn ông mà sức lức như đàn bả vậy {name}",
  " sua de {name} ",
" con {name} lùn cay à ",
"con {name} xì trum 🤣",
" con mập {name} ",
" {name} cặc sợ à em 🤣 ",
" {name} ngu sủa liên tục",
" {name} ngu cay",
" con {name} cặc trâu 🤣",
" mẹ con {name} bị tao trap ",
" {name} bónk",
" {name} có mẹ ko em ",
" con {name} chắc ko có mẹ r 🤣 ",
" {name} lồn mồ côi 🤣 ",
" mẹ mày chết r à {name} ",
" con {name} mập  ",
"con {name} cay à em",
"con {name} mồ côi",
"con bónk {name} ",
"nhìn con {name} có vẻ sắp chạy 🤣🙄",
" con lùn lùn {name} ",
"con {name} cay 100% r ae ",
"con {name} xì trum cay",
"con lgbt {name} mồ côi ",
"mồ côi = {name} ",
"sợ à con {name} ",
" {name} cặc",
" cay cú à {name} ",
" :))) con {name} ngu ngang con già nó",
" {name} óc bím",
"con boài {name} ",
" {name} bê đê cay ",
" {name} lồn mẹ mày bị tao trap mà ",
" {name} cái lồn ",
" con {name} lag à ",
" nhấn help đê con {name} ",
"con {name} gay à ae ",
"sợ à {name} cặc",
"{name} lgbt cay ",
" {name} cặc",
"{name} cặc chết r à ",
" con chó {name} sợ tao lắm ",
" {name} lồn cay",
" con già m ăn cứt tao mà {name} 🤣",
" {name} cặc ",
" úi con {name} bị ae tao thay phiên nhau bash cái đầu 🤣 ",
" {name} cặc cay à em",
" {name} lồn ko có mẹ ",
" {name} lồn mẹ rip 💀",
" con {name} lồn thiếu thốn tình thương ",
" {name} bị tao fake mẹ đẻ xong bỏ 🤣🙄",
" {name} lồn cay r ae ",
"con già mày {name} ê",
" mẹ con lồn {name} bị tao oneshot chết r ae 🤣",
" {name} bị ae t đánh ",
" {name} mồ côi ",
" {name} lồn  ",
" {name} cặc",
" {name} bónk cay à ",
"úi con bede {name} lùn lùn",
" {name} cặc cay 🤣",
" {name} lồn ",
" {name} gay cay ",
"gay à {name}  ",
" {name} cặc gay 🤣",
" {name} lồn eo di bi ti 🤣",
" sợ à {name} lồn ",
"con boài {name} cay :))) ",
" con {name} 3 tạ ",
" {name} cặc",
" {name} lồn bị chửi ",
" {name} lùn cay",
" {name} lùn cay r",
" {name} lùn cay tht r ae 🤣 ",
" con {name} lồn bê đê",
":))) sủa liên tục đee {name} bónk",
" {name} cặc minion ",
" :))) con {name} chó ",
"con lồn {name} hay đạp xe đạp ngang nhà tao bị tao chọi đá 🤣",
 " {name} mập ",
" {name} lồn mua thuốc giảm cân uống đi em :))) ",
 " {name} lồn đi lún cả đất ae ạ",
" {name} boài bị cả mxh kì thị 🤣",
 " {name} cặc sợ à ae ",
" con {name} heo quay đâu r ae 🤣",
 " {name} ê ",
" {name} lé  ",
 " {name} lé cay à em",
":))( {name} lé à ",
 " {name} lồn 🤣",
" {name} cặc bị ae t log acc thay phiên chửi ",
 " chia ca ra hành con {name} đi ae 💀",
" con {name} bede cay 🤣",
 " {name} bónk  ",
" {name} bónk ",
" {name} eo di bi ti ",
 " {name} bónk mồ cô 🤣 ",
"con {name} ngu v ae 🤣",
  "cay cú ôm hận tao suốt đời nè phải không {name}",
  "úi cái con chó {name} này bị ngu à"
]

function Running({ message }) {
  const { threadID, senderID } = message;
  if (senderID == global.botID) return;
  let data = JSON.parse(readFileSync(path, "utf-8"));
  if (!data[threadID] || !data[threadID].enable) return;
  const COOLDOWN = 1000 * 3;
  const cooldown = global.rep4_888_cd.get(message.threadID) || 0;

  if (Date.now() - cooldown < COOLDOWN || message.args[1] == "stop") return;

  global.rep4_888_cd.set(message.threadID, Date.now());
  if (
    (data[threadID].mention != "" && data[threadID].mention == senderID) ||
    data[threadID].mention == ""
  ) {
    if (data[threadID].index >= rep4.length) data[threadID].index = 0;
    message.send({
      body: rep4[data[threadID].index].replace(/{name}/g, data[threadID].content),
      attachment: createReadStream(data[threadID].path)
    })
    data[threadID].index++;
    writeFileSync(path, JSON.stringify(data, null, 4));
  }
}

export {
  Running,
  onLoad
}