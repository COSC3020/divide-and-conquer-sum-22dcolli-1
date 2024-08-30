//updated off of old repository divide-and-conquer-sum-22dcolli, specifically tried to limit non repeating variables.
//i.e range = (high-low) because I noticed it was used more than once
//as before credit to replit AI IDE and a reminder example of mergesort from GeeksforGeeks found in the original and reinserted below.
//replit AI IDE helped specifically on lines 39 and 40 with the proper use of math.floor and on line 43 because I mixed up my variables, technically then as well I modeled line 44 off of 43 in turn
//I also need to mention while working through this I renamed the mergesort starting example to devideAndConquerSum so I could test it(I didn't have any reason to, but I hadn't thought about it)
/*
function devideAndConquerSum(a){
    // if array is empty    
    if(a.length==0)
        return 0;
    // if array has only 1 element
    if(a.length==1)
        return a[0];
    // find mid of array
    var mid = Math.floor(a.length/2);
    // reccursively compute sum
    return devideAndConquerSum(a.slice(0,mid))+devideAndConquerSum(a.slice(mid));
}
*/
function divideAndConquerSum(a) 
{
    return dacSumHelper(a,0,a.length - 1);
}

function dacSumHelper(a,low,high)
{
    if (low > high)
    {
        return 0;
    }

    if (low == high)
    {
        return a[low];
    }

    var range = (high - low);

    var mid1 = Math.floor(low + range / 3);
    var mid2 = Math.floor(low + 2 * range / 3);

    var sum1 = dacSumHelper(a, low, mid1);
    var sum2 = dacSumHelper(a, mid1+1, mid2);
    var sum3 = dacSumHelper(a, mid2+1, high);

    return sum1+sum2+sum3;


}

//let a = [1,5,-1,4];
//let b = [1,2,-3,3,4,-1];
//console.log(divideAndConquerSum(a));
//console.log(divideAndConquerSum(b));
