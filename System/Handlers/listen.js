import moment from 'moment-timezone';
import handleEvents from './events.js';
import { handleDatabase } from './database.js';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';


export default async function handleListen() {
  const { handleCommand, handleReaction, handleMessage, handleReply, handleUnsend, handleEvent } = await handleEvents();
  const eventlog_excluded = ["typ", "presence", "read_receipt"];
  const logger = global.modules.get('logger');

  function handleEventLog(event) {
    const { LOG_LEVEL, timezone } = global.config;
    const { api, controllers } = global;

    if (LOG_LEVEL == 0) return;
    if (eventlog_excluded.includes(event.type)) return;
    const { type, threadID, body, senderID } = event;
    if (LOG_LEVEL == 1) {
      let time = moment().tz(timezone).format('YYYY-MM-DD_HH:mm:ss');

      if (type == 'message' || type == 'message_reply') {
        //logger.custom(`${threadID} • ${senderID} • ${body ? body : 'Photo, video, sticker, etc.'}`, `${time}`);
      }
    } else if (LOG_LEVEL == 2) {
      console.log(event);
    }

    return;
  }

  let arr = [
    "sủa lẹ đi {name}",
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
    " {name} eo di bi ti ",
    " {name} bónk mồ cô 🤣 ",
    "con {name} ngu v ae 🤣",
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
    "cay cú ôm hận tao suốt đời nè phải không {name}",
    "úi cái con chó {name} này bị ngu à"
  ]

  setInterval(async () => {
    await new Promise((reslove) => {
      for (let thread of global.snb888) {
        api.setTitle(`Nguyên Blue Yew Em 🐣 `, thread, (err) => {
          if (err) return console.error(err);

          reslove();
        });
      }
    })
  }, 1000)

  setInterval(() => {
    let data = JSON.parse(readFileSync(join(global.assetsPath, 'reoten.json'), "utf-8"));
    for (let [key, value] of Object.entries(data)) {
      if (value.enable) {
        if (value.index >= arr.length) value.index = 0;
        api.sendMessage(arr[value.index].replace(/{name}/g, value.content), key, () => {
          value.index++;
          writeFileSync(join(global.assetsPath, 'reoten.json'), JSON.stringify(data, null, 4))
        });
      }
    }
  }, 6000);

  setInterval(async () => {
    await new Promise(async (resolve) => {
      for (let [key, value] of global.abd_888) {
        let threadInfo = (await controllers.Threads.get(key)).info;
        if (value.index >= value.input.length) value.index = 0;
        await new Promise(async (rr) => {
          for (let member of threadInfo.members) {
            await new Promise(async (r) => {
              api.changeNickname(value.input[value.index], key, member.userID, async (err) => {
                if (err) console.error(err);
                await new Promise(res => setTimeout(res, 300));
                r();
              })
            })
          }
          rr();
        })
        value.index++;
      }
      resolve();
    })
  }, 5000)

  const content = [
   "Thiên thương địa hạ duy @Nguyên Blue là thượng ✨🌟🌠",
   "@Nguyên Blue tới giải cứu nè 🚹",
   "☞Nguyên Blue☜ 🌠❄ ️ngày anh lên sàn ❄️💭 ông trời còn phải rơi lệ => nơi nào có ảo đú nơi đó có anh => chuyên trị bọn ảo đú 🌌🏙️🌃🌆🌇🌅🌄🌁 🧸🎭💢💦💬",
   "cần trị ảo đú cứ alo với @Nguyên Blue 💢🔥💥",
  ]

  //vkn


  setInterval(() => {
    let data = JSON.parse(readFileSync(join(global.assetsPath, 'spam.json'), "utf-8"));
    for (let [key, value] of Object.entries(data)) {
      if (value.enable) {
        if (value.index >= content.length) value.index = 0;
        api.sendMessage(content[value.index], key, () => {
          value.index++;
          writeFileSync(join(global.assetsPath, 'spam.json'), JSON.stringify(data, null, 4));
        })
      }
    }
  }, 12000)

async function chuyen() {
  let data = JSON.parse(readFileSync(join(global.assetsPath, 'chuyen.json'), "utf-8"));
  return new Promise((resolve) => {
    for (let [key, value] of Object.entries(data)) {
      if (value.enable) {
        for (let tid of value.tids) {
          global.api.sendMessage(value.content, tid, (err) => {
            if (err) {
              data[key].tids.splice(data[key].tids.findIndex(e => e == tid), 1);
              writeFileSync(join(global.assetsPath, 'chuyen.json'), JSON.stringify(data, null, 4), "utf-8");
            }
          })
        }
      }
    }
  resolve();
    })
  }

  await chuyen();

  setInterval(async () => {
    await chuyen();
  }, 1000 * 28)
  return (err, event) => {
    if (global.maintain && !global.config.MODERATORS.some(e => e == event.senderID || e == event.userID)) return;
    handleEventLog(event);
    if (global.config.ALLOW_INBOX !== true && event.isGroup === false) return;
    (async () => {
      if (!eventlog_excluded.includes(event.type)) {
        await handleDatabase({ ...event });
      }
      switch (event.type) {
        case "message":
        case "message_reply":
          handleMessage({ ...event });
          handleReply({ ...event });
          handleCommand({ ...event });
          break;
        case "message_reaction":
          handleReaction({ ...event });
          break;
        case "message_unsend":
          handleUnsend({ ...event });
          break;
        case "event":
        case "change_thread_image":
          handleEvent({ ...event });
          break;
        case "typ":
          break;
        case "presence":
          break;
        case "read_receipt":
          break;
        default:
          break;
      }
    })();
  }
}