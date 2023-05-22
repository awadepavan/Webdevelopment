function largest(){
    let n1 =document.querySelector("#n1").value;
    let n2 =document.querySelector("#n2").value;
    let n3 =document.querySelector("#n3").value;
    let n4 =document.querySelector("#n4").value; 
 
    if (n1>n2 && n1>n3 )
    {
     n4=n1;
     console.log(n4); 
    }
    else if( n2>n1 && n2>n3)
    {
     n4=n2;
    console.log(n4); 
    }
    else
    {
     n4=n3;
    console.log(n4); 
    }
    document.getElementById("n4").value=n4;
 }