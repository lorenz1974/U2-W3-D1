
// Classi
class Utente {
    constructor(_firstName, _lastName, _age, _location) {
        this.firstName = _firstName
        this.lastName = _lastName
        this.age = _age
        this.location = _location
    }

    calculateAgeDifference(otherPerson) {

        const difference = this.age - otherPerson.age
        let differenceText
        if (difference > 0) {
            differenceText = `${this.firstName} è più vecchi* di ${otherPerson.firstName}`
        } else if (difference < 0) {
            differenceText`${otherPerson.firstName} è più vecchi* di ${this.firstName}`
        } else {
            differenceText = `${this.firstName} e ${otherPerson.firstName} hanno la stessa età`
        }

        return differenceText
    }
}

const antonio = new Utente('Antonio', 'Rossi', 40, 'Roma')
const valeria = new Utente('Valeria', 'Verdi', 40, 'Roma')

_D(3, antonio)
_D(3, valeria)
_W(antonio.calculateAgeDifference(valeria))