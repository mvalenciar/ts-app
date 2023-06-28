const withoutEnd = () => {
  while (true) {
    console.log('nunca pares de aprender');
  }
};

const fail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'es un String';
  } else if (Array.isArray(input)) {
    return 'es un Array';
  }
  return fail('no match');
};

console.log(example('hola'));
console.log(example([1, 1, 1, 1]));
console.log(example(1212)); //detiene
console.log(example('hola después del fail'));
