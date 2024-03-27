const drivers = ['Bob', 'Jerry', 'Tom', 'Peter', 'David'];

function findMatching(drivers ,query){
    return drivers.filter(drivers => drivers.toLowerCase() === query.toLowerCase());
}

const query = 'B';
const matchingDrivers = fuzzyMatch(drivers, query);
console.log(matchingDrivers);

function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
  }

const driver = [
        {name:'Bob',homeTown :'Nairobi'},
        {name :'Jerry',homeTown :'Mombasa'},
        {name :'Tom',homeTown:'Kisumu'},
        {name :'Peter',homeTown:'Nakuru'},
];

const question = 'Bob';
const matchingDriver = matchName(drivers, question);
console.log(matchingDriver);

function matchName(drivers, query) {
    return drivers.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
  }
  
