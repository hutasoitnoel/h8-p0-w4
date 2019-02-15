function digitPerkalianMinimum(angka) {
  var result = Infinity;

  if ( angka % 2 !== 0 && angka % 3 !== 0){
    result = String(angka).length + 1;
    return result;
  }

  for ( var i = 1 ; i < angka ; i++){
    if ( angka % i === 0 && String(i).length + String(angka/i).length < result){
      result = String(i).length + String(angka/i).length;
    }
  }

  return result;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2