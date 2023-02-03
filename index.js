// Write a code to get difference between dates in days.

let diffDate = (dateA, dateB) => {
  let result = Math.floor(
    (new Date(dateB) - new Date(dateA)) / (1000 * 60 * 60 * 24) // convert to millisecond then convert to days
  );
  return result;
};

console.log(diffDate("2023/02/03", "2023/03/01"));

////////////////////////////////////////////////////////////////

// Write a code to convert days to years, months and days.
// Example : 400 days → 1 year, 1 month, 5 days
// 1 year : 365 days, 1 month : 30 days

let convertDays = (days) => {
  let year = Math.floor(days / 365); // 1 year
  let daysLeft = days % 365; // 35 days
  let month = Math.floor(daysLeft / 30); // 1 month
  daysLeft = daysLeft % 30; // 5 days

  return `${year} year, ${month} month, ${daysLeft} days`;
};

console.log(convertDays(400));

/////////////////////////////////////////////////////////////////

// Write a code to check whether the number is prime number or not

let checkPrime = (number) => {
  let factor = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
      factor++;
    }
  }

  if (factor == 2) {
    return `${number} is prime`;
  } else {
    return `${number} is not prime`;
  }
};

console.log(checkPrime(37));

///////////////////////////////////////////////////////////////////

// Write a code to find the sum of the numbers 1 to N.

/*
    1 => 1
    2 => 3
    3 => 6
    4 => 10
    5 => 15
*/

let sumNumber = (number) => {
  let x = 0;
  for (let i = 1; i <= number; i++) {
    x += i;
  }

  return x;
};

console.log(sumNumber(7));

////////////////////////////////////////////////////////////////////

// Write a code to find factorial of a number.

let numberB = 0;

let factNumber = (number) => {
  let x = 1;
  for (let i = 1; i <= number; i++) {
    x *= i;
  }

  return x;
};

console.log(factNumber(numberB));

/////////////////////////////////////////////////////////////////////

// Write a code to print the first N fibonacci numbers.

// N = 5
// 0, 1, 1, 2, 3

let fibo = (number) => {
  let numbA = 0; // 1 1
  let numbB = 1; // 1 2
  let sum; // 1 2
  let result = "";
  for (let i = 1; i <= number; i++) {
    result += numbA + " ";
    sum = numbA + numbB;
    numbA = numbB;
    numbB = sum;
  }
  return result;
};

console.log(fibo(5)); // 0, 1

/////////////////////////////////////////////////////////////////////

// Write a code to display the multiplication table of a given integer.

let displayMulti = (number) => {
  let result = "";
  for (let i = 1; i <= 10; i++) {
    result += `${number} x ${i} = ${number * i}\n`;
  }
  return result;
};

console.log(displayMulti(9));

/////////////////////////////////////////////////////////////////////

// Write a code to check whether a string is a palindrome or not.

// "katak" => "katak"
// "kasur rusak" => "kasur rusak"
// "Don't nod." => ".don t'noD"

let palindrome = (string) => {
  let arr = string.split("");
  let res = arr.reverse().join("");

  if (string == res) {
    return "is palindrome";
  } else {
    return "is not palindrome";
  }
};

console.log(palindrome("katak"));

///////////////////////////////////////////////////////////////////////

// Write a code to format number as currency (IDR)

let convertMoney = (number) => {
  return `Rp. ${number.toLocaleString("id")},00`;
};

console.log(convertMoney(1000));

///////////////////////////////////////////////////////////////////////

// Write a code to remove the first occurrence of a given “search string” from a string
// Example : string = “Hello world”, search string = “ell” → “Ho world”

let removeSearch = (string, remove) => {
  let result = string.replace(remove, ""); // regex for global changes /\o/g
  return result;
};

console.log(removeSearch("Hello world", "ell"));

////////////////////////////////////////////////////////////////////////

// Write a code to capitalize the first letter of each word in a string
// Example : “hello world” → “Hello World”

let capitalize = (string) => {
  let word = string.split(" "); // ["hello", "world"] => ["Hello", "World"]
  for (let i = 0; i < word.length; i++) {
    word[i] = word[i][0].toUpperCase() + word[i].slice(1); // "hello" = H + ello => "Hello"
  }
  let joinWord = word.join(" ");
  return joinWord;
};

console.log(capitalize("hello world"));

//////////////////////////////////////////////////////////////////////////

// Create a function that can create a triangle pattern according to the height we provide like the following:
/*
    01
    02 03
    04 05 06
    07 08 09 10
*/

let triangle = (height) => {
  let result = "";
  let number = 1;
  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= i; j++) {
      if (number < 10) {
        result += `0${number} `;
        number++;
      } else {
        result += `${number} `;
        number++;
      }
    }
    result += "\n";
  }
  return result;
};

console.log(triangle(4));

//////////////////////////////////////////////////////////////////////////

// Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.

let addArr = (arr, element) => {
  let findDuplicate = arr.includes(element);
  if (findDuplicate) {
    return "Element is already exist";
  } else {
    arr.push(element);
    return arr;
  }
};

console.log(addArr([1, 2, 3], 4));

///////////////////////////////////////////////////////////////////////////

// Write a function to remove all odd numbers in an array and return a new array that contains even numbers only

let removeOdd = (arr) => {
  let result = arr.filter((num) => {
    return num % 2 == 1;
  });

  return result;
};

console.log(removeOdd([1, 2, 3]));

///////////////////////////////////////////////////////////////////////////

// Create a function to calculate array of student data

let dataStudent = [
  {
    name: "Hasan",
    email: "hasan@mail.com",
    age: "2000-01-01",
    score: 85,
  },
  {
    name: "Selena",
    email: "selena@mail.com",
    age: "2001-01-20",
    score: 90,
  },
  {
    name: "Nindy",
    email: "nindy@mail.com",
    age: "2003-02-05",
    score: 92,
  },
];

let calculateData = (arr) => {
  let maxScore = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].score > maxScore.score) {
      maxScore = arr[i];
    }
  }

  let minScore = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].score < minScore.score) {
      minScore = arr[i];
    }
  }

  let totalScore = 0;
  for (let i = 0; i < arr.length; i++) {
    totalScore += arr[i].score;
  }
  let avgScore = totalScore / arr.length;

  let maxAge = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let age1 =
      (new Date() - new Date(maxAge.age)) / (1000 * 60 * 60 * 24 * 365);
    let age2 =
      (new Date() - new Date(arr[i].age)) / (1000 * 60 * 60 * 24 * 365);
    if (age2 > age1) {
      maxAge = arr[i];
    }
  }

  let minAge = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let age1 =
      (new Date() - new Date(maxAge.age)) / (1000 * 60 * 60 * 24 * 365);
    let age2 =
      (new Date() - new Date(arr[i].age)) / (1000 * 60 * 60 * 24 * 365);
    if (age2 < age1) {
      minAge = arr[i];
    }
  }

  let totalAge = 0;
  for (let i = 0; i < arr.length; i++) {
    totalAge +=
      (new Date() - new Date(arr[i].age)) / (1000 * 60 * 60 * 24 * 365);
  }
  let avgAge = totalAge / arr.length;

  let result = {
    Score: {
      Highest: {
        name: maxScore.name,
        score: maxScore.score,
      },
      Lowest: {
        name: minScore.name,
        score: minScore.score,
      },
      Average: avgScore,
    },
    Age: {
      Highest: {
        name: maxAge.name,
        age: Math.floor((new Date() - new Date(maxAge.age)) / (1000 * 60 * 60 * 24 * 365)),
      },
      Lowest: {
        name: minAge.name,
        age: Math.floor((new Date() - new Date(minAge.age)) / (1000 * 60 * 60 * 24 * 365)),
      },
      Average: Math.floor(avgAge),
    },
  };

  return result;
};

console.log(calculateData(dataStudent));
