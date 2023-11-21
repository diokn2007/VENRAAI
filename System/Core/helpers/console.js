import chalk from 'chalk';

const logger = {
  info: (message) => {
    console.log(chalk.bold.hex('#1d542f').bold('[INFO]» ')+message);
  },
  warn: (message) => {
    console.log(chalk.bold.hex('#945f2b').bold('[WARNING]» ')+message);
  },
  error: (message) => {
    console.log(chalk.bold.hex('#942b2b').bold('[ERROR]» ')+message);
  },
  system: (message) => {
    console.log(chalk.bold.hex('#f59e42').bold('[SYSTEM]» ')+message);
  },
  custom: (message,type,color = "\x1b[36m") => {
    console.log(`${color}[${type}]\x1b[0m ${message}`);
  }
}
export default logger;