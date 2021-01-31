let html = document.querySelector("#html");
let style = document.querySelector("#style");

let string = `/* 你好
 * 接下来我将演示一下如何空手变太极
 * 首先我要变出一个div
 **/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 接下来我将把 div 变成一个太极
 * 首先，把 div 变成一个圆
 **/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 太极是阴阳形成的
 * 一黑一白一阴一阳
 **/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个神秘的小球 */
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
`;
// demo.innerHTML = string.substring(0, n); //从哪个参数开始，从哪个参数结束

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
/*
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
*/

let string2 = "";
let n = 0;

let step = () => {
  setTimeout(() => {
    // 如果是回车，就不照搬
    // 如果不是回车就照搬
    if (string[n] === "\n") {
      string2 += "<br>";  //回车变html的回车
    } else if (string[n] === " ") {
      string2 += "&nbsp;";  //把空格变成css的空格
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999); //自动滚动
    html.scrollTo(0, 99999); //自动滚动
    if (n < string.length - 1) {
      // 如果 n 不是最后一个,就继续
      n += 1;
      step();
    }
  }, 0);
};

step();


/*
setTimeout(()=>{
    step()
    setTimeout(()=>{
        
    })
})
*/
