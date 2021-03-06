var api = {};

/**
  PART 1: Implement fanOut.

  fanOut - return a new collection of results after applying the
           input function to each item in the input collection.

  args: input - input collection
        fn - function to apply to each item in the collection

  EX:  - fanOut([1, 2, 3], double) -->  [1, 4, 9];

 function double(n) { return n * n; }

  Restrictions:
    - Do not use make any function calls (other than fn and push)
    - You may not use any external libraries

*/
api.fanOut = (input, fn) => {
    let newArray = [];

    // ensure input is an array
    if(input instanceof Array) {
        input.forEach((value) => {
            newArray.push(fn(value));
        });
    }

    return newArray;
};

/**
 PART 2: Implement funnel.

 funnel - return an result after applying an accumulation function to
          each item in the collection. Funneling down to a single result.

 args: input - input collection
       fn - function to apply to each item in the collection with
            args accumulation value and current value
       startValue - start the accumulation with this value

 EX:  - funnel([1, 2, 3], add, 0) -->  6;
      - funnel([1, 2], add, 1) --> 4

      function add(total, n) { return total + n; }

 Restrictions:
   - Do not use make any function calls (other than fn and push)
   - You may not use any external libraries

 */
api.funnel = (input, fn, startValue) => {
    let newValue = startValue;

    // ensure input is an array
    if(input instanceof Array) {
        input.forEach((value) => {
            newValue = fn(newValue, value);
        });
    }

    return newValue;
};

/**
 PART 3: Implement distill.

 distill - return a new collection of results after applying the
 predicate function to each item. Only include the item in the result
 if the predicate returns true.

 args: input - input collection
 fn - predicate function to apply to each item in the collection

 EX:  - distill([1, 2, 3], isEven) -->  [2];
      - distill([1, 2, 3], isOdd) -->  [1, 3];
      - distill([1, 2, 3], isNegative) -->  [];

 Restrictions:
 - Do not use make any function calls (other than fn and push)
 - You may not use any external libraries

 */
api.distill = (input, fn) => {
    let newArray = [];

    // ensure input is an array
    if(input instanceof Array) {
        input.forEach((value) => {
            if(fn(value)) {
                newArray.push(value);
            }
        });
    }

    return newArray;
};

/**
 PART 4: Implement numberOfChars.
 numberOfChars - return the number of characters in the input array of strings

 args: input - input collection of strings (words)

 EX:  - numberOfChars(['the']) -->  3;
 - numberOfChars(['the', 'end']) -->  6;

 Restrictions:
 - You MAY use fanOut, funnel, and distill, and the length property
 - You may not use make any other function calls
 - You may not use any external libraries

 */
api.numberOfChars = (input) => {
    let numberOfMatches = 0;

    // ensure input is an array
    if(input instanceof Array) {
        input.forEach((value) => {
            // make input item a string before getting length of string
            numberOfMatches += String(value).length;
        });
    }

    return numberOfMatches;
};

/**
 PART 5: Implement numberOfCertainChars.

 numberOfCertainChars - return the number of c characters in the input array of strings

 args: input - input collection of strings (words)
       c - the certain character to count

 EX:  - numberOfCertainChars(['the'], 'e') -->  1;
      - numberOfCertainChars(['the', 'end'], 'e') -->  2;

 Restrictions:
 - You MAY use fanOut, funnel, and distill, and the length property
 - You may not use make any other function calls
 - You may not use any external libraries

 */
api.numberOfCertainChars = (input, c) => {
    let numberOfMatches = 0;

    // ensure input is an array
    if(input instanceof Array) {
        input.forEach((value) => {
            // make input item a string before finding matches
            numberOfMatches += String(value).split(c).length - 1;
        });
    }

    return numberOfMatches;
};

module.exports = api;
