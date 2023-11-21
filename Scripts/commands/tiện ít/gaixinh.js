const config = {
  name: "gaixinh",
  aliases: ["gaixinhvn"], 
  description: "random gai",
  version: "1.0.0",
  permissions: [0, 1, 2],
  credits: "VKN"
};

const images = [
 "https://i.imgur.com/9uHvdRJ.jpg",
 "https://i.imgur.com/H5ysf7J.jpg",
 "https://i.imgur.com/nWxnb6s.jpg",
 "https://i.imgur.com/x67N5b0.jpg",
 "https://i.imgur.com/1UrfSlr.jpg",
 "https://i.imgur.com/tsXuYaE.jpg",
 "https://i.imgur.com/FwIarau.jpg",
 "https://i.imgur.com/woevxA5.jpg",
 "https://i.imgur.com/KRKydwn.jpg",
 "https://i.imgur.com/pkpJ7GL.jpg",
 "https://i.imgur.com/t3vM1AK.jpg",
 "https://i.imgur.com/YtOJIkB.jpg",
 "https://i.imgur.com/zr7zvla.jpg",
  "https://i.imgur.com/aTAL9Qs.jpg",
 "https://i.imgur.com/n55CUVK.jpg",
 "https://i.imgur.com/saU8bhq.jpg",
 "https://i.imgur.com/7zjLMw2.jpg",
 "https://i.imgur.com/gCFjU6z.jpg",
  "https://i.imgur.com/X79MRMI.jpg",
  "https://i.imgur.com/cO2wxWU.jpg",
  "https://i.imgur.com/vNHoPe1.jpg",
  "https://i.imgur.com/PhRZjXO.jpg",
  "https://i.imgur.com/vDt9wP4.jpg",
  "https://i.imgur.com/UqLyJga.jpg",
  "https://i.imgur.com/GKwaCik.jpg",
  "https://i.imgur.com/szOMfnL.jpg",
  "https://i.imgur.com/q1vdcVg.jpg",
  "https://i.imgur.com/MmORJZ9.jpg",
  "https://i.imgur.com/BNkbAUA.jpg",
  "https://i.imgur.com/EgKpz3m.jpg",
  "https://i.imgur.com/dYmEopC.jpg",
  "https://i.imgur.com/l4RPATZ.jpg",
  "https://i.imgur.com/KqZquZk.jpg",
  "https://i.imgur.com/r5i6g8v.jpg",
  "https://i.imgur.com/zUTu5N8.jpg",
  "https://i.imgur.com/nut1JP4.jpg"  
];

function getRandomIndex(arr) {
  const max = arr.length - 1;
  const min = 0;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function Running({ message }) {
  try {
    if (images.length === 0) return message.reply(getLang("error"));

    const index = getRandomIndex(images);
    const image = images[index];

    const imageStream = await global.getStream(image);
    await message.reply({
      attachment: [imageStream]
    });
  } catch (e) {
    message.reply(getLang("error"));
  }

  return;
}

export default {
  config,
  Running
};