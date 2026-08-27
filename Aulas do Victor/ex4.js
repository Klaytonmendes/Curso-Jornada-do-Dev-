function findSmallestInt(arr) {
    let num = [1, 2, -3, 4, 5];
    let atual = num[0];
    
    for ( i = 0; i <= num.length ; i++) {
    
    if ( num[i] < atual)
        atual = num [i];
        console.log(atual);
    }
  return (console.log(atual));
}

findSmallestInt(1)