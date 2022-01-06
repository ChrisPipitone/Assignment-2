//Chris Pipitone Assignment 2

//array used for testing in each assigned function
const arr = [1, 2 ,3, 4, 5, 6, 7, 8, 9, 10];


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
console.log( "======== mySome ========");
console.log( myEvery(myCallBack5, arr) );


// === Reduce ===
// === Includes ===
// === IndexOf ===
// === Push ===
// === LastIndexOf ===
// === ObjectKeys ===
// === ObjectValues ===