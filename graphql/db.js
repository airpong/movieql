export const people = [
    {
        id:"0",
        name: "Nicolas",
        age: 18,
        gender: "female"
    },
    {
        id:"1",
        name: "dal",
        age: 18,
        gender: "female"
    }
]


export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id))
    return filteredPeople[0]
}