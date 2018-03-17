function new2(func){
    // 1 func 构造函数执行
    // 2 
    // 3 返回一个object
    let o = Object.create(func.prototype)
    let k = func.call(o)
    return typeof k === 'object' ?k:o;
}
M.prototype={

}
let m = new2(M);
console.log(m instanceof M);
console.log(m instanceof Object);
console.log(m.__proto__ === M.prototype)
function M(){
    this.name = 'ff'
}
// let m = new M();