// co 顺序执行异步，自动化方案
// 生成器函数 async
function* fn(a){
    // 添加一些异步的操作 同步化运行
    a = yield a
    let b= yield 2;
    let c = yield 3;
    return a+b+c;
}
function co(fn,...args){
    let g = fn(...args);
    return new Promise((resolve,reject)=>{
        function next(lastValue){
            // next 参数可以参与yield后面的计算
            let {value,done}=g.next(lastValue)
            if(done){
                resolve(value);
            }else{
                next(value)
            }
        }
        next();
    })
    // fn() 执行才能去迭代
    // next()才能往下走
    // 返回值 done true or false
    // resolve 那一刻
}
// return Promise 
co(fn,100)
.then(value=>{
    console.log(value)
})
// 迭代器
let g = fn();
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())