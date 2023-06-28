let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {};

// let isNewVar: boolean = anyVar;

let unknownVar: unknown;
unknownVar = true;
unknownVar = undefined;
unknownVar = null;
unknownVar = 1;
unknownVar = [];
unknownVar = {};

// unknownVar.doSomething();

if (typeof unknownVar === 'string') {
  unknownVar.toUpperCase();
}

if (typeof unknownVar === 'boolean') {
  let isNewVarV2: boolean = unknownVar;
}

// let isNewVarV2: boolean = unknownVar;

const parse = (str: string): unknown => {
  return JSON.parse(str);
};
