const config = {
  name: "up",
  aliases: ["udt"],
  version: "1.0.0",
  description: "uptime",
  usage: "[]",
  cooldown: 3,
  permissions: [2],
  credits: ""
}

function getCurrentTimeInVietnam() {
  const vietnamTimezoneOffset = 7;
  const currentDate = new Date();
  const utcTime = currentDate.getTime() + (currentDate.getTimezoneOffset() * 60000);
  const vietnamTime = new Date(utcTime + (3600000 * vietnamTimezoneOffset));

  const daysOfWeek = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];
  const day = daysOfWeek[vietnamTime.getDay()];
  const dateString = `${day} - ${vietnamTime.toLocaleDateString('vi-VN')}`;
  const timeString = vietnamTime.toLocaleTimeString('vi-VN');

  return `${dateString} - ${timeString}`;
}
const thinhMessages = [
  "Em là ánh sáng tỏa rạng trong thời gian của anh.",
  "Thời gian trôi qua nhanh nhưng những khoảnh khắc bên em sẽ mãi mãi in sâu trong trái tim anh.",
  "Bên cạnh em, thời gian dường như dừng lại vì sự hoàn hảo.",
  "Mỗi giây phút bên em là một kỷ niệm đáng nhớ trong cuộc đời anh.",
  "Em là nguyên nhân khiến thời gian trở nên ngọt ngào và đáng nhớ nhất.",
  "Thời gian là quà tặng quý giá và em là món quà tuyệt vời nhất trong cuộc sống anh.",
  "Khi bên em, thời gian trở thành người bạn đồng hành tuyệt vời.",
  "Thời gian không thể đo bằng năm tháng mà bằng những kỷ niệm bên em.",
  "Em làm trái tim anh rung động như nhịp đập của thời gian.",
  "Thời gian trôi qua nhưng tình yêu của anh dành cho em không bao giờ phai nhạt.",
  "Bên cạnh em, thời gian trở nên vô cùng có giá trị.",
  "Mỗi khoảnh khắc bên em là một chặng đường mới trong cuộc sống anh.",
  "Em là ngọn lửa lan tỏa trong thời gian, làm cho mọi khoảnh khắc đều sáng rực.",
  "Thời gian dường như chảy qua nhanh hơn khi bên em, nhưng cũng chậm lại để chúng ta có thể tận hưởng từng khoảnh khắc.",
  "Em là nguồn cảm hứng khiến anh trở nên mạnh mẽ và đầy nhiệt huyết.",
  "Thời gian có thể quên đi những điều nhỏ nhặt, nhưng những khoảnh khắc bên em sẽ mãi mãi trong ký ức anh.",
  "Bên cạnh em, thời gian trở thành một vũ trụ riêng biệt của chúng ta.",
  "Mỗi giây phút bên em là một trải nghiệm tuyệt vời.",
  "Em làm cho thời gian trở thành một bài học không thể quên.",
  "Thời gian làm anh thấu hiểu giá trị của những khoảnh khắc bên em.",
  "Bên cạnh em, thời gian trở thành một dòng sông êm đềm và đầy tình yêu.",
  "Mỗi giây phút bên em là một chuyến phiêu lưu đáng nhớ.",
  "Em là nguồn năng lượng và sức sống khiến thời gian trở nên sống động.",
  "Thời gian trôi qua nhưng tình yêu của anh dành cho em sẽ mãi không thay đổi.",
  "Bên cạnh em, thời gian trở thành một bức tranh tuyệt đẹp.",
  "Mỗi khoảnh khắc bên em là một câu chuyện tình đẹp như trong truyền thuyết.",
  "Em là ngọn gió thổi bay những phiền muộn của thời gian.",
  "Thời gian trôi quarất nhanh, nhưng mỗi lần bên em, nó trở nên chậm lại để chúng ta có thể tận hưởng từng khoảnh khắc.",
  "Bên cạnh em, thời gian trở nên vô cùng quý giá và đáng trân trọng.",
  "Mỗi giây phút bên em là một món quà quý giá trong cuộc sống anh.",
  "Em làm cho thời gian trở thành một cuộc sống đáng sống.",
  "Thời gian có thể bay đi, nhưng những kỷ niệm bên em sẽ mãi mãi ở trong trái tim anh.",
  "Bên cạnh em, thời gian trở thành một khoảng trống không thể lấp đầy.",
  "Mỗi khoảnh khắc bên em là một truyền thuyết tình yêu.",
  "Em là ngọn nến sáng trong thời gian tăm tối.",
  "Thời gian trôi qua nhưng tình yêu của anh dành cho em không bao giờ phai nhạt.",
  "Bên cạnh em, thời gian trở thành một cuộc phiêu lưu tuyệt vời.",
  "Mỗi giây phút bên em là một bước tiến trong cuộc sống anh.",
  "Em là ngọn lửa lan tỏa trong thời gian, làm cho mọi khoảnh khắc đều rực rỡ.",
  "Thời gian dường như chảy nhanh hơn khi bên em, nhưng cũng chậm lại để chúng ta có thể thưởng thức từng khoảnh khắc.",
  "Em là nguồn cảm hứng khiến anh trở nên mạnh mẽ và đầy nhiệt huyết.",
  "Thời gian có thể quên những chi tiết nhỏ, nhưng những khoảnh khắc bên em sẽ luôn mãi trong ký ức anh.",
  "Bên cạnh em, thời gian trở thành một vũ trụ riêng của chúng ta.",
  "Mỗi giây phút bên em là một trải nghiệm tuyệt vời.",
  "Em làm cho thời gian trở thành một bài học không thể quên.",
  "Thời gian khi bên em làm anh hiểu giá trị của từng khoảnh khắc.",
  "Bên cạnh em, thời gian trở thành một dòng sông êm đềm và đầy tình yêu.",
  "Mỗi giây phút bên em là một chuyến phiêu lưu đáng nhớ.",
  "Em là nguồn năng lượng và sức sống khiến thời gian trở nên sống động.",
  "Thời gian trôi qua, nhưng tình yêu anh dành cho em sẽ mãi không thay đổi.",
  "Bên cạnh em, thời gian trở thành một bức tranh tuyệt đẹp.",
  "Mỗi khoảnh khắc bên em là một câu chuyện tình đẹp như trong truyền thuyết.",
  "Em là gió nhẹ thổi đi những phiền muộn của thời gian.",
  "Thời gian trôi qua rất nhanh, nhưng mỗi khi bên em, nó trở nên chậm lại để chúng ta có thể thưởng thức từng khoảnh khắc.",
  "Bên cạnh em, thời gian trở nên vô cùng quý giá và đáng trân trọng.",
];

async function Running({ message }) {
  const uptimeInSeconds = process.uptime();
  const hours = Math.floor(uptimeInSeconds / 3600);
  const minutes = Math.floor((uptimeInSeconds % 3600) / 60);
  const seconds = Math.floor(uptimeInSeconds % 60);

  try {
    const currentTimeInVietnam = getCurrentTimeInVietnam();
    const randomIndex = Math.floor(Math.random() * thinhMessages.length);
const thinhMessage = thinhMessages[randomIndex];
const replyMessage = await message.reply(`BOT WAR BY NGUYÊN BLUE 𓆙\n◘ Thời gian hoạt động\n❄ ${hours} giờ ${minutes} phút ${seconds} giây\n◘ Thời gian hiện tại\n❄ ${currentTimeInVietnam}\n◘ Thính\n❄ ${thinhMessage}`);
    console.log(replyMessage);
  } catch (error) {
    console.error("Error while replying:", error);
  }
}

export default {
  config,
  Running,
};
