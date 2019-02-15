function cariModus(arr) {
  var result = [];

  for (var i = 0 ; i < arr.length ; i++){
    var flag = false;
    for ( var j = 0 ; j < result.length ; j++){  
      if ( result[j][0] === arr[i]){
        result[j][1] += 1;
        flag = true;
      }
    }
    if ( flag === false){
      result.push([arr[i] , 1]);
    }
  }

  if (result[1] === undefined){
    return -1
  }

  var answer = 0;

  for (var i = 0 ; i < result.length ; i++){
    if (answer < result[i][1]){
      answer = result[i][1]
    }
  }

  for (var i = 0 ; i < result.length ; i++){
    if ( result[i][1] === answer && answer !== 1){
      return result[i][0]
    }
  }

  if ( answer = 1){
    return -1
  }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1