import chalk from 'chalk';

const logger = {
  info: (message) => {
    console.log(chalk.bold.hex('#1d542f').bold('[THÔNG TIN]» ') + message);
  },
  warn: (message) => {
    console.log(chalk.bold.hex('#945f2b').bold('[CẢNH BÁO]» ') + message);
  },
  error: (message) => {
    console.log(chalk.bold.hex('#942b2b').bold('[LỖI]» ') + message);
  },
  system: (message) => {
    console.log(chalk.bold.hex('#f59e42').bold('[HỆ THỐNG]» ') + message);
  },
  custom: (message, type, color = "\x1b[36m") => {
    console.log(`${color}[${type}]\x1b[0m ${message}`);
  }
};
export default logger;