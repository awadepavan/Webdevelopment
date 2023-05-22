function main(){
    let jsonstr = `{"id":1,"name":"Sharma ji ka ladka","Department":"Sports"}`;

   console.log(jsonstr);

    let obj = JSON.parse(jsonstr);

    console.log(obj);
}

main();