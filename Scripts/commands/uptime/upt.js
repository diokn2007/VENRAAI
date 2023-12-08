const config = {
  name: "upt",
  aliases: ["cặc con"],
  description: "Kiểm tra thời gian bot online",
  usage: "con cặc",
  cooldown: 1,
  permissions: [2],
  credits: "",
  isAbsolute: true
};

async function Running({ message }) {
  const uptimeInSeconds = process.uptime();
  const hours = Math.floor(uptimeInSeconds / 3600);
  const minutes = Math.floor((uptimeInSeconds % 3600) / 60);
  const seconds = Math.floor(uptimeInSeconds % 60);

  try {
    const replyMessage = await message.reply(`=== [ 𝑩𝒐𝒕 𝑾𝒂𝒓 ] ===
◆━━━━━━━━━━━━━━━━◆
► 𝐁𝐨𝐭 Đ𝐚̃ 𝐇𝐨𝐚̣𝐭 Đ𝐨̣̂𝐧𝐠 Đ𝐮̛𝐨̛̣𝐜
${hours} 𝐆𝐢𝐨̛̀ ${minutes} 𝐏𝐡𝐮́𝐭 ${seconds} 𝐆𝐢𝐚̂𝐲 ◄
◆━━━━━━━━━━━━━━━━◆
[ 🏷️ ] 𝑻𝒆̂𝒏 𝑩𝒐𝒕: Nguyên Chuche 🐣
𝑊𝑒𝑙𝑐𝑜𝑚𝑒 𝑇𝑜 𝑀𝑦 𝐵𝑜𝑡 Nguyên Blue
 🌸 UPDATE BOT VKN 2.0
𝑨𝒅𝒎𝒊𝒏 𝑾𝒂𝒓𝑩𝒐𝒕: Nguyên Blue 🐣
𝑪𝒐𝒑𝒚𝒓𝒊𝒈𝒉𝒕 𝑩𝒚: Nguyên Blue 🐣 
𝑬𝒎𝒂𝒊𝒍: nguyenblue2007@𝒈𝒎𝒂𝒊𝒍.𝒄𝒐𝒎
◆━━━━━━━━━━━━━━━━◆
[ 🔫 ] 𝐓𝐡𝐮𝐞̂, 𝐌𝐮𝐚 𝐁𝐨𝐭 𝐖𝐚𝐫 𝐋𝐢𝐞̂𝐧 𝐇𝐞̣̂ 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐀𝐝𝐦𝐢𝐧: https://www.facebook.com/profile.php?id=100078735176323
◆━━━━━━━━━━━━━━━━◆`);
    console.log(replyMessage);
  } catch (error) {
    console.error(error);
  }
}

export default {
  config,
  Running,
};