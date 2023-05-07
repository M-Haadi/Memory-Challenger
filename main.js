
const allboxes= document.querySelectorAll('.boxes');
const strtBtn= document.querySelector('.start-btn');
const submitBtn= document.querySelector('.submit-btn');
const resetBtn= document.querySelector('.reset-btn');
const result= document.querySelector('.result');
let indexArray=[];

allboxes.forEach(el=>{
    el.disabled=true;
})


strtBtn.addEventListener('click',()=>{
allboxes.forEach(el=>{

    el.disabled=false;
})


    let randno;
    for(let i = 0;i<7;i++){
     randno = Math.floor(Math.random()*20);
     indexArray.push(randno);
    }

    for(let j =0;j<indexArray.length;j++){
        allboxes[indexArray[j]].style.backgroundColor="yellow";
    }
   


setTimeout(()=>{

    for(let j =0;j<indexArray.length;j++){
        allboxes[indexArray[j]].style.backgroundColor="black";
    }
   
}, -500 )

strtBtn.disabled=true;
})


let count=5;
let clicks=1;
let correctchecker=false;
allboxes.forEach(ele=>{
    ele.addEventListener('click',()=>{ 

    for(let i =0;i<20;i++)
    {
   if(ele == allboxes[indexArray[i]])
   {
    ele.style.backgroundColor="yellow";

    if(correctchecker==true){
        indexArray.length--;
    }
    correctchecker=true;
   }
}
if(correctchecker){
    if(clicks==indexArray.length){
        result.innerHTML=`You won the Game reset to play again!`;
        allboxes.forEach(curr=>{
            curr.disabled=true;
        })
    }
    else{ 
        clicks++; 
     }
  
}



else if(correctchecker==false){
    if(count<1){
        result.innerHTML=`You Lost the Game reset to play again!`;
        allboxes.forEach(el=>{
            el.disabled=true;
        })
    }
    else{
        if(ele.disabled==true){
            result.innerHTML=`No of Tries Left:${count}`;
        }
        else{ count--;
            result.innerHTML=`No of Tries Left:${count}`;}
   
    }
}
else{
    result.innerHTML=`No of Tries Left:${count}`;
}
correctchecker=false;
})

   
})

resetBtn.addEventListener('click',function (){
    window.location.reload();
})
