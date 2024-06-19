function add(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

// module.export = add; // this will export the function once, because it will overwrite the value.

module.exports = {add, sub}; // mulitple function can be export throught this way

// We can also write like this
// module.exports = {
//     addFnc: add, 
//     subfnc: sub
// }

// we can export directly throught export object as well

// exports.add = (a, b) => a + b;
// exports.sub = (a, b) => a - b;
