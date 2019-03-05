//
// Object destructuring
//

// const person = {
//     name: 'Rasitha',
//     age: 28,
//     location: {
//         city: 'Alawwa',
//         temp: 92
//     }
// };

// const name = person.name;
// const age = person.age;

// const {name = 'Anonymous', age} = person;

// console.log(`${name} is ${age}`);

// const {city, temp} = person.location;

// if (city && temp)
// {
//     console.log(`This person location is ${city}. Temperature is ${temp}`);
// }

// const book = {
//     name: 'Madolduwa',
//     author: 'Martin Wickramasinghe',
//     publisher: {
//         // name: 'Perera'
//     }
// }

// const {name: publishername = 'Self-published'} = book.publisher;

// if (book.publisher)
// {
//     console.log(`Publisher is ${publishername}`);
// }

//
// Array destructuring
//

const item = ['Coffe (hot)', '$2.00', '$2.50', '$275'];

const [coffee, , mediumPrice] = item;

console.log(`A medium ${coffee} is ${mediumPrice}`);