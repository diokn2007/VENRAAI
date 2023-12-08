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
  const info = cli.rainbow('⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯                                  \nTHIÊN THƯƠNG ĐỊA HẠ DUY @NGUYEN BLUE LÀ THƯỢNG\n⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯                                  \n').stop();
  info.render();
  const frame = info.frame();
  console.log(frame+`\n`);
}