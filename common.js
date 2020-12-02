"use strict";

//Common functionality of test_1 and test_2
exports.createExample = input => {
    let results = [];
    input.forEach(character => {
      character.example = `${character.first_name} ${character.last_name} says ${character.catchphrase}`
      results.push(character)
    })
  
    return results
  }