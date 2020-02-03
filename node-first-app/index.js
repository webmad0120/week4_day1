const chalk = require('chalk')
const dogNames = require('dog-names')
const faker = require('faker')

const randomName = faker.name.findName()
const dogName = dogNames.femaleRandom()

console.log(chalk.blue.bgRed.bold(`Tu nombre random es ${randomName} y tu perro random es ${dogName}`))