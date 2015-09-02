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
  },

  // Problem 6
  outputObject: function(obj) {
    var ageStr = "";
    for (var key in obj) {
      ageStr = ageStr + key + " is " + obj[key] + ", ";
    }
    return ageStr.substring(0, ageStr.length - 2);
  },

  // Problem 7
  getVowels: function(str) {
    return str.match(/([eioua])(?![\s\S]*\1)/gi,"");
  },

  // Problem 8
  captureTwins: function(arr) {
    var tracker = "";
    var count = 0;

    if (arr.length % 2 !== 0) {
      return false;
    }
    for (var i=0; i<arr.length; i++) {
      if (count === 0) {
        tracker = arr[i];
        count ++;
      }
      else {
        if (arr[i] !== tracker) {
          return false;
        }
        tracker = "";
        count = 0;
      }
    }
    return true;
  },

  // Problem 9
  testBooleanLogic: function(arr) {
    if (arr.indexOf(true) === 1) {
      return true;
    }
    return false;
  },

  // Problem 10
  getUniqueValues: function(arr) {
    var a = {},
    uniqueArr = []; 
    for(var i=0; i < arr.length; i++) {
      // !a[arr[i]] if arr[i] does not exist in a, add it!
      !a[arr[i]] && uniqueArr.push(arr[i]) && (a[arr[i]] = "pizza");
    }
    return uniqueArr;
  }

};


module.exports = code;