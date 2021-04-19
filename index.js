// Code your solution here
const drivers = []
const match = []

function findMatching(drivers, match) {
    return drivers.filter(result => result.toLowerCase() === match.toLowerCase()) 
    }
    
//       1) returns all drivers that match the passed in name
//       2) returns matching drivers if case does not match but letters do
//       3) returns an empty array if there is no match
function fuzzyMatch(drivers, string){
    return drivers.filter( result =>
        result.toLowerCase().indexOf(string.toLowerCase()) === 0
      )
}

//       4) returns a driver if beginning provided letters match
//       5) does not return drivers if only middle or ending letters match
//       6) does not return drivers if only middle or ending letters match
function matchName(drivers, match) {
    return drivers.filter( result => result.name === match)}
//       7) accesses the data structure to check if name matches