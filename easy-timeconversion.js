/* Given a time in 12-hour AM/PM format, convert it to military (24-hour) 
time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock. */

const timeConversion = (time) => {
    let timeArray = time.split('')
    timeArray.splice(8)
    let original = [...timeArray]

    let hour = timeArray.splice(0, 2).join('')

    if (time.indexOf('AM') > 0 && Number(hour) === 12) { 
        timeArray.splice(0, 0, '00')
        return timeArray.join('')
    } 
    else if (time.indexOf('PM') > 0 && Number(hour) !== 12){
        let hour24 = Number(hour) + 12
        timeArray.splice(0, 0, hour24)
        return timeArray.join('')
    }    
    return original.join('')
}

console.log(timeConversion('12:01:00AM'))
// 00:01:00
console.log(timeConversion('07:00:00AM'))
// 07:00:00
console.log(timeConversion('12:01:00PM'))
// 12:01:00
console.log(timeConversion('07:05:45PM')) 
// 19:05:45
