// Variables
class Pet {
    constructor(_petName, _ownerName, _species, _greed) {
        this.petName = _petName
        this.ownerName = _ownerName
        this.species = _species
        this.greed = _greed
    }
    petCheck(otherPet) {
        return this.ownerName === otherPet.ownerName
    }
}


const pets = {
    'Select...': [],
    Dog: ["Labrador Retriever", "German Shepherd", "Beagle"],
    Cat: ["Siamese", "Maine Coon", "Persian"],
    Rabbit: ["Holland Lop", "Flemish Giant", "Mini Rex"],
    Bird: ["Budgerigar", "Cockatiel", "African Grey Parrot"],
    Fish: ["Betta", "Guppy", "Angelfish"]
};


const generateSelect = (type) => {
    _D(3, `type: ${type}`);

    let options = '';

    if (type === undefined) {
        Object.keys(pets).forEach(species => {
            options += `<option>${species}</option>`;
        });
    } else if (pets[type]) {
        options += `<option>Select...</option>`;
        pets[type].forEach(option => {
            options += `<option>${option}</option>`;
        });
    } else {
        _D(3, `Species "${type}" not found`);
    }

    _D(3, `options for ${type}: `, options);
    return options;
};


document.addEventListener('DOMContentLoaded', () => {
    const petName1 = document.getElementById('petName1')
    const ownerName1 = document.getElementById('ownerName1')
    const species1 = document.getElementById('species1')
    const greed1 = document.getElementById('greed1')

    const petName2 = document.getElementById('petName2')
    const ownerName2 = document.getElementById('ownerName2')
    const species2 = document.getElementById('species2')
    const greed2 = document.getElementById('greed2')

    const sendButton = document.getElementById('sendButton')

    const alertDiv = document.getElementById('alert')

    const tableBody = document.getElementById('tableBody')

    species1.innerHTML = generateSelect()
    species2.innerHTML = generateSelect()

    species1.addEventListener('change', () => {
        greed1.innerHTML = generateSelect(species1.value)
    })
    species2.addEventListener('change', () => {
        greed2.innerHTML = generateSelect(species2.value)
    })

    sendButton.addEventListener('click', function (e) {
        e.preventDefault()

        _D(3, 'species1', species1.value, 'species2', species2.value, 'greed1', greed1.value, 'greed2', greed2.value)

        if (species1.value.trim() === 'Select...' || species2.value.trim() === 'Select...' || greed1.value.trim() === 'Select...' || greed2.value.trim() === 'Select...') {
            alertDiv.innerHTML = 'ATTENTION: select species and breed for all the pets'
            alertDiv.classList.remove('invisible')
            return
        } else {
            alertDiv.classList.add('invisible')
        }

        const pet1 = new Pet(
            petName1.value,
            ownerName1.value,
            species1.value,
            greed1.value)

        const pet2 = new Pet(
            petName2.value,
            ownerName2.value,
            species2.value,
            greed2.value)

        const petCheck = pet1.petCheck(pet2)

        rowHTML = `
        <tr>
            <td>${pet1.petName}</td><td>${pet1.ownerName}</td><td>${pet1.species}</td><td>${pet1.greed}</td>
            <td>${pet2.petName}</td><td>${pet2.ownerName}</td><td>${pet2.species}</td><td>${pet2.greed}</td>
        `
        if (petCheck) {
            rowHTML += `<td class="table-success">Same owner</td>`
        } else {
            rowHTML += `<td class="table-warning">Different owner</td>`
        }

        rowHTML += `</tr>`

        tableBody.innerHTML += rowHTML


        document.getElementsByTagName('form')[0].reset();
        [petName1.value, petName2.value, ownerName1.value, ownerName2.value] = Array(4).fill('');

    })

})