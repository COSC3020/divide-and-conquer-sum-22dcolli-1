//updated off of old repository divide-and-conquer-sum-22dcolli, specifically tried to limit non repeating variables.
//i.e range = (high-low) because I noticed it was used more than once
//as before credit to replit AI IDE and reminder of mergesort from GeeksforGeeks found in the original.
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

//let a = [1,2,-3,3,4,-1];
//console.log(divideAndConquerSum(a));
