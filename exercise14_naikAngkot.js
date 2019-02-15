function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  if (arrPenumpang.length === 0){
    return "[]"
  }
  var arr = [];
  var obj = {};
  var dari = 0;
  var ke = 0;

  for (var i = 0 ; i < arrPenumpang.length ; i++){
    obj = {};
    obj.penumpang = arrPenumpang[i][0];
    obj.naikDari = arrPenumpang[i][1];
    obj.tujuan = arrPenumpang[i][2];    
    for (var j = 0 ; j < rute.length ; j++){
      if (arrPenumpang[i][1] === rute[j]){
        dari = j
      }
      if (arrPenumpang[i][2] === rute[j]){
        ke = j
      }
    }
    obj.bayar = Math.abs(dari-ke) * 2000
    arr.push(obj);
  }
  return arr
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]