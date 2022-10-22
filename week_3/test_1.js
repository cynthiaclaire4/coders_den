//exercise 1
firstName = 'cynthia'
lastName = 'chisom'
country = 'nigeria'
city = 'lagos'
age = 14
isMarried = false
year =  2022
console.log(typeof(isMarried))
//exercise 2
console.log(typeof('10') == typeof(10))

//exercise 3
console.log(parseInt('9.8') == 10)

//exercise 4(i)
let i = 5
let me = 2
console.log(i > me)

//exercise 4(ii)
console.log(i < me)

//exercise 5
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 3)
console.log(4 === 3)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
console.log('jargon'.lengthOf !== 'python'.lengthOf)

//exercise 6
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
console.log(!('dragon'.search('on')) && !('python'.search(!'on')))

//exercise 7
let time = new Date()
console.log(time.getFullYear())
console.log(time.getMonth() + 1) 
console.log(time.getDay())// 5 = friday
console.log(time.getHours())
console.log(time.getMinutes())
console.log(time.getTime())
