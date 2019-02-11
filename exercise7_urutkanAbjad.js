function urutkanAbjad(str) {
  var temp = "";
  var strArray = str.split("");

  for ( var i = 0 ; i < strArray.length ; i++){
    for ( var j = 0 ; j < (strArray.length - i - 1); j++){
      // console.log(str[j] > str[j+1], str[j], str[j+1])
      if (strArray[j] > strArray[j+1]){
        temp = strArray[j+1];
        strArray[j+1] = strArray[j];
        strArray[j] = temp;
      }
    }
  }
  return strArray.join("");
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'