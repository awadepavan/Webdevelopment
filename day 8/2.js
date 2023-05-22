function pattern(p1) {
    
    for (let i = 1; i <= p1; i++) {
        let pattern = "";
      for (let j = 1; j <= p1; j++) {
        if (j <= i) {
          pattern += "*";
        } else {
          pattern += " ";
        }
      }
      console.log(pattern);
    }
  }
  
  pattern(5);

  console.log("Descending Order:-");

  function patterns(p1) {
    
    for (let i = 1; i <= p1; i++) {
        let patterns= "";
      for (let j = 1; j <= p1; j++) {
        if (j <= p1+1-i) {
          patterns+= "*";
        } else {
          patterns+= " ";
        }
      }
      console.log(patterns);
    }
  }

patterns(5);




