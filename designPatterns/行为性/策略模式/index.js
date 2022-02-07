class AddOperation {
  constructor() {}

  operation(numberA, numberB) {
    return numberA + numberB;
  }
}

class SubOperation {
  constructor() {}

  operation(numberA, numberB) {
    return numberA - numberB;
  }
}

const strategy = {
  add: AddOperation,
  sub: SubOperation
};
class Context {
  constructor(type) {
    this.strategy = new strategy[type]();
  }

  doOperation(numberA, numberB) {
    return this.strategy.operation(numberA, numberB);
  }
}

const ctx1 = new Context("add");
console.log(ctx1.doOperation(1, 2));

const ctx2 = new Context("sub");
console.log(ctx2.doOperation(3, 1));
