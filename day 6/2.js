function addNewMessage(p1) {
    let parentTag = document.querySelector("#divid1");
    let existingValue = parentTag.innerHTML;
  
    let msgTag = document.querySelector("#messageId1");
    let message = msgTag.value;
  
    let position = p1 ? "end" : "start";
    let newValue = `<div class="message-style" style="display: flex; justify-content: ${position}"> ${message}</div>`;
    parentTag.innerHTML = newValue + existingValue;
  
    // clear the input
    msgTag.value = "";
  }