var a = 0;
var b = 1;
var fibo = [];
for (let i = 0; i < 10; i++) {
    let memb = a + b;
    fibo.push(memb);
    a = b;
    b = memb;
}

console.log(fibo)
