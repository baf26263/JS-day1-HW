//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(string, names){
    for(let i = 0; i < names.length; i++){
        if(string.includes(names[i])){
            console.log(`Matched ${dog_names[i]}`)
        }else{
            console.log('No matches')
        }
    }
    return 'Done'
}
console.log(findWords(dog_string, dog_names))

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i = 0; i < arr.length; i++){
        if(i % 2 == 0){
            arr.splice(i, 1, "even index")
        }
    }
    return arr 
}
console.log(replaceEvens(["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"]))


//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

//Codewars Problem 1 => Building Blocks 7 kyu

class Block {
    constructor(array) {
      this.width = array[0];
      this.length = array[1];
      this.height = array[2];
    }
  
    getWidth() {
      return this.width;
    }
  
    getLength() {
      return this.length;
    }
  
    getHeight() {
      return this.height;
    }
  
    getVolume() {
      return this.length * this.width * this.height;
    }
  
    getSurfaceArea() {
      return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
  }
  

// Codewars Problem 2 => Cat years, Dog Years 8 kyu

function humanYearsCatYearsDogYears(humanYears) {
    let catYears = 0;
    let dogYears = 0;
  
    if (humanYears === 1) {
      catYears = 15;
      dogYears = 15;
    } else if (humanYears === 2) {
      catYears = 24;
      dogYears = 24;
    } else if (humanYears >= 3) {
      catYears = 4 * (humanYears - 2) + 24;
      dogYears = 5 * (humanYears - 2) + 24;
    }
  
    return [humanYears, catYears, dogYears];
  }

  
// Codewars Problem 3 => Counting Sheep... 8 kyu

function countSheeps(arrayOfSheeps) {
    let amount = 0;
    for (let i = 0; i < arrayOfSheeps.length; i++) {
      if (arrayOfSheeps[i] === true) {
        amount += 1;
      }
    }
    return amount;
  }

// Codewars Problem 4 => Even or Odd

function evenOrOdd(number) {
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  