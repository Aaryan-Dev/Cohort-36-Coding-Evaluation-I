// You are given a numberNstored in a variable with the nameN

// You have to find the sum of firstNnatural numbers in the range of1 to N, including the value stored inNitself, but each number should be added five times.

// For example, consider the value stored inN = 2, therefore, the sum of firstNnatural numbers issum = 1 + 2, but each number has to be added five times.

// Therefore,sum = 1 + 1 + 1 + 1 + 1 + 2 + 2 + 2 +2 + 2= 15, which is the required answer

function sumTillN(N){
	
	sum =0
	for(i=1; i<=N; i++){
	    sum = sum +i
	    
	}
	console.log(sum*5)
}