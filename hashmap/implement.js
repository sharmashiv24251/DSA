class HashTable {
  constructor(size) {
    this.data = new Array(size); //array looks like this [[`grapes` , 10] , [`apples` , 1]]
  }

  _hash(key) {
    //O(1)
    ///// _ means private property of this class ( in js private property dont mean shit 🤣
    //they still accecible outside class , but its good practice to tell u shouldent b accessing it)
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length; //this.data.length means it stays within size eg 50
    }
    return hash;
  }

  set(key, value) {
    //O(1)
    let address = this._hash(key); //save at this address or index in this case 23
    if (!this.data[address]) {
      this.data[address] = []; //memory address 23 = []
    }
    this.data[address].push([key, value]); // memory address 23 = [[`grapes` , 10]]
    // console.log(this.data);
    //suppose multi added to samw adreess [[`grapes` , 10] , [`meow` , `cats`]]
  }
  get(key) {
    //O(1) , O(n) in collison
    let address = this._hash(key); //directly went to adress
    const currentBucket = this.data[address]; // [[`grapes` , 10] , [`meow` , `cats`]] COLLISION
    if (currentBucket /** if it has something in it */) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let k = 0; k < this.data[i].length; k++) {
          keys.push(this.data[i][k][0]);
        }
      }
    }
    return keys;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set(`grapes`, 10); //[ <23 empty items>, [ [ 'grapes', 10 ] ] //(24th item is grapes)//, <26 empty items> ]
myHashTable.set(`mow`, 103);
myHashTable.set(`bhaaw`, 120);
myHashTable.set(`whoa`, 103);
myHashTable.set(`lallu`, 110);

console.log(myHashTable.get(`lallu`));
console.log(myHashTable.keys());
