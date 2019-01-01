import { readFileSync, readdirSync, writeFileSync } from 'fs';

let lang;
if (process.argv.length >= 3) {
  lang = process.argv[2];
}
// } else {
//   throw '[error] can not get language. Please add argv[2].';
// }

(async () => {
  let fileList: string[] | any = [];

  for (const d of ['', 'building/']) {
    const directory = process.cwd() + '/translate/' + lang + '/' + d;
    let files: string[] | any = readdirSync(directory, { encoding: 'UTF8' });
    files = files
      .filter(file => {
        return /.*\.json$/.test(file);
      })
      .map(file => {
        return directory + file;
      });
    fileList = fileList.concat(files);
  }

  for (const path of fileList) {
    const transFile = JSON.parse(readFileSync(path, { encoding: 'UTF8' }));
    const transLang = transFile.translate;
    let resourceText = readFileSync(process.cwd() + '/src/content/' + transFile.target, { encoding: 'UTF8' });

    for (const key of Object.keys(transLang)) {
      resourceText = resourceText.replace(new RegExp(key.replace(/[-\/\\^$*+?.()|\[\]{}]/g, '\\$&'), 'g'), transLang[key]);
    }
    writeFileSync(process.cwd() + '/src/content/' + transFile.target, resourceText, { encoding: 'UTF8' });
  }
})();
