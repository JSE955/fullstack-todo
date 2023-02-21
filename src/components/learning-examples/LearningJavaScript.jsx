const person = {
    name: 'Jordan',
    address: {
        street: 'Fake Street',
        city: 'Charleston',
        country: 'USA'
    },
    profiles: ['Twitter', 'LinkedIn', 'Instagram'],
    printProfile: () => {
        person.profiles.map(
            profile => console.log(profile)
        )
    }
}


export default function LearningJavaScript() {
    return (
        <>
            <div>{person.name} is Learning JavaScript, he lives in {person.address.city}</div>
            <div>His {person.printProfile()} is crazy</div>
        </>
    )
}