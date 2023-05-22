function changeImageView(p1) {
    let imgTag = document.querySelector("#imgid");
  
    if (p1 == 1) {
      imgTag.setAttribute("src", "12.jpg");
    } else if (p1 == 2) {
      imgTag.setAttribute("src", "13.jpg");
    } else if (p1 == 4) {
      imgTag.setAttribute("src", "11.jpg");
    }
  }

  function like() {
    let h1CounterTag = document.querySelector("#likecounter");
    let existingValue = h1CounterTag.innerHTML;
    let newValue = parseInt(existingValue) + 1;
    h1CounterTag.innerHTML = newValue;
  }
  
  function dislike() {
    let h1CounterTag = document.querySelector("#dislikecounter");
    let existingValue = h1CounterTag.innerHTML;
    let newValue = parseInt(existingValue) + 1;
    h1CounterTag.innerHTML = newValue;
  }