//Chris Pipitone Assignment 2

//array used for testing in each assigned function
const arr = [1, 2 ,3, 4];

//, 5, 6, 7, 8, 9, 10
// === forEach ===
function myEach(myCallBack, arr)
{
    //Error Handling
    if (typeof myCallBack !== 'function')
        throw new TypeError(myCallBack + ' is not a function');
    if(!Array.isArray(arr))
        throw new TypeError( arr + 'is not an array');

    //function logic
    for( let i = 0; i < arr.length; i++)
    {
        myCallBack(arr[i]);
    }
} 

let myCallBack1 = element => console.log(element); //driver function
console.log( "======== myEach ========");
myEach(myCallBack1, arr);


// === Map ===
function myMap(myCallBack, arr)
{
    //Error Handling
    if (typeof myCallBack !== 'function')
        throw new TypeError(myCallBack + ' is not a function');
    if(!Array.isArray(arr))
        throw new TypeError( arr + 'is not an array');

    let newArr = new Array();

    for( let i = 0; i < arr.length; i++)
    {
        //Map creates a new arr with its elements manipulated by the callback function
        newArr.push(myCallBack(arr[i]));
    }

    return newArr;
}

let myCallBack2 = element => element + 5 ; //driver function
console.log( "======== myMap ========");
console.log( myMap(myCallBack2, arr) );


// === Filter ===
function myFilter(myCallBack, arr)
{
    //Error Handling
    if (typeof myCallBack !== 'function')
        throw new TypeError(myCallBack + ' is not a function');
    if(!Array.isArray(arr))
        throw new TypeError( arr + 'is not an array');

    let newArr = new Array();

    for( let i = 0; i < arr.length; i++)
    {
        //filter creates a new arr based on the comparison in the callback function
        if(myCallBack(arr[i])) 
            newArr.push(arr[i]); 
    }

    return newArr;
}

let myCallBack3 = element => element > 3; //driver function
console.log( "======== myFilter ========");
console.log( myFilter(myCallBack3, arr) );


// === Some aka Any === 
function mySome(myCallBack, arr)
{
    //Error Handling
    if (typeof myCallBack !== 'function')
        throw new TypeError(myCallBack + ' is not a function');
    if(!Array.isArray(arr))
        throw new TypeError( arr + 'is not an array');

    for( let i = 0; i < arr.length; i++)
    {
        //Some/any returns a boolean based on whether any element results from the callback function
        if(myCallBack(arr[i])) 
            return true;
    }
    return false;
}
let myCallBack4 = element => element % 2 === 0; //driver function
console.log( "======== mySome ========");
console.log( mySome(myCallBack4, arr) );


// === Every ===
function myEvery(myCallBack, arr) 
{
     //Error Handling
     if (typeof myCallBack !== 'function')
        throw new TypeError(myCallBack + ' is not a function');
    if(!Array.isArray(arr))
        throw new TypeError( arr + 'is not an array');

    let result = false;

    for( let i = 0; i < arr.length; i++)
    {  
         //Every returns a boolean based on if every element passed the test provided by the callback funciton
        if(myCallBack(arr[i])) 
            result = true;
        else
            return false;
    }
    return result;
}
let myCallBack5 = element => element < 5 ; //driver function
console.log( "======== myEvery ========");
console.log( myEvery(myCallBack5, arr) );


// === Reduce ===
function myReduce(myCallBack, arr, initial)
{
     //Error Handling
     if (typeof myCallBack !== 'function')
        throw new TypeError(myCallBack + ' is not a function');
    if(!Array.isArray(arr))
        throw new TypeError( arr + 'is not an array');

    //check for provided initial value
    let i = 0;
    if(initial === undefined || initial === null) 
    {
        initial = arr[0];
        i = 1;
    }
    //else initial is provided , so we keep i = 0, it addresses the first element
    //so it starts with initial and element [0]
    
        
    //initializer
    let curr = myCallBack(initial, arr[i]);

    //a first call was done already need to do next index whether [0] or [1] 
    for( i += 1 ; i < arr.length; i++)
    {  
         //Reduce returns a return value from the calculation on the preceding element. 
         //The final result of running the reducer across all elements of the array is a single value.
        curr =  myCallBack(curr, arr[i]);
    }
    return curr;
}

let myCallBack6 = (previousValue, currentValue) => previousValue + currentValue;
console.log( "======== myReduce ========");
console.log( myReduce(myCallBack6, arr, 5) );

console.log( "======== myReduce with out initializer ========");
console.log( myReduce(myCallBack6, arr) );


// === Includes ===
function myIncludes (arr, target)
{
    if(!Array.isArray(arr))
        throw new TypeError( arr + 'is not an array');

    //Includes returns true if the target is an element of the array else returns false
    for( let i = 0; i < arr.length; i++)
    {  
        if(arr[i] === target)
            return true;
    }
    return false;
}

console.log( "======== myIncludes ========");
console.log( myIncludes(arr, 10000) );

// === IndexOf ===
function myIndexOf(arr, target)
{
    if(!Array.isArray(arr))
        throw new TypeError( arr + 'is not an array');

    for( let i = 0; i < arr.length; i++)
    {  
        //returns the index of target if it is an element of the array returns -1 if not
        if(arr[i] === target)
            return i;
    }
    return (-1);
}
console.log( "======== myIndexOf ========");
console.log( myIndexOf(arr, 300) );

// === Push ===
function myPush(arr, element)
{
    if(!Array.isArray(arr))
        throw new TypeError( arr + 'is not an array');

    //puts element at the end of the array and returns the arrays new length
    i = arr.length;
    arr[i] = element;

    return arr.length;
}
console.log( "======== myPush ========");
console.log("arr length:: " + arr.length);
console.log(arr);
console.log( "arr length:: " + myPush(arr, 300) );
console.log(arr);

// === LastIndexOf ===
// === ObjectKeys ===
// === ObjectValues ===