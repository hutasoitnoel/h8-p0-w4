function ubahHuruf(kata) {
  var huruf = "abcdefghijklmnopqrstuvwxyz";
  var result = "";

  for (var i = 0 ; i < kata.length ; i++){
    for ( var j = huruf.length-1 ; 0 <= j ; j--){
      if ( kata[i] === huruf[j]){
        if (huruf[j+1] === undefined){
          result += "a"
        } else {
        result += huruf[j+1];
        }
      }
    }
  }

  return result;
}

// TEST CASES
console.log(ubahHuruf('wowzz')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javazscript')); // kbwbtdsjqu
console.log(ubahHuruf('kezren')); // lfsfo
console.log(ubahHuruf('semazngat')); // tfnbohbu