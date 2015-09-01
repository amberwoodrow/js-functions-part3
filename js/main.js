var code = {

  // Problem 1
  getStudentName: function(obj) {
    return obj.name;
  },

  // Problem 2
  getTotalLetters: function(arr) {
    var sumOfStringsInArr = 0;
    for (var i = 0; i < arr.length; i++) {
      sumOfStringsInArr += arr[i].length;
    }
    return sumOfStringsInArr;
  },

  // Problem 3
  createObject: function(key, value) {
    var obj = {};
    obj[key] = value;
    return obj;
  },

  // Problem 4
  getNegativeIndex: function(arr, num) {
    b = arr.length + num;
    return arr[b];
  },

  // Problem 5
  removeCharacter: function(str, charToRemove) {
    var regex = new RegExp(charToRemove, 'g');
    var newStr = str.replace(regex, '');
    return newStr;
  }

  // Problem 6
  // Problem 7
  // Problem 8
  // Problem 9
  // Problem 10


};

module.exports = code;