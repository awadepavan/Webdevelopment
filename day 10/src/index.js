function main(){
    let obj= {id:1,name:"prashant",email:"prashant12@gmail.com",phone:"9876524513"};

    //Adding new element
    obj.course="pgdac";
    obj.Batch="A";

    console.log(obj);


    //Deleting element 
    delete obj.phone;
    delete obj.Batch;

    console.log(obj);


    //obj literal to json
    let str2 = JSON.stringify(obj);
      console.log(str2);
}

main();