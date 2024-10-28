let round=document.querySelector("#round");
let shape=document.querySelector("#diamond");
let arr=document.querySelectorAll("button");
arr[1].addEventListener("click",changecolor);
function changecolor (){
    let color='#'+generate();
    console.log(color);
    round.style.backgroundColor=color;
}

function generate(){
    let hex='0123456789ABCDEF';
    let newcolor="";
    for(let i=0;i<6;i++){
        let num=Math.floor(Math.random()*16);
        newcolor+=hex[num];
    }
    return newcolor;
}

arr[0].addEventListener("click",changeshape);
function changeshape(){
  const shapes = ['circle', 'ellipse', 'triangle', 'pentagon',  'star', 'arrow','diamond'];
  shape.id=shapes[Math.floor(Math.random()*shapes.length)]+"";
}
