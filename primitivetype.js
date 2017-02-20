/*Create a function called "value" that would receive one argument and would print in the console the underlying value of that argument, whether it be a primitive type or a function. 

Your function must work with all the tests provided below and return the same values. 

------------------

// define this function
var value = function () {};


// tests for value() -- do not modify these
var scalar = 'foo';
var fn = function() { return 'bar'; };
var fnTwice = function() {
  return fn;
};
var fnThrice = function() {
  return fnTwice;
};

var whoa = function() {
  return function() {
    return function() {
      return function() {
        return function() {
          return function() {
            return function() {
              return function() {
                return function() {
                  return 'hi';
                };
              };
            };
          };
        };
      };
    };
  };
};

// expected values for all these assessments 
value(scalar);   // should be      'foo'
value(fn);       // should be      'bar'
value(fnTwice);  // should also be 'bar'
value(fnThrice); // should also be 'bar'
value(whoa);     // should be      'hi'
*/



var scalar = 'foo';
var fn = function() { return 'bar'; };
var fnTwice = function() {
  return fn;
};
var fnThrice = function() {
  return fnTwice;
};

var whoa = function() {
  return function() {
    return function() {
      return function() {
        return function() {
          return function() {
            return function() {
              return function() {
                return function() {
                  return 'hi';
                };
              };
            };
          };
        };
      };
    };
  };
};

var value = function(input){
    
    
    if(typeof input === 'function')
    {
        
        return value(input()); //firing up the function by placing ()
                         // means function's return value will be passed 
                         // to the value function again and keep going on
                         //until it gets the type other than function
        
    }
    else
    {
    console.log(input);
    
    }
}


// another way of doing it by taking variables

var value = function (input) {
  var nestedInput;
  if(typeof input === "function") {
    nestedInput = input();
    return value(nestedInput);
  } else {
    console.log(input);
  }
};