import {
  readFileSync
} from 'fs';
import cli from 'chalkercli';
import gradient from 'gradient-string';
export default () => {
  const str = `
              ██╗   ██╗ ██╗  ██╗ ███╗   ██╗
              ██║   ██║ ██║ ██╔╝ ████╗  ██║
              ██║   ██║ █████╔╝  ██╔██╗ ██║
              ╚██╗ ██╔╝ ██╔═██╗  ██║╚██╗██║
               ╚████╔╝  ██║  ██╗ ██║ ╚████║
                ╚═══╝   ╚═╝  ╚═╝ ╚═╝  ╚═══╝
 `;
  console.log(gradient.atlas(str));
  const info = cli.rainbow('').stop();
  info.render();
  const frame = info.frame();
  console.log(frame+`\n`);
}