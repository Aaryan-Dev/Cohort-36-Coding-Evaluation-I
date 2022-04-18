// You are given two integers, stored in the variable with the following names

// L, W
// Also, you are given another two integers, stored in the variable with the following names

// length & width

// If the value stored in length is greater than the value stored in L and the value stored in width, is greater than the value stored in W, printUpload

// Else If the value stored in length is less than the value stored in L, printIncrease Length

// Else if the value stored in width, is less than the value stored in W, printIncrease Width

function profilePic(L, W, length, width) {
  
    if(L<length && W<width ){
        console.log("Upload");
    }
    else if(L>length){
        console.log("Increase Length");
    }
    else if(W>width){
        console.log("Increase Width");
    }
  }