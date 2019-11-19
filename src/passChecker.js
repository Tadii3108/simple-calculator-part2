// Functions

class calculator {
  construtor () {
    this.lasto = 0;
  }

  add() {
    let sum = 0;
    let i = 0;

    for (i = 0; i < arguments.length; i++) {
        if(arguments[i] == 'LAST') {
          arguments[i] = this.lasto;
        }

        sum += arguments[i];
        arguments[i] = this.lasto;
        this.lasto = sum;
      }
      return sum;
    }

    multiply() {
      let product = 1;
      let k = 0;

      for(let k = 0; k < arguments.length; k++) {
        if(arguments[k] == 'LAST') {
          arguments[k] = this.lasto;
        }

        product *= arguments[k];
        arguments[k] = this.lasto;
        this.lasto = product;
      }
      return product;
    }

    last() {
      return this.lasto;
    }
}

let ans = new calculator();

console.log(ans.add(321, 847));
console.log(ans.last());
console.log(ans.multiply(5,11));
console.log(ans.last());

module.exports = { calculator }
