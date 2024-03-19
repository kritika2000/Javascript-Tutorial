let d;

d = new Date();

d = d.toString();

d = new Date(2021, 6, 10); // year date month(0 indexed month, i.e. 0 is january)

d = new Date(2021, 0, 10, 12, 30, 45); // yy dd mm hh mm ss.

//  For putting Time stamp put -> yy-dd-mmThh:mm:ss
d = new Date('2021-07-10T12:30:00'); // yy-dd-mm Sat Jul 10 2021 05:30:00 GMT+0530 (India Standard Time) 'object'
d = new Date('2021/10/04 12:30:00'); // mm/dd/yy or yy/mm/dd
// Use mm-day-yy, with hyphens to get the correct date, works fine with slash.

// Timestamp -> no. of seconds passed since 1 january 1970 in ms.
d = Date.now(); // 1694945660554

d = new Date('07-10-2022');
d = d.getTime(); // gives the no. of ms passed since 1january 1970 until the given date.

d = new Date();
d = Math.floor(d.getTime() / (1000 * 60 * 60 * 24 * 365)); // 53 years passed until today.

d = new Date();

// Create Time Stamp from milliseconds.
d = new Date(1694945660554); // passing time stamp to get the date time.

// console.log(d, typeof d); // object, Sun Sep 17 2023 15:30:47 GMT+0530 (India Standard Time)

/** DATE Methods */
let x;

//  For putting Time stamp put -> yy-dd-mmThh:mm:ss, otherwise this will return invalid date.
let date = new Date('2013-07-10T15:30:00'); //mm-dd-yy

x = date.toString(); // gives string representation of the date time.

x = date.getTime(); // gives the no. of ms passed since 1 january 1970 until the given date.

x = date.valueOf(); // gives the value of timeStamp in milliseconds.

x = date.getFullYear(); // 2013, get only the year of the date.

x = date.getMonth() + 1; // gives one month behind, as month is 0 based.

x = date.getDate(); // give day of the month.

x = date.getDay(); // gives day of the month.

x = date.getHours();

x = date.getMinutes();

x = date.getSeconds();

x = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

x = Intl.DateTimeFormat('en-US').format(date);

x = Intl.DateTimeFormat('default', { month: 'long' }).format(date); // July, gives only month

x = date.toLocaleString('default', { month: 'short' }); // Jul.

x = date.toLocaleString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'IST',
});

// console.log(x);

/*********************************** Formatting Dates ********************************** */
const newDate = new Date();
const dateString = newDate.toLocaleDateString(); // returns the date portion of the date according to the current locale, dd/mm/yy(For India).
console.log(dateString);

const timeString = newDate.toLocaleTimeString();
console.log(timeString); // returns the time portion of the date, according to current Locale -> 17:08:42(hh:mm:ss).

const dateTimeString = newDate.toLocaleString();
console.log(dateTimeString); // returns both date and time portion according to current locale. -> 17/09/2023, 17:10:00

const dateString1 = '2023-03-10T10:30:00.000Z';
console.log(new Date(Date.parse(dateString))); // Date.parse method converts the string representing date to date object.
