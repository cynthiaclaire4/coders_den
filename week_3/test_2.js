/*let base = prompt("enter base:" );
let height = prompt("enter height: ");
let areOfTriangle = console.log('the area of a triangle is' 0.5 * ${base} * ${height})
*/
//exercise 15
let Time = new Date()
let Year = Time.getFullYear()
let Month = String(Time.getMonth() + 1).padStart(2, '0');
let Day = String(Time.getDay()).padStart(2, '0')
let hourly = String(Time.getHours()).padStart(2, '0')
let minutely = String(Time.getMinutes()).padStart(2, '0')
console.log(Year + '-' +Month + '-' +Day + ' ' +hourly + ':' + minutely)

//exercise 15 ii//
console.log(Day + '-' +Month + '-' +Year + ' ' +hourly + ':' + minutely)
//exercise 15 iii//
console.log(Year + '/' +Month + '/' +Day + ' ' +hourly + ':' + minutely)

//level 3
let humanTime = new Date()
let humanYear = humanTime.getFullYear()
let humanMonth = String(humanTime.getMonth() + 1).padStart(2, '0');
let humanDay = String(humanTime.getDay()).padStart(2, '0')
let hour = String(humanTime.getHours()).padStart(2, '0')
let minute = String(humanTime.getMinutes()).padStart(2, '0')
console.log(humanYear + '-' +humanMonth + '-' +humanDay + ' ' +hour + ':' + minute) 