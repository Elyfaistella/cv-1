let demo = document.querySelector('#demo'); //选择id=demo
let string = `你好，我是一名前端新人`;
console.log(string.length);
let n = 0;

demo.innerHTML = string.substring(0, n); //从哪个参数开始，从哪个参数结束

/*
setTimeout(()=>{
    n = n + 1;
    demo.innerHTML = n;
}, 3000); //三秒后把1变成2
*/
/*
setInterval(()=>{
    n = n + 1;
    demo.innerHTML = n;
}, 3000); //每三秒后+1
*/

let step = () => {
    setTimeout(() => {
        console.log(n);
        n = n + 1;
        demo.innerHTML = string.substring(0, n);  
        if(n < string.length){
            step();    //---重点---
        }
    }, 400);

};

step();


/*
setTimeout(()=>{
    step()
    setTimeout(()=>{
        
    })
})
*/
