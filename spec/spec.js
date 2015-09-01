var code = require('../js/main.js');

describe("return name value from a given obj", function() {
  it("return name value from obj", function() {
    expect(code.getStudentName({name: 'Michael', age: 27 })).toEqual('Michael');
  });
});

describe("using a for loop to get each string length and add it together", function() {
  it("returns sum length of all strings in an array", function() {
    var arr = ['javascript', 'is', 'not', 'python'];
    expect(code.getTotalLetters(arr).toEqual(21));
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

// describe("", function() {
//   it("", function() {
//     expect(code.).toEqual();
//   });
// });

// describe("", function() {
//   it("", function() {
//     expect(code.).toEqual();
//   });
// });

// describe("", function() {
//   it("", function() {
//     expect(code.).toEqual();
//   });
// });

// describe("", function() {
//   it("", function() {
//     expect(code.).toEqual();
//   });
// });

// describe("", function() {
//   it("", function() {
//     expect(code.).toEqual();
//   });
// });