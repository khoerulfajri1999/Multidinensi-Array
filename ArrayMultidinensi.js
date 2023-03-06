function multidimensi_array() {
  var arr = [];
  var abjad="abcdefghi"
  var counter=0;
  for (var i = 0; i < 3; i++) {
    // row
    var row = [];
    for (var j = 0; j < 3; j++) {
      // col
          row.push(abjad[counter]);
          counter++;
      
      // ['x']
      // ['x','x']
    }

    arr.push(row);
  }

  return arr;
}



console.log(multidimensi_array());
