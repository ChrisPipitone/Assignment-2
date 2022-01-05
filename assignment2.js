//Chris Pipitone Assignment 2

//array used for testing in each assigned function
const arr = [1, 2 ,3, 4, 5];


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