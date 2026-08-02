const findTheOldest = function(objArray) {
    return objArray.reduce((lastPerson, nextPerson) => {
        if (lastPerson.yearOfDeath === undefined) lastPerson.yearOfDeath = (new Date).getFullYear();
        if (nextPerson.yearOfDeath === undefined) nextPerson.yearOfDeath = (new Date).getFullYear();


        return (lastPerson.yearOfDeath - lastPerson.yearOfBirth) 
             > (nextPerson.yearOfDeath - nextPerson.yearOfBirth)
            ? lastPerson : nextPerson});
};

// Do not edit below this line
module.exports = findTheOldest;
