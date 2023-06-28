function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(); //string
  } else {
    return input.split(''); //string[]
  }
}

const rtaArray = parseStr('Milton');
// rtaArray.reverse();

if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}

console.log('rtaArray', 'Milton=> ', rtaArray);

const rtaStr = parseStr(['s', 't', 'r', 'i', 'n', 'g']);
//rtaStr.toLowerCase();

if (typeof rtaStr === 'string') {
  rtaStr.toLowerCase();
}

console.log('rtaStr', "['s', 't', 'r', 'i', 'n', 'g']=> ", rtaStr);
