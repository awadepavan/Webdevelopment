function square(){
    let n1 =document.querySelector("#n1").value;

    let n2 =document.querySelector("#n2").value;

    n2=n1*n1;

    document.getElementById("n2").value=n2;
}