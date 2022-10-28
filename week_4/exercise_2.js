//exercise 1

let grades = 77
switch (true) { 
    case grades >= 80 :
        console.log('A')
        break;
    case grades >= 70 && grades < 80 :
        console.log('B')
        break;
    case grades <= 69  && grades > 59 :
        console.log('C')
        break;
    case grades <= 50 && grades > 49 :
        console.log('D')
        break;
    case grades == 0 || grades <= 49 :
        console.log('F')
        break;
    default:
        console.log('you didnt write exam')
        break;
}

let grade = 55
if (grade >= 80) {
    console.log('A')
} else if (grade >= 70 && grade < 80) {
    console.log('B')
} else if (grade <= 69 && grade > 59) {
    console.log('C')
} else if (grade <= 59 && grade > 49) {
    console.log('D')
} else if (grade <= 49) 
    console.log('F')

// exercise 2
let season = prompt('Enter the month:')
switch (season) {
    case 'September' :
    case 'October' :
    case 'November' :
        console.log('the season is Autumn')
        break;
    case 'December' :
    case 'January' :
    case 'February' :
        console.log('season is winter')
        break;
    case 'March':
    case 'April' : 
    case 'May' :
        console.log('the season is spring')
        break;
    case 'June':
    case 'July': 
    case 'August' :
        console.log('the season is summer')
        break;
    default:
        console.log('this not a month')
        break;
}

//exercise 3
let day = prompt('What is the day today?')
switch (day) {
    case 'saturday' :
    case 'sunday' :
        console.log(day + ' is a weekend')
        break;
    case 'Monday' :
    case 'Tuesday' :
    case 'Wenesday' :
    case 'Thursday' :
    case 'Friday' :
        console.log(day + ' is a working day')
        break;
    default:
        console.log('this is not a day')
        break;
}
