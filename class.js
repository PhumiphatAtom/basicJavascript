class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    getFullName() {
        return this.firstName + this.lastName
    }
}

const person = new Person('Phumiphat', ' Li')
const fullname = person.getFullName()
console.log('fullname', fullname)