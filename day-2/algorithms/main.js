// Exercise 1:
const printStars = (num) => {
  const star = "*"
  let stars = ""
  let i = 0
  while (i < num) {
    stars += star
    console.log(stars)
    i++
  }
}

printStars(5)

// Exercise 2:
const printBackwardsStars = (num) => {
  const star = "*"
  let stars = ""
  let i = 0
  while (i < num) {
    stars += star
    i++
  }

  while (stars.length > 0) {
    console.log(stars)
    stars = stars.slice(1)
  }
}

printBackwardsStars(5)

// Exercise 3:
const printStarSeries = (num, count) => {
  for (i = 0; i < count; i++) {
    printStars(num)
    printBackwardsStars(num)
  }
}

printStarSeries(5, 3)

// Exercise 4:
const reverse = function (str) {
  let reversed = str.split("").reverse().join("")
  return reversed
}

console.log(reverse("dog"))
console.log(reverse("race car"))

// Exercise 5:
const isPalindrom = (str) => {
  str = str.toLowerCase().replace(" ", "")
  const reversed = reverse(str)
  return str === reversed ? true : false
}

console.log(isPalindrom("Taco Cat"))
console.log(isPalindrom("moo moo"))

// Exercise 6:
const encrypt = (str) => {
  const abc = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "z",
    "y",
    "z",
  ]

  const splittedStr = str.split("")
  let encrypted = ""
  for (char of splittedStr) {
    let index = abc.indexOf(char)
    let targetIndex = index < abc.length + 1 ? index + 1 : 0
    encrypted += abc[targetIndex]
  }
  console.log(encrypted)
}

encrypt("cat")

// Exercise 7:
const decrypt = (str) => {
  const abc = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "z",
    "y",
    "z",
  ]

  const splittedStr = str.split("")
  let decrypted = ""
  for (char of splittedStr) {
    let index = abc.indexOf(char)
    let targetIndex = index > 0 ? index - 1 : abc.length - 1
    decrypted += abc[targetIndex]
  }
  console.log(decrypted)
}

decrypt("dbu")

// Exercise 8:
const colors = ["red", "indigo", "white", "teal", "yellow"]
const foods = ["bread", "cheese", "cucumber"]

const jumble = function (arr1, arr2) {
  let jumbledArr = []
  let i = 0
  while (i < arr1.length || i < arr2.length) {
    i < arr1.length ? jumbledArr.push(arr1[i]) : null
    i < arr2.length ? jumbledArr.push(arr2[i]) : null
    i++
  }
  return jumbledArr
}

const a = jumble(colors, foods)
console.log(a)

// Exercise 9:
const rawDist = {
  A: 60,
  B: 10,
  C: 10,
  D: 20,
}

const getLetter = () => {
  const letters = Object.keys(rawDist)
  let chance = Math.random()
  if (chance < 0.6) {
    console.log("A")
  } else if (chance < 0.2) {
    console.log("D")
  } else {
    let chance2 = Math.random()
    chance2 < 0.5 ? console.log("B") : console.log("C")
  }
}

getLetter()

// Extension 1:
const printInLoop = (words) => {
  setInterval(() => {
    for (let word of words) {
      console.log(word)
    }
  }, 3000)
}

//printInLoop(["down", "the", "rabbit", "hole"])

// Extension 2:
const getDistance = (p1, p2) => {
  const distance = Math.sqrt(
    Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
  )
  return distance
}

const findClosest = (points, point) => {
  let closestPoint = 0
  let closestDistance = getDistance(points[closestPoint], point)
  for (i = 1; i < points.length; i++) {
    let distance = getDistance(points[i], point)
    if (distance < closestDistance) {
      closestDistance = distance
      closestPoint = i
    }
  }
  return { coordinates: points[closestPoint], distance:closestDistance }
}

let pizzaLocations = [
  { x: 6, y: 12 },
  { x: 3, y: 1 },
  { x: 9, y: 0 },
  { x: 4, y: 10 },
]

let homeLocation = { x: 4, y: 2 }

console.log(findClosest(pizzaLocations, homeLocation))

// Extension 3:
const secretEncrypt = (word, secret) => {
  const abc = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "z",
    "y",
    "z",
  ]

  const splitedWord = word.split("")
  const splittedSecret = secret.split("")
  let encrypted = ""
  for (i = 0; i < splitedWord.length; i++) {
    let indexWord = abc.indexOf(splitedWord[i])
    let indexSecret = i < splittedSecret.length ? i : 0
    let indexTargetSecret = abc.indexOf(splittedSecret[indexSecret])
    encrypted += abc[indexWord + indexTargetSecret]
  }
  console.log(encrypted)
}

secretEncrypt("elephant", "cab")

// Extension 4:
const secretDecrypt = (encryptedMessage, secret) => {
  const abc = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "z",
    "y",
    "z",
  ]
  const splitedEncryptedMsg = encryptedMessage.split("")
  const splittedSecret = secret.split("")
  let decrypted = ""
  for (i = 0; i < splitedEncryptedMsg.length; i++) {
    let indexMsg = abc.indexOf(splitedEncryptedMsg[i])
    let indexSecret = i < splittedSecret.length ? i : 0
    let indexTargetSecret = abc.indexOf(splittedSecret[indexSecret])
    decrypted += abc[indexMsg - indexTargetSecret]
  }
  console.log(decrypted)
}

secretDecrypt("glfrjcpv", "cab")
