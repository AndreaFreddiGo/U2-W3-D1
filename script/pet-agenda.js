const petNameInput = document.getElementById('petName')
const ownerNameInput = document.getElementById('ownerName')
const speciesInput = document.getElementById('species')
const breedInput = document.getElementById('breed')

const form = document.getElementById('pet-form')

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName
    this.ownerName = _ownerName
    this.species = _species
    this.species = _breed
  }
  compareOwner(otherPet) {
    if (this.ownerName === otherPet.ownerName) return true
  }
}

form.addEventListener('submit', function (e) {
  e.preventDefault()
  const pet = new Pet(
    petNameInput.value,
    ownerNameInput.value,
    speciesInput.value,
    breedInput.value
  )

  console.log('Created PET', pet)
  console.log(pet.compareOwner(pet))
})
