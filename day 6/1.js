function Multi(){
   let n1=document.querySelector("#n1").value;
   let n2=document.querySelector("#n2").value;
   let n4=document.querySelector("#n4").value;

    if(n1>0 && n2>0){
        
    n4=parseInt(n1*n2);
    console.log(n4);
    }

    document.getElementById("n4").value=n4;
}

function Divi(){
    let n1=document.querySelector("#n1").value;
    let n2=document.querySelector("#n2").value;
    let l4=document.querySelector("#n4").value;
 
     if(n1>0 && n2>0){
         
     l4=parseInt(n1/n2);
     console.log(l4);
     }
 
     document.getElementById("n4").value=l4;
 }


 function Sub(){
    let n1=document.querySelector("#n1").value;
    let n2=document.querySelector("#n2").value;
    let k4=document.querySelector("#n4").value;
 
     if(n1>0 && n2>0){
         
     k4=parseInt(n1 - n2);
     console.log(k4);
     }
 
     document.getElementById("n4").value=k4;
 }


 function add(){
    let n1=document.querySelector("#n1").value;
    let n2=document.querySelector("#n2").value;
    let y4=document.querySelector("#n4").value;
 
     if(n1>0 && n2>0){
         
     y4=parseInt(n1 )+ parseInt(n2);
     console.log(y4);
     }
 
     document.getElementById("n4").value=y4;
 }


 