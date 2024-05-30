// let date = new Date()
// console.log(typeof(date))

// let date = new Date("August 9,1998")
// // console.log(date)
// // console.log(date.getTime())
// // console.log(date.getDay())
// date.setMinutes(12)
// console.log(date.getMinutes())
// date.setMonth(2)
// console.log(date)

// let date1 = new Date("1998-05-28")
// let date2 = new Date()

// let diff = date2.getTime()-date1.getTime();
// console.log(diff)
// let dayDiff = diff/(1000*60*60*24*30*12)
// console.log(dayDiff)

let date = new Date()
let newDate = date.toLocaleDateString()
let newDate1 = date.toLocaleString()
let newDate2 = date.toISOString()
let newDate3 = date.toUTCString()
console.log(newDate)
console.log(newDate1)
console.log(newDate2)
console.log(newDate3)

