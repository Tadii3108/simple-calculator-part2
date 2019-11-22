// Functions

class calculator {
  construtor () {
    this.lasto = 0;
    this.slot_value = [];
  }

//adds multiple number functions
  add() {
    let sum = 0;
    let i = 0;

    for (i = 0; i < arguments.length; i++) {
        if(arguments[i] == 'LAST') {
          arguments[i] = this.lasto;
        }

        if(arguments[i] === 'SLOT_1') {
          arguments[i] = this.get_slot(1);
        }

        if(arguments[i] === 'SLOT_2') {
          arguments[i] = this.get_slot(2);
        }

        sum += arguments[i];
        arguments[i] = this.lasto;
        this.lasto = sum;
      }
      return sum;
    }

//multiply multiple number functions
  multiply() {
    let product = 1;
    let i = 0;

    for(let i = 0; i < arguments.length; i++) {
      if(arguments[i] == 'LAST') {
        arguments[i] = this.lasto;
      }

      product *= arguments[i];
      arguments[i] = this.lasto;
      this.lasto = product;
    }
    return product;
  }

  last() {
    return this.lasto;
  }

//memory slots
  set_slot() {
    this.slot_value.push(this.lasto);
  }

  get_slot(n) {
    return this.slot_value[n-1];
  }
}

let ans = new calculator();

console.log(ans.add(4,2));
console.log(ans.multiply('LAST', 5));
console.log(ans.add(1,2));
ans.set_slot(1);
console.log(ans.get_slot(1));

console.log(ans.add(55,20));
ans.set_slot(2);
console.log(ans.get_slot(2));

console.log(ans.add(69,280));
console.log(ans.get_slot(1));
console.log(ans.get_slot(2));
console.log(ans.last());

console.log(ans.add('LAST', 10));
console.log(ans.multiply('SLOT_1', 5));


module.exports = { calculator }
