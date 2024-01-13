// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// at first i thought 
var isAnagram__wrong = function (s, t) {
  return (
    s.length === t.length &&
    new Set(t).size === new Set([...s, ...t]).size &&
    new Set(t).size === new Set(s).size
  );
};

// but this failed at `aacc` and `ccac` 

// second option i wthough was 
// anagram sorted is aaagmnr , and anargam is also aaagmnr , so sorted string is equal .... [a a a g m n r] , then i compare both sorted array , this is kinda slow
var isAnagram__slow = function (s, t) {
  if (s.length === t.length) {
      const sortedsrray1 =s.split("").sort()
      const sortedsrray2 =t.split("").sort()
    return sortedsrray1.every((char, index) => char === sortedsrray2[index]);
  } else {
    return false;
  }

  // youtube seen solution 🚀 , barely faster ...  (it uses hashmap ie object .. i did think of making an object with char count but i didnt know how to compare them ... jason.stringify or what ? )
// use an object like for SHIVS ==> {s:2 , h:1 , i:1 , v:1}
                      //  VISHS ===> (s:2 , h:1 , i:1 , v:1}
// now subtract one from another , count-- , remove 0 count keys , now {s:0 , h:0 , i:0 , v:0}  => {}
// empty object with 0 keys hence anagram 

  /**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const sLetters = {};
  for (let char of s) {
    sLetters[char] = (sLetters[char] || 0) + 1; // sLetters[s] = either 0+1 (if no previous value ) or prev value+1
  }
  for (let char of t) {
    if (!sLetters[char]) {
      return false; // if a letter of T is not in S
    }

    if (sLetters[char]) {
      sLetters[char]--; // reduce count of char if its common between s and t
    }
    if (sLetters[char] === 0) {
      delete sLetters[char]; // delete key if char count is now 0 ie equal nomber of char were there
    }
  }

  return Object.keys(sLetters).length === 0; //is there are no keys then its an anagram
};

console.log(isAnagram(`shiv`, `vish`));

// FASTEST LEETCODE SOLUTION
var isAnagram = function (s, t) {

    let array = new Array(256).fill(0); //[000000000000...256 timea]
    for (let i = 0; i < s.length; i++) {
        map[s.charCodeAt(i)]++;          // at index = ascii code of that char eg 83 is ascii for S , at 83 , ++ , ie initially its vakue was zero now its 1 and keeps ++ the amount of time char repeats
    }

    for (let i = 0; i < t.length; i++) {
        map[t.charCodeAt(i)]--;        // at same index ie asciicode , if -- the number , if the number eventually becomes 0 this means that char was for equal number of time in both strings
    }
    return map.every(value => value === 0); /// if entire arr = [000000....] this means all char were for same number of time
};

