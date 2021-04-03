var isSquare = function(n){
    let q = Math.sqrt(n);
        q = Math.round(q);
    if (q * q === n) {
      return true
    } else {
        return false; // fix me
    }
  
  }