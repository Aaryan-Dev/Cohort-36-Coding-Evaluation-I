// Given a non-negative integerk, decide whether there're two integersaandbsuch thata^2+ b^2= k.

function sumOfSquare(k) {
       
    var P;
    var value = false;
    
for(j=1; j<=k; j++){
    for(i= j; i<=k; i++){
        var P = i**2 + j**2
 if(P===k){
     var value = true;
 }
    }
}
 if(value === true){
     console.log("true");
 }else{
     console.log("false");
 }
}