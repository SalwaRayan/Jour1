// 01 - Hello World

console.log("Hello World !")

// 02 - String

var test = "My name is Salwa"

console.log(test)

// 03 - Concatenation

var firstName = "Salwa"

console.log("Nice to meet you " + firstName)

// 04 - String Length

var testLength = "I'm very long !"

console.log(testLength.length)

// 05 Replace

var food = "croissant is meh"

food = food.replace("meh", "good")

console.log(food)

// 06 - Up and Down

var basic = "This is Cool"
var basicUp = basic.toUpperCase()
var basicDown = basic.toLowerCase()

console.log(basic)
console.log(basicUp)
console.log(basicDown)

// 07 - Split

var word = "banana"
var letters = word.split("")

console.log(letters)

// 08 - Template

var age = 22

//var template = "I'm " + age + " years old"
var template = `I'm ${age} years old`

console.log(template)

// Bonus - Ligne

let chaineLongue = `Voici une très long chaîne qui a besoin 
d'être passée à la ligne parce que sinon 
ça risque de devenir illisible`

console.log (chaineLongue)

// Bonus - Banjaur

      //Alin advice: "console.log(changed.replace('o', 'a').replace('o', 'a'));"

var changed = "Bonjour"  

changed = changed.replaceAll('o', 'a')

console.log(changed)

