var code = require('../js/main.js');

describe("return name value from a given obj", function() {
  it("return name value from obj", function() {
    expect(code.getStudentName({name: 'Michael', age: 27 })).toEqual('Michael');
  });
});

describe("using a for loop to get each string length and add it together", function() {
  it("returns sum length of all strings in an array", function() {
    var arr = ['javascript', 'is', 'not', 'python'];
    expect(code.getTotalLetters(arr)).toEqual(21);
  });
});

describe("return name value from a given obj", function() {
  it("return name value from obj", function() {
    expect(code.createObject('city', 'Boulder')).toEqual({city: 'Boulder'});
  });
});

describe("takes an array and a negative number as arguments", function() {
  it("returns the value from the array at the given negative index", function() {
    expect(code.getNegativeIndex(['a', 'b', 'c', 'd', 'e'], -3)).toEqual('c');
    expect(code.getNegativeIndex(['a', 'b', 'c', 'd', 'e'], -2)).toEqual('d');
  });
});

describe("takes a string and a single character (string or integer)", function() {
  it("returns the string with the characters removed", function() {
    expect(code.removeCharacter('javascript', 'a')).toEqual('jvscript');
    expect(code.removeCharacter('javascript', '1')).toEqual('javascript');
    expect(code.removeCharacter('12345', '2')).toEqual('1345');
  });
});

describe("takes an object", function() {
  it("returns each key-value pair in the following format 'key'", function() {
    var ages = {john: 10, jerry: 11, jenny: 12 };
    expect(code.outputObject(ages)).toEqual('john is 10, jerry is 11, jenny is 12');
  });
});

describe("takes a string", function() {
  it("returns array of all the vowels in the string. No duplicates vowels.", function() {
    expect(code.getVowels('javascripting')).toEqual(['a', 'i']);
  });
});

describe("takes an array as an argument", function() {
  it("return true if every adjacent pair of items in the array is the same, otherwise return false.", function() {
    expect(code.captureTwins(['m', 'm', 'n', 'n', 's', 's'])).toEqual(true);
    expect(code.captureTwins(['m', 'm', 'm', 'n', 's', 's'])).toEqual(false);
    expect(code.captureTwins(['m', 'm', 'm', 'n', 's', 's', 'i'])).toEqual(false);
  });
});

describe("takes an array of boolean values", function() {
  it("returns true if any value is true", function() {
    expect(code.testBooleanLogic([false, true, false, false])).toEqual(true);
    expect(code.testBooleanLogic([false, false, false])).toEqual(false);
  });
});

describe("takes an array of strings", function() {
  it("returns a new array consisting of the unique values.", function() {
    expect(code.getUniqueValues(['m', 'n', 'm', 'r', 'r', 's'])).toEqual(['m', 'n', 'r', 's']);
    expect(code.getUniqueValues(['michael', 'ben', 'kerry', 'ben'])).toEqual(['michael', 'ben', 'kerry']);
  });
});