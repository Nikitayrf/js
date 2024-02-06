'use strict';

const arr = [
    {
        name: 'Cex',
        surName: 'Ivanov' 
    },
    {
        name: 'Boris',
        surName: 'Kozlov' 
    },
    {
        name: 'Andrey',
        surName: 'Popov' 
    },
    {
        name: 'Filimon',
        surName: 'Gorshkov' 
    }
];
const sortByName = (arrOfObj) => {
    return arrOfObj.sort((a, b) => a.name.localeCompare(b.name));
}
console.log(sortByName(arr));

/* (4) [{…}, {…}, {…}, {…}]
0: {name: 'Andrey', surName: 'Popov'}
1: {name: 'Boris', surName: 'Kozlov'}
2: {name: 'Cex', surName: 'Ivanov'}
3: {name: 'Filimon', surName: 'Gorshkov'}
length: 4
[[Prototype]]: Array(0)
*/