(() => {
  function parseStr(input: string): string[];
  function parseStr(input: string[]): string;
  function parseStr(input: number): boolean;

  function parseStr(input: unknown): unknown {
    if (Array.isArray(input)) {
      return input.join(); //string
    } else if (typeof input === 'string') {
      return input.split(''); //string[]
    } else if (typeof input === 'number') {
      return true; //boolean
    }
  }

  const rtaArray = parseStr('Milton');
  rtaArray.reverse();

  //   if (Array.isArray(rtaArray)) {
  //     rtaArray.reverse();
  //   }

  console.log('rtaArray', 'Milton=> ', rtaArray);

  const rtaStr = parseStr(['s', 't', 'r', 'i', 'n', 'g']);
  rtaStr.toLowerCase();

  //   if (typeof rtaStr === 'string') {
  //     rtaStr.toLowerCase();
  //   }

  console.log('rtaStr', "['s', 't', 'r', 'i', 'n', 'g']=> ", rtaStr);

  const rtaBoolean = parseStr(2);
  console.log(rtaBoolean);
})();
