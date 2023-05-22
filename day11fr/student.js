window.addEventListener("load", () => {
     console.log("CALLED WHILE LOAD");
     GetStudent();
    });
async function GetStudent() {
     let url = `http://localhost:4000/`;
 let res = await fetch(url);
    let data = await res.json();
    console.log(data);
 // DOM OPR
 for (let item of data) {
 let parent = document.querySelector("#parent");
 let existingElement = parent.innerHTML;
 let newElement = `<div class="bg-secondary-subtle p-2 rounded fs-6 mb-1">${item.message}</div>`;
parent.innerHTML = newElement + existingElement;
 }
}


 function deletestudent(){

}
function Findstudent(){
    
}

async function addstudent() {
      let url = "http://localhost:4000/add_data";
    
     
    
      let rollNumberTag = document.querySelector("#roll");
      let nameTag = document.querySelector("#name");
      let divisionTag = document.querySelector("#div");
      let branchTag = document.querySelector("#branch");
    
     
    
      let data = {
        rollnumber: rollNumberTag.value,
        name: nameTag.value,
        division: divisionTag.value,
        branch: branchTag.value,
      };
    
     
    
      await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
    
     
    
      rollNumberTag.value = "";
      nameTag.value = "";
      divisionTag.value = "";
      branchTag.value = "";
      alert("student Added");
    }

    async function updatestudent() {
          let url = "http://localhost:4000/put";
        
         
        
          let rollNumberTag = document.querySelector("#roll");
          let nameTag = document.querySelector("#name");
          let divisionTag = document.querySelector("#div");
          let branchTag = document.querySelector("#branch");
        
         
        
          let data = {
            rollnumber: rollNumberTag.value,
            name: nameTag.value,
            division: divisionTag.value,
            branch: branchTag.value,
          };
        
         
        
          await fetch(url, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
            },
          });
        
         
        
          rollNumberTag.value = "";
          nameTag.value = "";
          divisionTag.value = "";
          branchTag.value = "";
          alert("student updated");
        }

