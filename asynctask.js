// 2. Build a script that processes a list of data items sequentially, applying a function to each item with one second delay per item. Hint: use `async.mapSeries`

 

// Given an array of items, your script should process the data sequentially, for example; given `const numbers = [1,3,5,6,3], your script should process each number and multiply it by 2 after 1 second delay for each item in the array.

 

// This project will help you understand how to use the "async" library for control flow when dealing with tasks that need to be executed one after another.

import async from "async"

const numbers = [1,3,5,6,3]

async.mapSeries(numbers, function(number, callback){
    setTimeout(() => {
        console.log(`New Item multiplied ${number} by 2`);
        return callback(null, number * 2);
    }, 1000)
}, function(err, results) {
    if (err) {
        console.log("Error: ", err);
    }
    console.log('results : ' + results);  // results : name1,name2,name3  
});

