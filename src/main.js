let demo = document.querySelector('#demo'); //选择id=demo
let n = 1;

demo.innerHTML = n; //往demo里写字

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

let step = ()=> {
    setTimeout(()=>{
        n = n + 1;
        demo.innerHTML = n;  
        if(n<=10){
            step();    //---重点---
        }else{

        }
    },1000)

};

step();


/*
setTimeout(()=>{
    step()
    setTimeout(()=>{
        
    })
})
*/
