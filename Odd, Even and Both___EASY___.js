// You are given two numbers, stored in the variable with the following names

// one, two

// If both the values are even, printEven

// Else if both the values are odd, printOdd

// else printEven-Odd

function oddEvenBoth(one, two) {
    
    if(one%2===0 && two%2===0){
        console.log("Even");
    }
    else if(one%2!==0 && two%2!==0){
         console.log("Odd");
    }
    else{
        console.log("Even-Odd");
    }
}
  