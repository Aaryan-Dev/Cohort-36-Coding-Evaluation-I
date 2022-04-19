

// You are given three numbers stored in the variables with the following names,a,b,c

// You have to find the second largest number out ofa,b,c

// For example, consider the value stored ina = 3, b = 7, c = 5, then the required output will bec = 5

function secondMaximum(a, b, c) {
  
    if(a>b && b>c || c>b && b>a  ){
        console.log(b);
    }
    else if(b>a && a>c|| c>a && a>b ){
         console.log(a);
    }
    else if(a>c && c>b||  b>c && c>a ){
         console.log(c);
    }
   }
   