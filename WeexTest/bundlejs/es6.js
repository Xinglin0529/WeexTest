'use strict'
let s = [1,2,3,4,5];
let set = new Set();
s.map((v) => set.add(v));
console.log(s, set.size);

function* generator() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
}
let gener = generator();
console.log(gener.next());
console.log(gener.next());
console.log(gener.next());
console.log(gener.next());
console.log(gener === gener[Symbol.iterator]());

function* fibonacci() {
    let prev = 0;
    let curr = 1;
    for (;;) {
        prev = curr;
        curr = prev + curr;
        yield curr;
    }
}

for (let n of fibonacci()) {
    if (n > 100) {
        break;
    }
    console.log(n);
}

try {

} catch (e) {

} finally {

}

let obj = fibonacci();
console.log(obj instanceof fibonacci);

let clock = function* () {
    while (true) {
        console.log('Tick!');
        yield;
        console.log('Tock!');
        yield;
    }
}

let number = 100;
let age = 20;
let promise = new Promise((resolve, rejected) => {
    if (number > 10) {
        resolve('promise success');
    } else {
        rejected(new Error('promise error'));
    }
})
// promise.then(response => {
//     console.log(response);
// }, error => {
//     console.log(error);
// })

let p1 = new Promise((resolve, rejected) => {
    if (age > 100) {
        resolve(promise);
    } else {
        rejected(new Error('p1 error'));
    }
})

//应该使用catch函数
p1.then(response => {
    console.log(response);
}, error => {
    console.log(111111111);
}).catch(error => {
    console.log(22222222);
})

let p2 = new Promise((resolve, rejected) => {
    if (age > 10) {
        resolve(10);
    } else {
        rejected(new Error('error'));
    }
})
p2.then(response => {
    return response + 5;
}).then(response => {
    return response - 2;
}).then(response => {
    console.log('当前值' + response);
}).catch(error => {
    console.log(error);
})


function* gen(param) {
    let y = yield param + 2;
    return y;
}

let g = gen(2);
console.log(g.next());
console.log(g.next());

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return '(' + this.x + ',' + this.y + ')';
    }
}

let point = new Point(1, 2);
console.log(point.toString());

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
    toString() {
        return this.color + ' ' + super.toString();
    }
}
let cp = new ColorPoint(1, 2, 'red');

console.log(cp.toString());
