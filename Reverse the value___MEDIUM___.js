// You are given a number stored in a variable with the namenum

// You have to reverse the number

// For example, the number stored in the variablenum = 971, then the required output will be179

// Note : The number does not contain any leading zeroes

function reverseTheValue(num) {
    
    str = String(num);
     box = "";
    for(i=str.length-1; i>=0; i--){
        box = box + str[i];
    
    }
    console.log(box);
}