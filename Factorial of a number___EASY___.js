// You are given a positive number, stored in a variable with the namenum
// You need to find the factorial of the number.
// In simple words, the factorial of a number is the product of all positive integers less than or equal to a given positive integer.

// For example, you are given a numbernum = 5.

// According to the definition, the factorial ofnumwill be5*4*3*2*1 = 120, which is the required answer.

// Note: Factorial of 0 is 1.

function factorialOfNumber(num){
	fact=1
	for(i=num;i>=1; i--){
	    
	    fact = fact*i 
	}
	console.log(fact);
}