class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName
    this.lastName = _lastName
    this.age = _age
    this.location = _location
  }
  compareAge(otherUser) {
    if (this.age > otherUser.age)
      return `${this.firstName} ha più anni di ${otherUser.firstName}`
    else {
      return `${otherUser.firstName} ha più anni di ${this.firstName}`
    }
  }
}

const andrea = new User('Andrea', 'Freddi', 44, 'Creta')
const diana = new User('Diana', 'Bertè', 30, 'Creta')
const stefano = new User('Stefano', 'Casasola', 19, 'Gorizia')

console.log(andrea.compareAge(diana))
console.log(diana.compareAge(stefano))
